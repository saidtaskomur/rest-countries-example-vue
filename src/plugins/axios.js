import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_BASE_API_URL
const Axios = axios.create();

Axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
Axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
Axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
Axios.defaults.headers.post['Access-Control-Allow-Origin'] = getLocalUrl();
Axios.defaults.withCredentials = true;
Axios.defaults.crossDomain = true;

Axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
});

Axios.interceptors.response.use(function (response) {
    return response;
    }, function (error) {
    return Promise.reject(error);
});

function getLocalUrl() {
    const url = window.location.href;
    const arr = url.split('/');

    return `${arr[0]}//${arr[2]}`;
}
export default Axios;