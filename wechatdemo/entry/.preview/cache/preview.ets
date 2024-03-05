struct preview{build(){ListItemGroup({header:this.itemHead(item['letter'])}){

                  ForEach(item['data'],(p:object,i:number)=>{
                    ListItem(){
                      Flex({direction:FlexDirection.Row,alignItems:ItemAlign.Center}){
                        Image(p['avtar'])
                          .width(45)
                          .height(45)
                          .borderRadius(5)
                        Text(p['name'])
                          .fontSize(18)
                          .margin({left:10})
                      }
                      .height(55)
                    }
                    .onClick(()=>{
                      router.pushUrl({url:'pages/Contact/PersonalPage',params: {
                        person: p
                      }})
                    })
                  })

                }
                .margin({top:10})}}