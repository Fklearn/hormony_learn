@Component
export default  struct  Nowplaying {
  @State list:Object[] = []

  async getList(){
    this.list = [
      {
        title:"涉过愤怒的海",
        poster:$r("app.media.1")
      },
      {
        title:"再见，李可乐",
        poster:$r("app.media.2")
      },
      {
        title:"热搜",
        poster:$r("app.media.3")
      }
    ]

  }

  async aboutToAppear(){
    this.getList();
  }
  build(){
    Column(){
      List() {
        ForEach(this.list,item=> {
          ListItem(){
            this.FilmItem(item)
          }
          .padding(20)//内边距
        })
      }
      .scrollBar(BarState.Auto)
      .divider({
        strokeWidth: 1,
        endMargin: 5
      })
      .onScrollIndex((start: number, end: number) => {

      })
  //当取值为BarState.Auto表示按需显示滚动条
    }.height('100%')
  }

  @Builder
  FilmItem(item){

    Row(){
      Image(item.poster
       )
        .size({ width: 100 })
      Text(item.title)
        .padding({left:10})
        .textOverflow({
          overflow:TextOverflow.Ellipsis
        })
        .width(200)
        .maxLines(1) //这三个属性一起用 省略号
    }
    .alignItems(VerticalAlign.Top)
    .onClick(()=>{
    })
  }
}