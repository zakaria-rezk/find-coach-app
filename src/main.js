import { createApp } from 'vue';
import router from './router.js';
import App from './App.vue';
import store  from './store.js/index.js';
import BaseCard from './UI/BaseCard.vue'
import BaseBadge from './UI/BaseBadge.vue'
import BaseButton from './UI/BaseButton.vue'
import BaseSpinner from './UI/BaseSpinner.vue'
import BaseDialog from './UI/BaseDialog.vue'
const app=createApp(App);
app.component('base-card',BaseCard);
app.component('base-dialog',BaseDialog);
app.component('base-button',BaseButton)
app.component('base-badge',BaseBadge)
app.component('base-spinner',BaseSpinner)
app.use(store)
app.use(router);
app.mount('#app');