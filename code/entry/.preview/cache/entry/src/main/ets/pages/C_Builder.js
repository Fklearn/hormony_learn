"use strict";
class C_Builder extends ViewPU {
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
            Row.debugLine("pages/C_Builder.ets(7:5)");
            Row.height('100%');
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/C_Builder.ets(8:7)");
            Column.width('100%');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //有参数
            Text.create("自定义构建函数");
            Text.debugLine("pages/C_Builder.ets(10:9)");
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
            Divider.debugLine("pages/C_Builder.ets(14:9)");
            if (!isInitialRender) {
                //无参数
                Divider.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        // Hello1(this.message)
        Hello2.bind(this)(makeBuilderParameterProxy("Hello2", { msg: () => (this["__message"] ? this["__message"] : this["message"]) }));
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Divider.create();
            Divider.debugLine("pages/C_Builder.ets(17:9)");
            if (!isInitialRender) {
                Divider.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //配置事件
            Button.createWithLabel("click");
            Button.debugLine("pages/C_Builder.ets(19:9)");
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
function Hello1(msg, parent = null) {
    (parent ? parent : this).observeComponentCreation((elmtId, isInitialRender) => {
        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
        Text.create(msg);
        Text.debugLine("pages/C_Builder.ets(30:3)");
        Text.margin(50);
        Text.fontSize(30);
        Text.fontColor(Color.White);
        Text.border({
            width: 5,
            color: { "id": 16777226, "type": 10001, params: [], "bundleName": "com.edu.myapplication", "moduleName": "entry" }
        });
        Text.borderRadius(20);
        Text.backgroundColor(Color.Grey);
        if (!isInitialRender) {
            Text.pop();
        }
        ViewStackProcessor.StopGetAccessRecording();
    });
    Text.pop();
}
function Hello2(obj, parent = null) {
    (parent ? parent : this).observeComponentCreation((elmtId, isInitialRender) => {
        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
        Text.create(obj.msg);
        Text.debugLine("pages/C_Builder.ets(43:3)");
        Text.margin(50);
        Text.fontSize(30);
        Text.fontColor(Color.White);
        Text.border({
            width: 5,
            color: { "id": 16777226, "type": 10001, params: [], "bundleName": "com.edu.myapplication", "moduleName": "entry" }
        });
        Text.borderRadius(20);
        Text.backgroundColor(Color.Grey);
        if (!isInitialRender) {
            Text.pop();
        }
        ViewStackProcessor.StopGetAccessRecording();
    });
    Text.pop();
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new C_Builder(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=C_Builder.js.map