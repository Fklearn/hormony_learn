import router from '@ohos.router';

@Entry
@Component
struct Index {
  @State message: string = 'Hello World'
  @State count: number = 0

  build() {
    Row() {

      //  动态变动的字，使用的是 `
      //  宽高占比、颜色等使用'
      Button(`点击${this.count}次`)
        .fontSize(30)
        .backgroundColor('#36D')
        .fontColor(Color.White)
        .onClick(() => {
          this.count++
          console.log("点击按钮.." + this.count)
          if (this.count>5) {
            this.clickNext.bind(this)
          }

        })
    }.width('100%')
    .justifyContent(FlexAlign.Center)
  }

  clickNext() {
    router.pushUrl({
      url: "pages/Secend",
      params: {
        name: '我是来自页面Index的数据',
        count: `${this.count}`
      }
    }, router.RouterMode.Single)
  }
}