# TEMPLATE-VITE-VUE3

Entry points:
- Vite creates SPA build
- Vite-ssg creates SSG build

Vue3 (SFC) loads the .vue format

Vue-router provides basic routing-

Pinia provides persistent objects

Firebase provides auth and cloud store

Tailwind, Postcss, Daisyui, (+etc) provides the CSS framework

Fontawesome (+etc) provides the svg icons

Markdown loader for MD-to-Vue Conversion

Markdown-it (plugins) for features inside MD
- markdown-it-deflist
- markdown-it-regexp for icons
- markdown-it-attrs for attributes and classes

Vite feature plugins used:

- loader for YAML files
- parser for Layout files
- parser for File-based Page routing
- Head insertion of data
- Inspect for runtime inspection
- PWA for inserting web worker

## Build

pnpm dev (develop)

pnpm build (build spa)

pnpm generate (build ssg)

pnpm clean

pnpm serve

