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
import store from "./store";

Vue.config.productionTip = false;
Vue.config.$store = store;


let instance = null;
let router = null;

if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

function render(props = {}) {
  const { container } = props;
  router = routes;
  instance = new Vue({
    router,
    store,
    qiankun: props,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#sub-app1") : "#sub-app1");
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
  props.onGlobalStateChange((state) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, store);
    if (!state) return;
    store.commit("setInput", state.input);
  });
}

export async function unmount() {
  instance.$destroy();
  instance = null;
  instance.$el.innerHTML = "";
  router = null;
}
