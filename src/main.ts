import { createApp } from 'vue'

import App from './App.vue'
import plugins from './plugins'
import router from './router'
import stores from './stores'

import './styles/main.css'
import 'uno.css'

const app = createApp(App)

app.use(router)
app.use(stores)

plugins(app)

app.mount('#app')
