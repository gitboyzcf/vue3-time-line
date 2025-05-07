declare interface IOptions {
    comName?: string;
}

declare interface ITimeLine {
    install(app: any, options?: IOptions): void;
}

declare const Vue3TimeLine: ITimeLine;
export default Vue3TimeLine;

export { }
