struct preview{build(){Button('网络请求测试-Base64解析')
        .margin(10)
        .fontSize(30)
        .backgroundColor('#36D')
        .fontColor(Color.White)
        .onClick(() => {
          // 2. 常见http请求对象
          let httpReq = http.createHttp()
          // // 3. 发起请求
          // httpReq.request('https://api.apiopen.top/api/sentences',
          //   {
          //     method:http.RequestMethod.GET,
          //   },
          //   (err,data) => {
          //     // 4. 处理结果
          //     if (!err) {
          //       let poem = JSON.parse(`${data.result}`).result.name
          //       let from = JSON.parse(`${data.result}`).result.from
          //       hilog.info(0x0000, 'testTag','Succeeded req info. poem: ' + poem+'\r\nfrom:'+from);
          //     }
          //   }
          // )
          httpReq.request('https://cdn.jsdelivr.net/gh/hhhaiai/testAPP/vy.txt'
            , { method: http.RequestMethod.GET }
            , (err, data) => {

              if (err) {
                hilog.error(0x0001, 'testTag', 'Error status: ' + err)
              } else {
                // hilog.info(0x0002, 'testTag',
                //   ' status: ' + err
                //   // +'\r\n data:'+data.result
                //   + '\r\n code:' + data.responseCode
                //   + '\r\n cookies:' + data.cookies
                //   // + '\r\n header:' + JSON.stringify(data.header)
                // )
                // parser
                var base64 = new util.Base64Helper();
                var result = base64.decode(data.result.toString())
                result.then((res:Uint8Array)=>{
                  hilog.info(0x0002, 'testTag','decode:'+Unit8ArrayUtils.Uint8ArrayToString(res))
                  // Unit8ArrayUtils.stringToUint8Array(input)
                  console.log('decode:'+Unit8ArrayUtils.Uint8ArrayToString(res))
                })

              }

            }
          )
        })}}