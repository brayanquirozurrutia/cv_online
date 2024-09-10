import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/style.css';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import FontAwesomeIcon from './plugins/font-awesome';

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        iconfont: 'faSvg',
    },
})

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
