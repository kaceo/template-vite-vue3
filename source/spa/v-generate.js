import { h } from "vue";
import { RouterView } from "vue-router";

const isVueFile = (name) => /\.vue/.test(name);


export function getRoutes(meta, options) {

  const reg = new RegExp(options.pathRoot);

  const path = Object.keys(meta).reduce((all, c) => {
    const paths = c.replace(reg, "").split("/");

    let tmp = all;
    while (paths.length) {
      const name: string = paths.shift() || "";

      if (!isVueFile(name)) {// Path name
        if (!tmp[name]) tmp[name] = {};
        tmp = tmp[name] as Path;
      } else {// A Vue file name
        const file = name.replace(".vue", "");
        // If the Vue file name `HomeView.vue` is changed to key, it is `HomeView`
        tmp[file] = c;
      }
    }
    return all;
  }, {} as Path);
  // console.log(path);

  return toArr(path, meta, 0);
}

const getPath = (name, deep) =>
  deep > 0
    ? /* If it's not the first layer, you don't need to add a slash. */ name === "HomeView"
      ? ""
      : `${name}`
    : /* If it is the first layer, you need to add a slash. */ name === "HomeView"
    ? "/"
    : `/${name}`;

// Convert the object tree data structure to Vue router array tree structure.
function toArr(data: Path, meta: MetaInfo, deep: number): Route[] {
  return Object.entries(data).map<Route>(([name, pathInfo]) => {
    if (typeof pathInfo === "string") {
      return { path: getPath(name, deep), component: meta[pathInfo] };
    } else {
      return {
        path: getPath(name, deep),
        component: pathInfo.HomeView ? meta[pathInfo.HomeView] /*If there is a `HomeView.vue` page under the directory*/ : h(RouterView),
        children: toArr(pathInfo, meta, deep + 1),
      };
    }
  });
}



/*
import { createRouter, createWebHistory } from "vue-router";
import { getRoutes } from "v-route-generate";

const routes = getRoutes(
  import.meta.glob("../views/**/**.vue"),
  { pathRoot: "../views/",}
);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeResolve(async (to) => {
  console.log(to);
});

console.log(routes);

export default router;
*/
