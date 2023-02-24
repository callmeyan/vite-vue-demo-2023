// 导入所需要的依赖
import { createApp } from 'vue';
import { createPinia } from 'pinia';

// 导入起始页面等
import App from './App.vue';
// 所有路由配置
import router from './router';

import './assets/main.css';

// 创建vue的实例
const app = createApp(App);

// 使用状态管理
app.use(createPinia());
app.use(router);

app.mount('#app');
