import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve, sep } from 'node:path';
import { createApp } from './app.mjs';

test('admin isolation, editable content, media validation and revision recovery',async()=>{
  const directory=mkdtempSync(join(tmpdir(),'bextudio-admin-test-'));
  const app=createApp({dataDirectory:directory,env:{ADMIN_EMAIL:'admin@example.test',ADMIN_PASSWORD:'admin-test-only-password'}});
  await new Promise(resolve=>app.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${app.address().port}`;
  const post=(path,data,cookie)=>fetch(base+path,{method:'POST',headers:{'Content-Type':'application/json',...(cookie?{cookie}:{})},body:JSON.stringify(data)});
  const get=(path,cookie)=>fetch(base+path,{headers:cookie?{cookie}:{}});
  try{
    assert.equal((await get('/api/admin/content')).status,401);
    const user=await post('/api/auth/signup',{name:'User',email:'user@example.test',password:'test-user-password'});
    const userCookie=user.headers.get('set-cookie').split(';')[0];assert.equal((await get('/api/admin/content',userCookie)).status,401);
    assert.equal((await post('/api/admin/login',{email:'admin@example.test',password:'wrong'})).status,401);
    const login=await post('/api/admin/login',{email:'admin@example.test',password:'admin-test-only-password'});assert.equal(login.status,200);
    const cookie=login.headers.get('set-cookie').split(';')[0];const initial=await (await get('/api/admin/content',cookie)).json();
    const edited=structuredClone(initial.site);edited.edits[initial.originals.copy[0].id]='A test heading';edited.tokenOverrides['--color-brand']='#123456';edited.articles[0].draft=true;
    edited.tokenOverrides['--font-family-fa']='"IBM Plex Sans Arabic", sans-serif';
    edited.tokenOverrides['--font-family-ar']='Estedad, sans-serif';
    edited.articles[1].bodyHtml='<h2>Safe</h2><script>alert(1)</script><p onclick="alert(1)">Text</p><a href="javascript:alert(1)">Link</a>';
    const saved=await post('/api/admin/save',{site:edited,revision:initial.site.revision},cookie);assert.equal(saved.status,200);const next=(await saved.json()).site;assert.equal(next.revision,1);
    assert.equal(next.tokenOverrides['--color-brand'],'#123456');assert.doesNotMatch(next.articles[1].bodyHtml,/script|onclick|javascript/);
    const published=await (await get('/api/site')).json();assert.equal(published.articles.length,initial.site.articles.length-1);
    assert.equal(published.tokenOverrides['--font-family-fa'],'"IBM Plex Sans Arabic", sans-serif');
    assert.equal(published.tokenOverrides['--font-family-ar'],'Estedad, sans-serif');
    assert.equal((await post('/api/admin/save',{site:edited,revision:0},cookie)).status,409);
    const invalid=structuredClone(next);invalid.tokenOverrides['--color-brand']='url(https://invalid.example)';assert.equal((await post('/api/admin/save',{site:invalid,revision:1},cookie)).status,400);
    assert.equal((await post('/api/admin/upload',{dataUrl:'data:image/svg+xml;base64,PHN2Zz4='},cookie)).status,400);
    assert.equal((await post('/api/admin/upload',{dataUrl:'data:image/png;base64,ZmFrZQ=='},cookie)).status,400);
    const image=await post('/api/admin/upload',{dataUrl:'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'},cookie);assert.equal(image.status,201);const media=(await image.json()).path;assert.equal((await get(media)).headers.get('content-type'),'image/gif');
    const history=await (await get('/api/admin/content',cookie)).json();assert.equal(history.history.length,1);
    const restored=await post('/api/admin/restore',{id:history.history[0].id,revision:1},cookie);assert.equal(restored.status,200);const original=(await restored.json()).site;assert.equal(original.revision,2);assert.deepEqual(original.articles,initial.site.articles);assert.deepEqual(original.edits,{});assert.deepEqual(original.tokenOverrides,{});
    const foreign=await fetch(base+'/api/admin/save',{method:'POST',headers:{'Content-Type':'application/json',Origin:'https://foreign.example',cookie},body:'{}'});assert.equal(foreign.status,403);
  }finally{await new Promise(resolve=>app.close(resolve));assert.ok(resolve(directory).startsWith(resolve(tmpdir())+sep+'bextudio-admin-test-'));rmSync(directory,{recursive:true,force:true});}
});
