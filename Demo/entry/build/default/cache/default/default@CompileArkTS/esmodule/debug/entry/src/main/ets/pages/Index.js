// @ts-nocheck
import router from '@ohos:router';
import hilog from '@ohos:hilog';
import display from '@ohos:display';
import http from '@ohos:net.http';
import util from '@ohos:util';
import { Unit8ArrayUtils } from '@bundle:com.example.demo/entry/ets/pages/Unit8ArrayUtils';
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.__count = new ObservedPropertySimplePU(0
        /**
         * 页面跳转
         */
        , this, "count");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.count !== undefined) {
            this.count = params.count;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__count.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__count.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get message() {
        return this.__message.get();
    }
    set message(newValue) {
        this.__message.set(newValue);
    }
    get count() {
        return this.__count.get();
    }
    set count(newValue) {
        this.__count.set(newValue);
    }
    /**
     * 页面跳转
     */
    async routePage() {
        var _a;
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
        };
        try {
            await router.pushUrl(options);
            hilog.info(0x0000, 'testTag', 'Succeeded in go to next page');
        }
        catch (err) {
            hilog.error(0x0000, 'testTag', 'Failed to go to next page. Cause: %{public}s', (_a = JSON.stringify(err)) !== null && _a !== void 0 ? _a : '');
        }
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width('100%');
            Column.justifyContent(FlexAlign.Center);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`当前点击次数: ${this.count}`);
            Text.fontSize(20);
            Text.fontColor(Color.Brown);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Divider.create();
            Divider.height(2);
            Divider.width('100%');
            if (!isInitialRender) {
                Divider.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //  动态变动的字，使用的是 `
            //  宽高占比、颜色等使用'
            Button.createWithLabel('[动态修改]递增');
            //  动态变动的字，使用的是 `
            //  宽高占比、颜色等使用'
            Button.fontSize(20);
            //  动态变动的字，使用的是 `
            //  宽高占比、颜色等使用'
            Button.backgroundColor('#36D');
            //  动态变动的字，使用的是 `
            //  宽高占比、颜色等使用'
            Button.fontColor(Color.White);
            //  动态变动的字，使用的是 `
            //  宽高占比、颜色等使用'
            Button.onClick(() => {
                this.count++;
                console.log("点击按钮.." + this.count);
            });
            if (!isInitialRender) {
                //  动态变动的字，使用的是 `
                //  宽高占比、颜色等使用'
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        //  动态变动的字，使用的是 `
        //  宽高占比、颜色等使用'
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('跳转第二页');
            Button.margin(10);
            Button.fontSize(30);
            Button.backgroundColor('#36D');
            Button.fontColor(Color.White);
            Button.onClick(() => {
                this.routePage();
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('测试获取显示相关参数');
            Button.margin(10);
            Button.fontSize(30);
            Button.backgroundColor('#36D');
            Button.fontColor(Color.White);
            Button.onClick(() => {
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
                let displayInfo = display.getDefaultDisplaySync();
                hilog.info(0x0000, 'testTag', 'Succeeded getDiplay info. Data: ' + JSON.stringify(displayInfo));
                // // 多个屏幕参数获取
                // let promise = display.getAllDisplays();
                // promise.then((data) => {
                //   hilog.info(0x0000, 'testTag','Succeeded getDiplay info. Data: ' + JSON.stringify(data));
                // }).catch((err) => {
                //   hilog.error(0x0000, 'testTag','Failed getDiplay info. Code: ' + JSON.stringify(err));
                // });
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('网络请求测试');
            Button.margin(10);
            Button.fontSize(30);
            Button.backgroundColor('#36D');
            Button.fontColor(Color.White);
            Button.onClick(() => {
                // 2. 常见http请求对象
                let httpReq = http.createHttp();
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
                httpReq.request('https://cdn.jsdelivr.net/gh/hhhaiai/testAPP/vy.txt', { method: http.RequestMethod.GET }, (err, data) => {
                    if (err) {
                        hilog.error(0x0001, 'testTag', 'Error status: ' + err);
                    }
                    else {
                        hilog.info(0x0002, 'testTag', ' status: ' + err
                            // +'\r\n data:'+data.result
                            + '\r\n code:' + data.responseCode
                            + '\r\n cookies:' + data.cookies
                        // + '\r\n header:' + JSON.stringify(data.header)
                        );
                        // parser
                        var base64 = new util.Base64Helper();
                        var result = base64.decode(data.result.toString());
                        result.then((res) => {
                            hilog.info(0x0002, 'testTag', 'decode:' + Unit8ArrayUtils.Uint8ArrayToString(res));
                            // Unit8ArrayUtils.stringToUint8Array(input)
                        });
                    }
                });
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new Index(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=Index.js.map