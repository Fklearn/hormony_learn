import { httpRequestGet } from '../../util/HttpUtil';
import hilog from '@ohos.hilog';

@Component
export default  struct  Nowplaying {
  @State list:Object[] = []

  private  url = "http://192.168.10.101:3000"
  async getList(){
    //json-server .\db.json --watch --host=192.168.31.171
    const res = await httpRequestGet(`${this.url}/films`)
    this.list = res

    //打印log， 长度受限， 遇到url会被截断
    console.log(JSON.stringify(res))
    hilog.info(1,"kerwin","%{private}s",JSON.stringify(res)) //带tag
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
      Image(`${this.url}${item.poster}`
      )
        .size({ width: 100 })
      Text(item.name)
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