import Vue3TimeLineCom from './TimeLine.vue'

interface IOptions {
  comName?: string
}

interface ITimeLine {
  install(app: any, options?: IOptions): void
}

const Vue3TimeLine : ITimeLine = {
  install(app, options) {
    const comName = options?.comName ? options?.comName : 'TimeLine'
    app.component(comName, Vue3TimeLineCom)
  }
}
export default Vue3TimeLine
