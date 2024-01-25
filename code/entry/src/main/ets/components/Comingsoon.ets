@Component
struct Comingsoon{
  @State datalist:string[] = ["即将-1","即将-2","即将-3"]
  build(){
    Column(){
      ForEach(this.datalist,(item)=>{
        Text(item)
      },(item)=>item.toString())

    }
  }
}

export default  Comingsoon