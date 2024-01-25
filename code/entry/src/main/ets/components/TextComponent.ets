@Component
struct TextComponent{
  private  title:string;
  private  index:number;
  @Prop currentIndex:number
  build(){
    Text(this.title).width('50%').textAlign(TextAlign.Center)
      .fontColor(this.index===this.currentIndex?Color.Red:Color.Black)
  }
}

export default  TextComponent