import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.headers['Accept'] = 'application/json'
Vue.prototype.$axios = axios
