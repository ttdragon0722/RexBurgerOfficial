import { createApp } from 'vue'
import App from './App.vue'

import './style.css'

import { gsap } from 'gsap'

// init
const app = createApp(App)

app.mixin({
    created: function () {
        this.gsap = gsap
    }
})

app.use(gsap)

app.config.productionTip = false

app.mount('#app')