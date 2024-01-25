import TextComponent from '../components/TextComponent'
@Entry
@Component
struct F_component {
  @State currentIndex: number = 0

  build() {

    Row() {
      Column() {
        Row(){
          // Text("正在热映").width('50%').textAlign(TextAlign.Center)
          // Text("即将上映").width('50%').textAlign(TextAlign.Center)
          TextComponent({title:"正在热映",index:0,currentIndex:this.currentIndex})
            .onClick(()=>{
              this.currentIndex = 0
            })
          TextComponent({title:"即将上映",index:1,currentIndex:this.currentIndex})
            .onClick(()=>{
              this.currentIndex = 1
            })
        }
        .height(50)
        .width('100%')

      }
      .width('100%')
      .height('100%')

    }
    .height('100%')
  }
}

