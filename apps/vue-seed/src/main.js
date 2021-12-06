import { createApp } from 'vue'
import App from './App.vue'

import { defineCustomElements } from '@ac/components/loader';

defineCustomElements(window);

createApp(App).mount('#app')
