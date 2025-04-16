import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Importação das páginas
import Home from './views/Home.vue'
import Sobre from './views/Sobre.vue'
import Loja from './views/Loja.vue'
import Maps from './views/Maps.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.mount('#app') 