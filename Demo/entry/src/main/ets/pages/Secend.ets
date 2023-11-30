@Entry
@Component
struct Secend {
  @State message: string = 'secend page'
  @State btnText: string = 'back'

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
        Button(this.btnText)
          .fontColor(Color.Blue)
          .fontSize(30)
          .width('50%')
          .height('8%')
          .onClick(() => {
            console.log("secend page back.")
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}