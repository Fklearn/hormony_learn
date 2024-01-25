import Comingsoon from '../views1/Film/Comingsoon'
import Nowplaying from '../views1/Film/Nowplaying'
@Extend(Text) function item (color:Color) {
  .width('100%')
  .height('30%')
  .backgroundColor(color)
  .textAlign(TextAlign.Center)
  .fontSize(30)
}
@Entry
@Component
struct Film{
  private swiperController: SwiperController = new SwiperController()
  private filmController : TabsController = new TabsController()

  build(){
    Flex({
      direction:FlexDirection.Column
    }){
      Swiper(this.swiperController) {
        Text("0")
          .item(Color.Yellow)

        Text("1")
          .item(Color.Red)

        Text("2")
          .item(Color.Green)
      }
      .loop(true)
      .autoPlay(false)
      .interval(1000)


      Tabs({
        barPosition: BarPosition.Start,
        controller:this.filmController
      }) {
        TabContent() {
          Nowplaying()
        }
        .tabBar("正在热映")

        TabContent() {
          Comingsoon()
        }
        .tabBar("即将上演")
      }
      .height(100)
      .flexGrow(1) //瓜分剩余空间
      // .backgroundColor(Color.Brown)
    }
    .height('100%')

  }
}

export  default  Film