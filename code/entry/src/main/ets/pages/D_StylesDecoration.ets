@Entry
@Component
struct D_StylesDecoration {
  @State message: string = 'Hello World'

  build() {
    Row() {
      Column() {
        //有参数
        Text("@Styles装饰器：定义组件重用样式")
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
        //无参数
        Divider()
        Hello({msg:this.message}) //引用传值

        Text(this.message)
          .commonTextStyle()
          .fontSize(20)
          .fontColor(Color.Red)



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

  // @Styles fancy() {
  //   .height(100)
  // } //组件内
}


@Builder function Hello(obj:{msg:string}) {
  Text(obj.msg)
    .commonTextStyle()
    .fontSize(30)
    .fontColor(Color.White)

}

//全局公共样式
@Styles function commonTextStyle() {
  //不能包含字体相关 //不可传参
  .margin(50)
  .border({
    width:5,
    color:$r('app.color.green')
  })
  .borderRadius(20)
  .backgroundColor(Color.Grey)
}