import { o as openBlock, c as createElementBlock, a as createBaseVNode, r as resolveComponent, F as Fragment, b as renderList, t as toDisplayString, d as createBlock, w as withCtx, e as createTextVNode, n as normalizeClass, f as createVNode, g as renderSlot, h as createRouter, i as createWebHistory, j as createApp } from "./vendor.2beb0069.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var bootstrap_min = "";
const scriptRel = "modulepreload";
const seen = {};
const base = "/vite-vue/";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", rej);
      });
    }
  })).then(() => baseModule());
};
const routes = [{ "name": "careers", "path": "/careers", "component": () => __vitePreload(() => import("./careers.e86c2dca.js"), true ? ["assets/careers.e86c2dca.js","assets/vendor.2beb0069.js"] : void 0), "props": true }, { "name": "contact", "path": "/contact", "component": () => __vitePreload(() => import("./contact.68765ac5.js"), true ? ["assets/contact.68765ac5.js","assets/vendor.2beb0069.js"] : void 0), "props": true }, { "name": "features", "path": "/about/features", "component": () => __vitePreload(() => import("./features.803be774.js"), true ? ["assets/features.803be774.js","assets/vendor.2beb0069.js"] : void 0), "props": true }, { "name": "gopremium", "path": "/gopremium", "component": () => __vitePreload(() => import("./gopremium.69849ec9.js"), true ? ["assets/gopremium.69849ec9.js","assets/vendor.2beb0069.js"] : void 0), "props": true }, { "name": "home", "path": "/", "component": () => __vitePreload(() => import("./home.e703c8d1.js"), true ? ["assets/home.e703c8d1.js","assets/vendor.2beb0069.js"] : void 0), "props": true }, { "name": "local", "path": "/local", "component": () => __vitePreload(() => import("./local.5cebfd9d.js"), true ? ["assets/local.5cebfd9d.js","assets/vendor.2beb0069.js"] : void 0), "props": true }, { "name": "about", "path": "/about", "component": () => __vitePreload(() => import("./about.9d2c3bd1.js"), true ? ["assets/about.9d2c3bd1.js","assets/vendor.2beb0069.js"] : void 0), "props": true }, { "name": "legal-privacy", "path": "/legal/privacy", "component": () => __vitePreload(() => import("./privacy.f295b14a.js"), true ? ["assets/privacy.f295b14a.js","assets/vendor.2beb0069.js"] : void 0), "props": true }, { "name": "legal-terms", "path": "/legal/terms", "component": () => __vitePreload(() => import("./terms.b9b6f1a5.js"), true ? ["assets/terms.b9b6f1a5.js","assets/vendor.2beb0069.js"] : void 0), "props": true }];
const _hoisted_1$3 = { class: "header" };
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("div", { class: "container header-content" }, [
  /* @__PURE__ */ createBaseVNode("div", null, [
    /* @__PURE__ */ createBaseVNode("div", { class: "branding" }, [
      /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" })
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("nav", null, [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "btn btn-default btn-login",
      href: "/login"
    }, "Log In")
  ])
], -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("header", _hoisted_1$3, _hoisted_3$3);
}
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$3 = {};
var HeadPanel = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", render$3]]);
var data = {
  colone: [
    {
      nref: "about",
      name: "About"
    },
    {
      nref: "features",
      name: "Features"
    },
    {
      nref: "local",
      name: "Local"
    },
    {
      nref: "gopremium",
      name: "Subscription"
    },
    {
      nref: "careers",
      name: "Careers"
    },
    {
      href: "https://support.strava.com",
      name: "Support"
    },
    {
      href: "https://business.strava.com",
      name: "Business"
    },
    {
      nref: "legal-terms",
      name: "Terms"
    },
    {
      nref: "legal-privacy",
      name: "Privacy"
    }
  ],
  coltwo: [
    {
      icon: "icon-facebook",
      href: "https://www.facebook.com/Strava",
      name: "Facebook"
    },
    {
      icon: "icon-instagram",
      href: "https://www.instagram.com/strava",
      name: "Instagram"
    },
    {
      icon: "icon-twitter",
      href: "https://www.twitter.com/strava",
      name: "Twitter"
    },
    {
      icon: "icon-share",
      href: "https://www.youtube.com/stravainc",
      name: "YouTube"
    },
    {
      icon: "icon-share",
      href: "https://blog.strava.com",
      name: "Blog"
    }
  ],
  colthree: [
    {
      href: "/register/free?cta=sign-up&element=global-footer&source=website_show",
      name: "Sign Up"
    },
    {
      href: "/login",
      name: "Log In"
    }
  ]
};
const _hoisted_1$2 = { class: "footer" };
const _hoisted_2$2 = { class: "container" };
const _hoisted_3$2 = { class: "row" };
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("div", { class: "col-sm-3" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "branding logo-wh" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "footer-copyright" }, "\xA92022 Strava")
], -1);
const _hoisted_5$1 = { class: "col-sm-3 nav-group" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("h5", null, "Menu", -1);
const _hoisted_7 = { class: "list-nav nav-2-col" };
const _hoisted_8 = ["href"];
const _hoisted_9 = { class: "col-sm-3 nav-group" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("h5", null, "Follow", -1);
const _hoisted_11 = { class: "list-nav" };
const _hoisted_12 = { class: "app-icon-wrapper" };
const _hoisted_13 = ["href"];
const _hoisted_14 = { class: "col-sm-3 nav-group" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("h5", null, "Get Started", -1);
const _hoisted_16 = { class: "list-nav" };
const _hoisted_17 = ["href"];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("footer", _hoisted_1$2, [
    createBaseVNode("div", _hoisted_2$2, [
      createBaseVNode("div", _hoisted_3$2, [
        _hoisted_4$2,
        createBaseVNode("div", _hoisted_5$1, [
          _hoisted_6,
          createBaseVNode("ul", _hoisted_7, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($data.menus.colone, (i) => {
              return openBlock(), createElementBlock("li", null, [
                i.href ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  href: i.href
                }, toDisplayString(i.name), 9, _hoisted_8)) : (openBlock(), createBlock(_component_router_link, {
                  key: 1,
                  to: { name: i.nref }
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(i.name), 1)
                  ]),
                  _: 2
                }, 1032, ["to"]))
              ]);
            }), 256))
          ])
        ]),
        createBaseVNode("div", _hoisted_9, [
          _hoisted_10,
          createBaseVNode("ul", _hoisted_11, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($data.menus.coltwo, (i) => {
              return openBlock(), createElementBlock("li", null, [
                createBaseVNode("span", _hoisted_12, [
                  createBaseVNode("span", {
                    class: normalizeClass(["app-icon icon-white icon-sm", i.icon])
                  }, null, 2)
                ]),
                createBaseVNode("a", {
                  href: i.href
                }, toDisplayString(i.name), 9, _hoisted_13)
              ]);
            }), 256))
          ])
        ]),
        createBaseVNode("div", _hoisted_14, [
          _hoisted_15,
          createBaseVNode("ul", _hoisted_16, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($data.menus.colthree, (i) => {
              return openBlock(), createElementBlock("li", null, [
                i.href ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  href: i.href
                }, toDisplayString(i.name), 9, _hoisted_17)) : (openBlock(), createBlock(_component_router_link, {
                  key: 1,
                  to: { name: i.nref }
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(i.name), 1)
                  ]),
                  _: 2
                }, 1032, ["to"]))
              ]);
            }), 256))
          ])
        ])
      ])
    ])
  ]);
}
const _sfc_main$2 = {
  name: "FootMenu",
  data() {
    return {
      "menus": data,
      "dest": "legal-privacy"
    };
  }
};
var FootPanel = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", render$2]]);
const _hoisted_1$1 = { id: "view" };
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_3$1 = { class: "main container" };
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HeadPanel = resolveComponent("HeadPanel");
  const _component_FootPanel = resolveComponent("FootPanel");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createVNode(_component_HeadPanel),
    _hoisted_2$1,
    createBaseVNode("div", _hoisted_3$1, [
      renderSlot(_ctx.$slots, "default")
    ]),
    _hoisted_4$1,
    createVNode(_component_FootPanel)
  ]);
}
const _sfc_main$1 = {
  components: {
    HeadPanel,
    FootPanel
  }
};
var Frame = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", render$1]]);
const _hoisted_1 = /* @__PURE__ */ createTextVNode("Home");
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("span", null, "\xA0|\xA0", -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Go to About");
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", null, "\xA0|\xA0", -1);
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Go to Contact");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_router_view = resolveComponent("router-view");
  const _component_Frame = resolveComponent("Frame");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", null, [
      createVNode(_component_router_link, { to: { name: "home" } }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      }),
      _hoisted_2,
      createVNode(_component_router_link, { to: { name: "about" } }, {
        default: withCtx(() => [
          _hoisted_3
        ]),
        _: 1
      }),
      _hoisted_4,
      createVNode(_component_router_link, { to: { name: "contact" } }, {
        default: withCtx(() => [
          _hoisted_5
        ]),
        _: 1
      })
    ]),
    createVNode(_component_Frame, null, {
      default: withCtx(() => [
        createVNode(_component_router_view)
      ]),
      _: 1
    })
  ], 64);
}
const _sfc_main = {
  name: "App",
  components: {
    Frame
  },
  data() {
    return {
      menus: "this menu",
      mlist: adata
    };
  }
};
var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render]]);
const router = createRouter({
  history: createWebHistory("/vite-vue/"),
  routes
});
console.log("Routes is actually", routes);
createApp(App).use(router).mount("#app");
export { _export_sfc as _ };
