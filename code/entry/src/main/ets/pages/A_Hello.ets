@Entry
@Component
struct A_Hello {
  @State message: string = 'Hello World'

  build() {
    Row() {
      Column() {
        Text("基本语法使用1")
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
        Text(this.message)
          .fontSize(30)


        Button("click").onClick(()=>{
          this.message = "Hello Harmony"
        })
      }
      .width('100%')
    }
    .height('100%')
  }
}