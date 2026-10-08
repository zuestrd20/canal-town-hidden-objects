import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const root=path.dirname(new URL(import.meta.url).pathname),out=path.join(root,'dist');
fs.mkdirSync(path.join(out,'assets'),{recursive:true});
for(const file of ['index.html','style.css','app.mjs','engine.mjs','levels.mjs','favicon.svg','assets/objects.svg','assets/objects.mjs'])fs.copyFileSync(path.join(root,file),path.join(out,file));
const manifest=JSON.parse(fs.readFileSync(path.join(root,'assets/scene-manifest.json')));
for(const [name,info] of Object.entries(manifest)){
 const text=info.parts.map(p=>fs.readFileSync(path.join(root,p),'utf8').trim()).join('');
 const bytes=Buffer.from(text,'base64');
 if(bytes.length!==info.bytes||crypto.createHash('sha256').update(bytes).digest('hex')!==info.sha256)throw Error(`Image integrity check failed: ${name}`);
 fs.writeFileSync(path.join(out,'assets',name+'.webp'),bytes);
 console.log(`Verified ${name}.webp: ${bytes.length} bytes, SHA256 ${info.sha256}`);
}
fs.writeFileSync(path.join(out,'.nojekyll'),'');
fs.writeFileSync(path.join(out,'release.json'),JSON.stringify({commit:process.env.GITHUB_SHA||'local',builtAt:new Date().toISOString(),art:Object.fromEntries(Object.entries(manifest).map(([name,info])=>[name,{bytes:info.bytes,sha256:info.sha256}]))},null,2));
console.log('Static site ready in dist/.');
