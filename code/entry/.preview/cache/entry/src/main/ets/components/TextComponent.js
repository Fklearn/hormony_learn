class TextComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.title = undefined;
        this.index = undefined;
        this.__currentIndex = new SynchedPropertySimpleOneWayPU(params.currentIndex, this, "currentIndex");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.title !== undefined) {
            this.title = params.title;
        }
        if (params.index !== undefined) {
            this.index = params.index;
        }
    }
    updateStateVars(params) {
        this.__currentIndex.reset(params.currentIndex);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue) {
        this.__currentIndex.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.title);
            Text.debugLine("components/TextComponent.ets(7:5)");
            Text.width('50%');
            Text.textAlign(TextAlign.Center);
            Text.fontColor(this.index === this.currentIndex ? Color.Red : Color.Black);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export default TextComponent;
//# sourceMappingURL=TextComponent.js.map