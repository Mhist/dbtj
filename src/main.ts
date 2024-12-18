import App from '@/App.vue';
import setupPlugins from '@/plugins';
import { createSSRApp } from 'vue';
// 引入uview-plus对小程序分享的mixin封装
import mpShare from 'uview-plus/libs/mixin/mpShare';
console.log(mpShare);
// 引入UnoCSS
import 'virtual:uno.css';

export function createApp() {
  const app = createSSRApp(App);
  app.use(setupPlugins);
  app.mixin(mpShare);

  return {
    app,
  };
}
