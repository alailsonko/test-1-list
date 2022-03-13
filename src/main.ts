import App from 'App.vue';
import routes from 'routes';
import 'sass/global.scss';
import { createApp } from 'vue';

createApp(App).use(routes).mount('#app');
