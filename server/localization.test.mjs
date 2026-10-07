import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,rmSync,mkdirSync,writeFileSync,readFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join,resolve,sep} from 'node:path';
import {createApp} from './app.mjs';

test('localized URLs, HTML metadata, editable translations and revision recovery',async()=>{
  const directory=mkdtempSync(join(tmpdir(),'bextudio-locale-test-')),dist=join(directory,'dist');mkdirSync(dist);
  writeFileSync(join(dist,'index.html'),readFileSync(resolve('index.html')));writeFileSync(join(dist,'routes-manifest.json'),readFileSync(resolve('public/routes-manifest.json')));
  const app=createApp({dataDirectory:join(directory,'data'),distDirectory:dist,env:{ADMIN_EMAIL:'locale@example.test',ADMIN_PASSWORD:'locale-test-only-password'}});
  await new Promise(done=>app.listen(0,'127.0.0.1',done));const base=`http://127.0.0.1:${app.address().port}`;
  const post=(path,data,cookie)=>fetch(base+path,{method:'POST',headers:{'Content-Type':'application/json',...(cookie?{cookie}:{})},body:JSON.stringify(data)});
  try{
    for(const [locale,dir] of [['en','ltr'],['fa','rtl'],['ar','rtl'],['tr','ltr']]){
      const response=await fetch(base+(locale==='en'?'':'/'+locale)+'/services');assert.equal(response.status,200);const html=await response.text();assert.ok(html.includes(`<html lang="${locale}" dir="${dir}">`));assert.ok(html.includes('hreflang="tr"'));assert.ok(html.includes('rel="canonical"'));assert.ok(!html.includes('<title>Page not found'));
      assert.equal((await fetch(base+'/'+locale+'/not-a-real-page')).status,404);
      assert.equal((await fetch(base+'/'+locale+'/blog/what-is-a-brand-brain')).status,200);
      assert.equal((await fetch(base+'/'+locale+'/blog/not-a-real-article')).status,404);
    }
    const login=await post('/api/admin/login',{email:'locale@example.test',password:'locale-test-only-password'});const cookie=login.headers.get('set-cookie').split(';')[0];
    const initial=await (await fetch(base+'/api/admin/content',{headers:{cookie}})).json();const site=structuredClone(initial.site);
    site.translations.fa.Services='خدمات آزمایشی';site.translations.ar.Services='خدمات تجريبية';site.translations.tr.Services='Deneme hizmetleri';
    assert.equal((await post('/api/admin/save',{site,revision:site.revision},cookie)).status,200);
    const published=await (await fetch(base+'/api/site')).json();assert.equal(published.translations.fa.Services,'خدمات آزمایشی');
    assert.match(await (await fetch(base+'/fa/services')).text(),/<title>خدمات آزمایشی \| Bextudio<\/title>/);
    const invalid=structuredClone(published);invalid.translations.fa.Services={invalid:true};assert.equal((await post('/api/admin/save',{site:invalid,revision:1},cookie)).status,400);
    const restore=await post('/api/admin/restore',{id:1,revision:1},cookie);assert.equal(restore.status,200);assert.deepEqual((await restore.json()).site.translations,{fa:{},ar:{},tr:{}});
    const sitemap=await (await fetch(base+'/sitemap.xml')).text();assert.ok(sitemap.includes('/fa/services'));assert.ok(sitemap.includes('/ar/blog/what-is-a-brand-brain'));assert.ok(!sitemap.includes('/admin'));
    const adminHtml=await (await fetch(base+'/fa/admin')).text();assert.ok(adminHtml.includes('<html lang="en" dir="ltr">'));
  }finally{await new Promise(done=>app.close(done));assert.ok(resolve(directory).startsWith(resolve(tmpdir())+sep+'bextudio-locale-test-'));rmSync(directory,{recursive:true,force:true});}
});
