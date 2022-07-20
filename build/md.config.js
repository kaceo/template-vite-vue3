import { code, link, meta, createBuilder } from 'vite-plugin-md'

const vpbuilder = [
  //code blocks highlighting
  code({
   // theme: 'base',
  }),

  //turn <a> into router-links
  link(),

  //push these metadata to router
  meta({
    //frontmatter to use for route props
    metaProps: ['title', 'description', 'tags', ],
    routeProps: ['layout', 'requireAuth', ],
    headProps: ['title', ],

    defaults: {
      copyright: 'Greedy Company Incorporated &copy;2022',
    },

  }),
]

/*
const superFantastic = createBuilder(
  'superFantastic', // name your plugin
  PipelineStage.dom, // attach to a stage in the pipeline
)
  .initializer((payload, options) => {
    // your initializer code goes here
  })
  .handler((payload, options) => {
    // your handler code goes here
  })
  .options({
    // your options hash for the builder
    foo: 'foo' | 'bar' | 'baz'
  })
  .meta({
    description: 'you are NOT going to believe what you can with this builder!'
  })
*/

export const mdconfig = {

  markdownItOptions: {
    xhtml: true,
    linkify: true,
    typographer: true,
  },

  markdownItSetup(md) {
//    md.use(require('markdown-it-xxxx')),
  },

  builders: [ ...vpbuilder ],

  frontmatterDefaults: {
    requireAuth: false,
    layout: 'base',
  },

  style: {
//    baseStyle: 'github',
  },

  //@vueuse/head integration
  //headEnabled: true,

}


/*

Meta()
title    head, meta
description     meta
layout    router
image     meta
image_height  meta
image_width   meta
url    meta

routeProps: ['layout', 'requireAuth', 'route', 'foo'],

route.meta

*/
