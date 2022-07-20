vuepress
vitepress

## Packages

dependencies:


devDependencies:
  vue ^3
  vuepress ^2
    @vuepress/client
    @vuepress/bundler-vite


  @vuepress/plugin-pwa
  vuepress-plugin-sitemap2

  @vuepress/plugin-container
  @vuepress/plugin-register-components
  @vuepress/plugin-toc
  clipboard





project (copy from huibizhang/vitawind)
  docs/
    .vuepress/
      config.js
      configs/
        index.js = export navbar sidebar
        navbar/
          index.js en.js zh.js export { en, zh}
        sidebar/
          index.js en.js zh.js export { en, zh}
      styles/index.scss
      public/
        favicon.png, logo.svg etc
      global-components/ (@vuepress/register-components auto)
        footer, homepage, button, templateList, templateItem,
        logo, modal,


.vuepress/
  config.js
  client.js
    enhance
    setup
    rootComponents
  my-plugin.js
    clientside functions
    +
    modify the router
    modify the markdown
    watch the file
    hook into lifecycle
       use plugin to create extra pages in code


config 

['**/*.md', '!**/README.md', '!.vuepress', '!node_modules']`

