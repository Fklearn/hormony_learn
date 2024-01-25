import router from '@ohos.router'
import hilog from '@ohos.hilog';


@Entry
@Component
struct Secend {
  @State message: string = 'secend page'

  @State text: string = router.getParams()['text']
  @State data: object = router.getParams()['data']
  @State key1: string = router.getParams()['key1']
  @State key2: string = router.getParams()['key2']



  build() {
    Row() {
      Column() {
        Text(`传递过来的index1:${ this.data['array'][1]}`)
          .width('100%')
          .fontSize(15)
          .fontWeight(FontWeight.Bold)
        // Text()
        //   .fontSize(50)
        //   .fontWeight(FontWeight.Bold)
        Text(`传递过来的文字: ${ this.data['array']}`)
          .margin(10)
          .width('100%')
          .fontSize(15)

        Button('back')
          .margin(10)
          .fontColor(Color.Blue)
          .fontSize(30)
          .width('100%')
          .height('8%')
          .onClick(() => {
            console.log("second --> Index.  back")
            //跳转第一个页面
            router.back()
          })

        Button('pushUrl')
          .margin(10)
          .fontColor(Color.Blue)
          .fontSize(30)
          .width('100%')
          .height('8%')
          .onClick(() => {
            console.log("second --> Index.  pushUrl")
            //跳转第一个页面
            router.pushUrl({
              url:'pages/Index'
            })
          })

        Button('pushUrl_Standard')
          .margin(10)
          .fontColor(Color.Blue)
          .fontSize(30)
          .width('100%')
          .height('8%')
          .onClick(() => {
            console.log("second --> Index.  pushUrl(url,Standard)")
            //跳转第一个页面
            router.pushUrl({
              url:'pages/Index'
            },router.RouterMode.Standard)
          })
        Button('pushUrl_Single')
          .margin(10)
          .fontColor(Color.Blue)
          .fontSize(30)
          .width('100%')
          .height('8%')
          .onClick(() => {
            console.log("second --> Index.  pushUrl(url,Single)")
            //跳转第一个页面
            router.pushUrl({
              url:'pages/Index'
            },router.RouterMode.Single)
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}