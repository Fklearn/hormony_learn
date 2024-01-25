@Entry
@Component
struct C_Builder {
  @State message: string = 'Hello World'

  build() {
    Row() {
      Column() {
        //有参数
        Text("自定义构建函数")
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
        //无参数
        Divider()
        // Hello1(this.message)
        Hello2({msg:this.message}) //引用传值
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

@Builder function Hello1(msg:string) {
  Text(msg)
    .margin(50)
    .fontSize(30)
    .fontColor(Color.White)
    .border({
      width:5,
      color:$r('app.color.green')
    })
    .borderRadius(20)
    .backgroundColor(Color.Grey)
}

@Builder function Hello2(obj:{msg:string}) {
  Text(obj.msg)
    .margin(50)
    .fontSize(30)
    .fontColor(Color.White)
    .border({
      width:5,
      color:$r('app.color.green')
    })
    .borderRadius(20)
    .backgroundColor(Color.Grey)
}