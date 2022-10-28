// import 'babel-polyfill'
// import 'regenerator-runtime/runtime';
// import 'whatwg-fetch';
// import 'custom-event-polyfill';
// import 'core-js/stable/promise';
// import 'core-js/stable/symbol';
// import 'core-js/stable/string/starts-with';
// import 'core-js/web/url';
import Vue from "vue";
import App from "./App.vue";
import routes from "./routes";

Vue.config.productionTip = false;

let instance = null;
let router = null;

if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

function render(props = {}) {
  console.log(props,routes);
  const { container } = props;
  router = routes
  instance = new Vue({
    router,
    qiankun: props,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#sub-app2") : "#sub-app2");
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("vue app bootstraped");
}

export async function mount(props) {
  console.log(`vue props`, props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance = null;
  instance.$el.innerHTML = "";
  router = null;
}
