@Component
struct Nowplaying{
 @State datalist:string[] = ["热映-1","热映-2","热映-3"]
  build(){
    Column(){
      ForEach(this.datalist,(item)=>{
        Text(item)
      },(item)=>item.toString())

    }
  }
}

export default  Nowplaying