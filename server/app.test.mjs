import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve, sep } from 'node:path';
import { createApp } from './app.mjs';

test('local submissions, account sessions and provider access',async()=>{
  const dir=mkdtempSync(join(tmpdir(),'bextudio-test-'));
  const app=createApp({dataDirectory:dir,env:{AGENT_ACCESS_PASSWORD:'test-only-password',OPENROUTER_API_KEY:''}});
  await new Promise(resolve=>app.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${app.address().port}`;
  const post=(path,data,cookie)=>fetch(base+path,{method:'POST',headers:{'Content-Type':'application/json',...(cookie?{cookie}:{})},body:JSON.stringify(data)});
  try{
    assert.equal((await post('/api/contact',{Name:'Test',Email:'invalid',Text:'Hello'})).status,400);
    assert.equal((await post('/api/contact',{Name:'Test',Email:'test@example.com',Text:'Local test submission'})).status,201);
    assert.equal((await post('/api/newsletter',{email:'subscriber@example.com'})).status,201);
    const account=await post('/api/auth/signup',{name:'Local Test',email:'account@example.com',password:'test-password-123'});assert.equal(account.status,201);
    const cookie=account.headers.get('set-cookie').split(';')[0];assert.match(account.headers.get('set-cookie'),/HttpOnly/);
    const session=await fetch(base+'/api/auth/session',{headers:{cookie}});assert.equal((await session.json()).user.email,'account@example.com');
    assert.equal((await post('/api/auth/login',{email:'account@example.com',password:'incorrect-password'})).status,401);
    assert.equal((await post('/api/auth/login',{email:'account@example.com',password:'test-password-123'})).status,200);
    assert.equal((await post('/api/providers/openrouter',{})).status,401);
    assert.equal((await post('/api/providers/openrouter',{},cookie)).status,503);
    assert.equal((await post('/api/agents/unlock',{password:'wrong'})).status,401);
    assert.equal((await post('/api/agents/unlock',{password:'test-only-password'})).status,200);
    assert.equal((await post('/api/auth/logout',{},cookie)).status,200);
    const expired=await fetch(base+'/api/auth/session',{headers:{cookie}});assert.equal((await expired.json()).user,null);
    const cross=await fetch(base+'/api/contact',{method:'POST',headers:{'Content-Type':'application/json',Origin:'https://unrelated.example'},body:'{}'});assert.equal(cross.status,403);
  } finally{await new Promise(resolve=>app.close(resolve));assert.ok(resolve(dir).startsWith(resolve(tmpdir())+sep+'bextudio-test-'));rmSync(dir,{recursive:true,force:true});}
});
