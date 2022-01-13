import { _ as _export_sfc } from "./index.db642b18.js";
import { o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, F as Fragment, e as createTextVNode } from "./vendor.2beb0069.js";
const _sfc_main$1 = {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    };
  }
};
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Edit "),
  /* @__PURE__ */ createBaseVNode("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ createTextVNode(" to test hot module replacement.")
], -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("h1", null, toDisplayString($props.msg), 1),
    createBaseVNode("button", {
      onClick: _cache[0] || (_cache[0] = ($event) => $data.count++)
    }, "count is: " + toDisplayString($data.count), 1),
    _hoisted_1$1
  ], 64);
}
var HelloWorld = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
var _imports_0 = "/vite-vue/assets/logo.03d6d6da.png";
const _hoisted_1 = {
  alt: "Vue logo",
  src: _imports_0
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("img", _hoisted_1);
}
var block0 = {};
const _sfc_main = {
  components: {
    HelloWorld
  }
};
if (typeof block0 === "function")
  block0(_sfc_main);
var home = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render]]);
export { home as default };
