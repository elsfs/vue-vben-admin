import { createApp } from 'vue';

import { createPinia } from 'pinia';
import { state } from 'shared';

import App from './App.vue';

// window.useStore
import './stores/counter';

state.message = 'Hello from host!';

const app = createApp(App);
app.use(createPinia());
app.mount('#app');
