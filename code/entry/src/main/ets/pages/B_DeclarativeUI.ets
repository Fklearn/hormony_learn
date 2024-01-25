@Entry
@Component
struct DeclarativwUI {
  @State message: string = 'Hello World'

  build() {
    Row() {
      Column() {
        //有参数
        Text("声明式UI描述")
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
        //无参数
        Divider()
        Text(this.message)
          .margin(50)
          .fontSize(30)
          .fontColor(Color.White)
          .border({
            width:5,
            color:$r('app.color.green')
          })
          .borderRadius(20)
          .backgroundColor(Color.Grey)
        Divider()
        //配置事件
        Button("click").onClick(()=>{
          this.message = "Hello Harmony"
        })
      }
      .width('100%')
    }
    .height('100%')
  }
}

