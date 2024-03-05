import router from '@ohos:router';
class Secend extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__message = new ObservedPropertySimplePU('secend page', this, "message");
        this.__text = new ObservedPropertySimplePU(router.getParams()['text'], this, "text");
        this.__data = new ObservedPropertyObjectPU(router.getParams()['data'], this, "data");
        this.__key1 = new ObservedPropertySimplePU(router.getParams()['key1'], this, "key1");
        this.__key2 = new ObservedPropertySimplePU(router.getParams()['key2'], this, "key2");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.text !== undefined) {
            this.text = params.text;
        }
        if (params.data !== undefined) {
            this.data = params.data;
        }
        if (params.key1 !== undefined) {
            this.key1 = params.key1;
        }
        if (params.key2 !== undefined) {
            this.key2 = params.key2;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__text.purgeDependencyOnElmtId(rmElmtId);
        this.__data.purgeDependencyOnElmtId(rmElmtId);
        this.__key1.purgeDependencyOnElmtId(rmElmtId);
        this.__key2.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__text.aboutToBeDeleted();
        this.__data.aboutToBeDeleted();
        this.__key1.aboutToBeDeleted();
        this.__key2.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get message() {
        return this.__message.get();
    }
    set message(newValue) {
        this.__message.set(newValue);
    }
    get text() {
        return this.__text.get();
    }
    set text(newValue) {
        this.__text.set(newValue);
    }
    get data() {
        return this.__data.get();
    }
    set data(newValue) {
        this.__data.set(newValue);
    }
    get key1() {
        return this.__key1.get();
    }
    set key1(newValue) {
        this.__key1.set(newValue);
    }
    get key2() {
        return this.__key2.get();
    }
    set key2(newValue) {
        this.__key2.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.height('100%');
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width('100%');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`传递过来的index1:${this.data['array'][1]}`);
            Text.width('100%');
            Text.fontSize(15);
            Text.fontWeight(FontWeight.Bold);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // Text()
            //   .fontSize(50)
            //   .fontWeight(FontWeight.Bold)
            Text.create(`传递过来的文字: ${this.data['array']}`);
            // Text()
            //   .fontSize(50)
            //   .fontWeight(FontWeight.Bold)
            Text.margin(10);
            // Text()
            //   .fontSize(50)
            //   .fontWeight(FontWeight.Bold)
            Text.width('100%');
            // Text()
            //   .fontSize(50)
            //   .fontWeight(FontWeight.Bold)
            Text.fontSize(15);
            if (!isInitialRender) {
                // Text()
                //   .fontSize(50)
                //   .fontWeight(FontWeight.Bold)
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        // Text()
        //   .fontSize(50)
        //   .fontWeight(FontWeight.Bold)
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('back');
            Button.margin(10);
            Button.fontColor(Color.Blue);
            Button.fontSize(30);
            Button.width('100%');
            Button.height('8%');
            Button.onClick(() => {
                console.log("second --> Index.  back");
                //跳转第一个页面
                router.back();
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('pushUrl');
            Button.margin(10);
            Button.fontColor(Color.Blue);
            Button.fontSize(30);
            Button.width('100%');
            Button.height('8%');
            Button.onClick(() => {
                console.log("second --> Index.  pushUrl");
                //跳转第一个页面
                router.pushUrl({
                    url: 'pages/Index'
                });
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('pushUrl_Standard');
            Button.margin(10);
            Button.fontColor(Color.Blue);
            Button.fontSize(30);
            Button.width('100%');
            Button.height('8%');
            Button.onClick(() => {
                console.log("second --> Index.  pushUrl(url,Standard)");
                //跳转第一个页面
                router.pushUrl({
                    url: 'pages/Index'
                }, router.RouterMode.Standard);
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('pushUrl_Single');
            Button.margin(10);
            Button.fontColor(Color.Blue);
            Button.fontSize(30);
            Button.width('100%');
            Button.height('8%');
            Button.onClick(() => {
                console.log("second --> Index.  pushUrl(url,Single)");
                //跳转第一个页面
                router.pushUrl({
                    url: 'pages/Index'
                }, router.RouterMode.Single);
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Column.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new Secend(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=Secend.js.map