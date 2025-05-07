// src/shims-vue.d.ts
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@boyzcf/vue3-time-line' {
  import { Plugin } from 'vue'
  const plugin: Plugin
  export default plugin
}