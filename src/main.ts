import { createApp } from 'vue'
import App from './App.vue'
// import TimeLine from './components/TimeLine/index'
// import TimeLine from '../lib/vue3-time-line.mjs'
import TimeLine from '@boyzcf/vue3-time-line'

const app = createApp(App)

app.use(TimeLine, { comName: 'TimeLine' })
app.mount('#app')
