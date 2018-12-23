
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from 'vue'

require('./bootstrap');

window.Vue = require('vue');
window.Bus = new Vue();

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 Vue.component('example', require('./components/ExampleComponent.vue').default);
Vue.component('groups', require('./components/Groups.vue').default);
Vue.component('create-group', require('./components/CreateGroup.vue').default);
Vue.component('group-chat', require('./components/GroupChat.vue').default);

const app = new Vue({
  }).$mount('#app')