import { createApp } from './app.mjs';
const host=process.env.HOST||'127.0.0.1';const port=Number(process.env.PORT||5174);
createApp().listen(port,host,()=>console.log(`Bextudio server: http://${host}:${port}`));
