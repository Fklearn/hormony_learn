"use strict";
class D_StylesDecoration extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get message() {
        return this.__message.get();
    }
    set message(newValue) {
        this.__message.set(newValue);
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
            //有参数
            Text.create("@Styles装饰器：定义组件重用样式");
            //有参数
            Text.fontSize(50);
            //有参数
            Text.fontWeight(FontWeight.Bold);
            if (!isInitialRender) {
                //有参数
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        //有参数
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //无参数
            Divider.create();
            if (!isInitialRender) {
                //无参数
                Divider.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Hello.bind(this)(makeBuilderParameterProxy("Hello", { msg: () => (this["__message"] ? this["__message"] : this["message"]) }));
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.message);
            Text.margin(50);
            Text.border({
                width: 5,
                color: { "id": 16777221, "type": 10001, params: [], "bundleName": "com.edu.myapplication", "moduleName": "entry" }
            });
            Text.borderRadius(20);
            Text.backgroundColor(Color.Grey);
            Text.fontSize(20);
            Text.fontColor(Color.Red);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Divider.create();
            if (!isInitialRender) {
                Divider.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //配置事件
            Button.createWithLabel("click");
            //配置事件
            Button.onClick(() => {
                this.message = "Hello Harmony";
            });
            if (!isInitialRender) {
                //配置事件
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        //配置事件
        Button.pop();
        Column.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
function Hello(obj, parent = null) {
    (parent ? parent : this).observeComponentCreation((elmtId, isInitialRender) => {
        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
        Text.create(obj.msg);
        Text.margin(50);
        Text.border({
            width: 5,
            color: { "id": 16777221, "type": 10001, params: [], "bundleName": "com.edu.myapplication", "moduleName": "entry" }
        });
        Text.borderRadius(20);
        Text.backgroundColor(Color.Grey);
        Text.fontSize(30);
        Text.fontColor(Color.White);
        if (!isInitialRender) {
            Text.pop();
        }
        ViewStackProcessor.StopGetAccessRecording();
    });
    Text.pop();
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new D_StylesDecoration(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=D_StylesDecoration.js.map