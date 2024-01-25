@Entry
@Component
struct E_ExtendDecoration {
  @State message: string = 'Hello World'

  build() {
    Row() {
      Column() {
        //有参数
        Text("@Extend装饰器：定义扩展组件样式")
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
        //无参数
        Divider()
        HelloText({msg:this.message}) //引用传值

        Text(this.message)
          .commonStyle(Color.Red,20)

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


@Builder function HelloText(obj:{msg:string}) {
  Text(obj.msg)
    .commonStyle(Color.White,30)
}

//全局公共样式
@Extend(Text) function commonStyle(color:ResourceColor,size:number) {
  //可以包含字体相关 //可传参
  .fontColor(color)
  .fontSize(size)
  .margin(50)
  .border({
    width:5,
    color:$r('app.color.green')
  })
  .borderRadius(20)
  .backgroundColor(Color.Grey)
}