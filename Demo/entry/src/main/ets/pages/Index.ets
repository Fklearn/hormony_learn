// @ts-nocheck
import router from '@ohos.router';
import hilog from '@ohos.hilog';
import display from '@ohos.display';
import http from '@ohos.net.http'
import util from '@ohos.util';
import { Unit8ArrayUtils } from './Unit8ArrayUtils';

@Entry
@Component
struct Index {
  @State message: string = 'Hello World'
  @State count: number = 0


  /**
   * 页面跳转
   */
  async routePage() {
    let options = {
      url: 'pages/Secend',
      params: {
        text: '这是第一页的值',
        data: {
          array: [12, 45, 78]
        },
        'key1': 'Index-Value1',
        'key2': 'Index-Value2'
      }
    }
    try {
      await router.pushUrl(options)
      hilog.info(0x0000, 'testTag', 'Succeeded in go to next page');

    } catch (err) {
      hilog.error(0x0000, 'testTag', 'Failed to go to next page. Cause: %{public}s', JSON.stringify(err) ?? '');
    }
  }

  build() {
    Column() {
      Text(`当前点击次数: ${this.count}`)
        .fontSize(20)
        .fontColor(Color.Brown)
      Divider()
        .height(2)
        .width('100%')

      //  动态变动的字，使用的是 `
      //  宽高占比、颜色等使用'
      Button('[动态修改]递增')
        .fontSize(20)
        .backgroundColor('#36D')
        .fontColor(Color.White)
        .onClick(() => {
          this.count++
          console.log("点击按钮.." + this.count)
        })

      Button('跳转第二页')
        .margin(10)
        .fontSize(30)
        .backgroundColor('#36D')
        .fontColor(Color.White)
        .onClick(() => {
          this.routePage()
        })

      Button('测试获取显示相关参数')
        .margin(10)
        .fontSize(30)
        .backgroundColor('#36D')
        .fontColor(Color.White)
        .onClick(() => {

          //{
          //     "id":0,
          //     "width":1224,
          //     "height":2700,
          //     "refreshRate":90,
          //     "name":"内置屏幕",
          //     "alive":true,
          //     "state":2,    // 设备状态
          //     "rotation":0,
          //     "densityDPI":480,
          //     "densityPixels":3,
          //     "scaledDensity":3,
          //     "xDPI":0,
          //     "yDPI":0
          // }
          // // 单个主屏幕参数获取
          let displayInfo = display.getDefaultDisplaySync()
          hilog.info(0x0000, 'testTag', 'Succeeded getDiplay info. Data: ' + JSON.stringify(displayInfo));
          // // 多个屏幕参数获取
          // let promise = display.getAllDisplays();
          // promise.then((data) => {
          //   hilog.info(0x0000, 'testTag','Succeeded getDiplay info. Data: ' + JSON.stringify(data));
          // }).catch((err) => {
          //   hilog.error(0x0000, 'testTag','Failed getDiplay info. Code: ' + JSON.stringify(err));
          // });
        })

      Button('网络请求测试-Base64解析')
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
        })
    }.width('100%')
    .justifyContent(FlexAlign.Center)
  }
}
