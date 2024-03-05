"use strict";
class DeclarativwUI extends ViewPU {
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
            Row.debugLine("pages/B_DeclarativeUI.ets(7:5)");
            Row.height('100%');
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/B_DeclarativeUI.ets(8:7)");
            Column.width('100%');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //有参数
            Text.create("声明式UI描述");
            Text.debugLine("pages/B_DeclarativeUI.ets(10:9)");
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
            Divider.debugLine("pages/B_DeclarativeUI.ets(14:9)");
            if (!isInitialRender) {
                //无参数
                Divider.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.message);
            Text.debugLine("pages/B_DeclarativeUI.ets(15:9)");
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
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Divider.create();
            Divider.debugLine("pages/B_DeclarativeUI.ets(25:9)");
            if (!isInitialRender) {
                Divider.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //配置事件
            Button.createWithLabel("click");
            Button.debugLine("pages/B_DeclarativeUI.ets(27:9)");
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
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new DeclarativwUI(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=B_DeclarativeUI.js.map