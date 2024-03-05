import inputMethod from '@ohos:inputMethod';
export default class Chat extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__index = new ObservedPropertySimplePU(0, this, "index");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.index !== undefined) {
            this.index = params.index;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__index.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__index.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get index() {
        return this.__index.get();
    }
    set index(newValue) {
        this.__index.set(newValue);
    }
    onPageShow() {
    }
    NavigationMenus(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.justifyContent(FlexAlign.End);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create('/images/we_add.png');
            Image.size({ width: 24, height: 24 });
            Image.margin({ left: 5 });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
    }
    NavigationTitle(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.width('80%');
            Row.justifyContent(FlexAlign.Center);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create("猪头");
            Text.width('100');
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width('100%');
            Column.height('100%');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Navigation.create();
            Navigation.title({ builder: () => {
                    this.NavigationTitle.call(this);
                } });
            Navigation.mode(NavigationMode.Stack);
            Navigation.titleMode(NavigationTitleMode.Mini);
            Navigation.hideBackButton(false);
            Navigation.menus({ builder: () => {
                    this.NavigationMenus.call(this);
                } });
            Navigation.size({ width: '100%', height: '100%' });
            Navigation.backgroundColor('rgb(237,237,237)');
            if (!isInitialRender) {
                Navigation.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            List.create({ space: 5, initialIndex: 0 });
            List.onScroll(() => {
                console.log("开始滑动2");
                inputMethod.getController().hideSoftKeyboard();
            });
            List.onDragStart(() => {
                console.log("开始滑动");
                inputMethod.getController().hideSoftKeyboard();
            });
            List.listDirection(Axis.Vertical);
            List.backgroundColor('rgb(245,245,245)');
            List.height('90%');
            if (!isInitialRender) {
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            const isLazyCreate = true;
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, isLazyCreate);
                ListItem.padding({ right: 55, top: 10, bottom: 1, left: 10 });
                if (!isInitialRender) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const observedShallowRender = () => {
                this.observeComponentCreation(itemCreation);
                ListItem.pop();
            };
            const observedDeepRender = () => {
                this.observeComponentCreation(itemCreation);
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Flex.create({ direction: FlexDirection.Row });
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create('/images/icon1.png');
                    Image.width(45);
                    Image.height(45);
                    Image.borderRadius(5);
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create('燕子你走了我可怎么活啊燕子～～～～燕子～～～～啊啊～～～～～～～');
                    Text.backgroundColor(Color.White);
                    Text.fontColor(Color.Black);
                    Text.padding(10);
                    Text.borderRadius(6);
                    Text.lineHeight(20);
                    Text.margin({ left: 10 });
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                Flex.pop();
                ListItem.pop();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Flex.create({ direction: FlexDirection.Row });
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create('/images/icon1.png');
                    Image.width(45);
                    Image.height(45);
                    Image.borderRadius(5);
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create('燕子你走了我可怎么活啊燕子～～～～燕子～～～～啊啊～～～～～～～');
                    Text.backgroundColor(Color.White);
                    Text.fontColor(Color.Black);
                    Text.padding(10);
                    Text.borderRadius(6);
                    Text.lineHeight(20);
                    Text.margin({ left: 10 });
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                Flex.pop();
                ListItem.pop();
            };
            if (isLazyCreate) {
                observedShallowRender();
            }
            else {
                observedDeepRender();
            }
        }
        {
            const isLazyCreate = true;
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, isLazyCreate);
                if (!isInitialRender) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const observedShallowRender = () => {
                this.observeComponentCreation(itemCreation);
                ListItem.pop();
            };
            const observedDeepRender = () => {
                this.observeComponentCreation(itemCreation);
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.End });
                    Flex.width('100%');
                    Flex.padding({ left: 55, top: 10, bottom: 1, right: 10 });
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    // Flex({direction:FlexDirection.Row}){
                    Text.create('燕子你走了我可怎么活啊燕子～～～～燕子～～～～啊啊～～～～～～～燕子你走了我可怎么活啊燕子～～～～燕子～～～～啊啊～～～～～～～');
                    // Flex({direction:FlexDirection.Row}){
                    Text.backgroundColor('rgb(63,182,57)');
                    // Flex({direction:FlexDirection.Row}){
                    Text.fontColor(Color.Black);
                    // Flex({direction:FlexDirection.Row}){
                    Text.padding(10);
                    // Flex({direction:FlexDirection.Row}){
                    Text.borderRadius(6);
                    // Flex({direction:FlexDirection.Row}){
                    Text.lineHeight(20);
                    // Flex({direction:FlexDirection.Row}){
                    Text.margin({ right: 10 });
                    if (!isInitialRender) {
                        // Flex({direction:FlexDirection.Row}){
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                // Flex({direction:FlexDirection.Row}){
                Text.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    // }
                    // .borderRadius(6)
                    // .padding({left:55})
                    // .margin({right:10})
                    Image.create('/images/icon1.png');
                    // }
                    // .borderRadius(6)
                    // .padding({left:55})
                    // .margin({right:10})
                    Image.width(45);
                    // }
                    // .borderRadius(6)
                    // .padding({left:55})
                    // .margin({right:10})
                    Image.height(45);
                    // }
                    // .borderRadius(6)
                    // .padding({left:55})
                    // .margin({right:10})
                    Image.borderRadius(5);
                    if (!isInitialRender) {
                        // }
                        // .borderRadius(6)
                        // .padding({left:55})
                        // .margin({right:10})
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Flex.pop();
                ListItem.pop();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.End });
                    Flex.width('100%');
                    Flex.padding({ left: 55, top: 10, bottom: 1, right: 10 });
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    // Flex({direction:FlexDirection.Row}){
                    Text.create('燕子你走了我可怎么活啊燕子～～～～燕子～～～～啊啊～～～～～～～燕子你走了我可怎么活啊燕子～～～～燕子～～～～啊啊～～～～～～～');
                    // Flex({direction:FlexDirection.Row}){
                    Text.backgroundColor('rgb(63,182,57)');
                    // Flex({direction:FlexDirection.Row}){
                    Text.fontColor(Color.Black);
                    // Flex({direction:FlexDirection.Row}){
                    Text.padding(10);
                    // Flex({direction:FlexDirection.Row}){
                    Text.borderRadius(6);
                    // Flex({direction:FlexDirection.Row}){
                    Text.lineHeight(20);
                    // Flex({direction:FlexDirection.Row}){
                    Text.margin({ right: 10 });
                    if (!isInitialRender) {
                        // Flex({direction:FlexDirection.Row}){
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                // Flex({direction:FlexDirection.Row}){
                Text.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    // }
                    // .borderRadius(6)
                    // .padding({left:55})
                    // .margin({right:10})
                    Image.create('/images/icon1.png');
                    // }
                    // .borderRadius(6)
                    // .padding({left:55})
                    // .margin({right:10})
                    Image.width(45);
                    // }
                    // .borderRadius(6)
                    // .padding({left:55})
                    // .margin({right:10})
                    Image.height(45);
                    // }
                    // .borderRadius(6)
                    // .padding({left:55})
                    // .margin({right:10})
                    Image.borderRadius(5);
                    if (!isInitialRender) {
                        // }
                        // .borderRadius(6)
                        // .padding({left:55})
                        // .margin({right:10})
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Flex.pop();
                ListItem.pop();
            };
            if (isLazyCreate) {
                observedShallowRender();
            }
            else {
                observedDeepRender();
            }
        }
        {
            const isLazyCreate = true;
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, isLazyCreate);
                if (!isInitialRender) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const observedShallowRender = () => {
                this.observeComponentCreation(itemCreation);
                ListItem.pop();
            };
            const observedDeepRender = () => {
                this.observeComponentCreation(itemCreation);
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.End });
                    Flex.width('100%');
                    Flex.padding({ left: 55, top: 10, bottom: 1, right: 10 });
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    // Flex({direction:FlexDirection.Row}){
                    Text.create('燕子你走了我可怎么活啊燕子～～～～燕子～～～～啊啊～～～～～～～燕子你走了我可怎么活啊燕子～～～～燕子～～～～啊啊～～～～～～～');
                    // Flex({direction:FlexDirection.Row}){
                    Text.backgroundColor('rgb(63,182,57)');
                    // Flex({direction:FlexDirection.Row}){
                    Text.fontColor(Color.Black);
                    // Flex({direction:FlexDirection.Row}){
                    Text.padding(10);
                    // Flex({direction:FlexDirection.Row}){
                    Text.borderRadius(6);
                    // Flex({direction:FlexDirection.Row}){
                    Text.lineHeight(20);
                    // Flex({direction:FlexDirection.Row}){
                    Text.margin({ right: 10 });
                    if (!isInitialRender) {
                        // Flex({direction:FlexDirection.Row}){
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                // Flex({direction:FlexDirection.Row}){
                Text.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    // }
                    // .borderRadius(6)
                    // .padding({left:55})
                    // .margin({right:10})
                    Image.create('/images/icon1.png');
                    // }
                    // .borderRadius(6)
                    // .padding({left:55})
                    // .margin({right:10})
                    Image.width(45);
                    // }
                    // .borderRadius(6)
                    // .padding({left:55})
                    // .margin({right:10})
                    Image.height(45);
                    // }
                    // .borderRadius(6)
                    // .padding({left:55})
                    // .margin({right:10})
                    Image.borderRadius(5);
                    if (!isInitialRender) {
                        // }
                        // .borderRadius(6)
                        // .padding({left:55})
                        // .margin({right:10})
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Flex.pop();
                ListItem.pop();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.End });
                    Flex.width('100%');
                    Flex.padding({ left: 55, top: 10, bottom: 1, right: 10 });
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    // Flex({direction:FlexDirection.Row}){
                    Text.create('燕子你走了我可怎么活啊燕子～～～～燕子～～～～啊啊～～～～～～～燕子你走了我可怎么活啊燕子～～～～燕子～～～～啊啊～～～～～～～');
                    // Flex({direction:FlexDirection.Row}){
                    Text.backgroundColor('rgb(63,182,57)');
                    // Flex({direction:FlexDirection.Row}){
                    Text.fontColor(Color.Black);
                    // Flex({direction:FlexDirection.Row}){
                    Text.padding(10);
                    // Flex({direction:FlexDirection.Row}){
                    Text.borderRadius(6);
                    // Flex({direction:FlexDirection.Row}){
                    Text.lineHeight(20);
                    // Flex({direction:FlexDirection.Row}){
                    Text.margin({ right: 10 });
                    if (!isInitialRender) {
                        // Flex({direction:FlexDirection.Row}){
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                // Flex({direction:FlexDirection.Row}){
                Text.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    // }
                    // .borderRadius(6)
                    // .padding({left:55})
                    // .margin({right:10})
                    Image.create('/images/icon1.png');
                    // }
                    // .borderRadius(6)
                    // .padding({left:55})
                    // .margin({right:10})
                    Image.width(45);
                    // }
                    // .borderRadius(6)
                    // .padding({left:55})
                    // .margin({right:10})
                    Image.height(45);
                    // }
                    // .borderRadius(6)
                    // .padding({left:55})
                    // .margin({right:10})
                    Image.borderRadius(5);
                    if (!isInitialRender) {
                        // }
                        // .borderRadius(6)
                        // .padding({left:55})
                        // .margin({right:10})
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Flex.pop();
                ListItem.pop();
            };
            if (isLazyCreate) {
                observedShallowRender();
            }
            else {
                observedDeepRender();
            }
        }
        {
            const isLazyCreate = true;
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, isLazyCreate);
                if (!isInitialRender) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const observedShallowRender = () => {
                this.observeComponentCreation(itemCreation);
                ListItem.pop();
            };
            const observedDeepRender = () => {
                this.observeComponentCreation(itemCreation);
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.Start });
                    Flex.width('100%');
                    Flex.padding({ left: 10, top: 10, bottom: 1, right: 55 });
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create('/images/icon1.png');
                    Image.width(45);
                    Image.height(45);
                    Image.borderRadius(5);
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    // Flex({direction:FlexDirection.Row}){
                    Text.create('3燕子你走了我可怎么活啊燕子～～～～燕子～～～～啊啊～～～～～～～燕子你走了我可怎么活啊燕子～～～～燕子～～～～啊啊～～～～～～～');
                    // Flex({direction:FlexDirection.Row}){
                    Text.backgroundColor(Color.White);
                    // Flex({direction:FlexDirection.Row}){
                    Text.fontColor(Color.Black);
                    // Flex({direction:FlexDirection.Row}){
                    Text.padding(10);
                    // Flex({direction:FlexDirection.Row}){
                    Text.borderRadius(6);
                    // Flex({direction:FlexDirection.Row}){
                    Text.lineHeight(20);
                    // Flex({direction:FlexDirection.Row}){
                    Text.margin({ left: 10 });
                    if (!isInitialRender) {
                        // Flex({direction:FlexDirection.Row}){
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                // Flex({direction:FlexDirection.Row}){
                Text.pop();
                Flex.pop();
                ListItem.pop();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.Start });
                    Flex.width('100%');
                    Flex.padding({ left: 10, top: 10, bottom: 1, right: 55 });
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create('/images/icon1.png');
                    Image.width(45);
                    Image.height(45);
                    Image.borderRadius(5);
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    // Flex({direction:FlexDirection.Row}){
                    Text.create('3燕子你走了我可怎么活啊燕子～～～～燕子～～～～啊啊～～～～～～～燕子你走了我可怎么活啊燕子～～～～燕子～～～～啊啊～～～～～～～');
                    // Flex({direction:FlexDirection.Row}){
                    Text.backgroundColor(Color.White);
                    // Flex({direction:FlexDirection.Row}){
                    Text.fontColor(Color.Black);
                    // Flex({direction:FlexDirection.Row}){
                    Text.padding(10);
                    // Flex({direction:FlexDirection.Row}){
                    Text.borderRadius(6);
                    // Flex({direction:FlexDirection.Row}){
                    Text.lineHeight(20);
                    // Flex({direction:FlexDirection.Row}){
                    Text.margin({ left: 10 });
                    if (!isInitialRender) {
                        // Flex({direction:FlexDirection.Row}){
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                // Flex({direction:FlexDirection.Row}){
                Text.pop();
                Flex.pop();
                ListItem.pop();
            };
            if (isLazyCreate) {
                observedShallowRender();
            }
            else {
                observedDeepRender();
            }
        }
        {
            const isLazyCreate = true;
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, isLazyCreate);
                if (!isInitialRender) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const observedShallowRender = () => {
                this.observeComponentCreation(itemCreation);
                ListItem.pop();
            };
            const observedDeepRender = () => {
                this.observeComponentCreation(itemCreation);
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.Start, alignItems: ItemAlign.Start });
                    Flex.padding({ left: 10, top: 10, bottom: 1, right: 55 });
                    Flex.margin(0);
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create('/images/icon1.png');
                    Image.width(45);
                    Image.height(45);
                    Image.borderRadius(5);
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    // Flex({direction:FlexDirection.Row}){
                    Text.create('4燕子你走了我可怎么活啊燕子～～～～燕子～～～～啊啊～～～～～～～燕子你走了我可怎么活啊燕子～～～～燕子～～～～啊啊～～～～～～～');
                    // Flex({direction:FlexDirection.Row}){
                    Text.backgroundColor(Color.White);
                    // Flex({direction:FlexDirection.Row}){
                    Text.fontColor(Color.Black);
                    // Flex({direction:FlexDirection.Row}){
                    Text.padding(10);
                    // Flex({direction:FlexDirection.Row}){
                    Text.borderRadius(6);
                    // Flex({direction:FlexDirection.Row}){
                    Text.lineHeight(20);
                    // Flex({direction:FlexDirection.Row}){
                    Text.margin({ left: 10 });
                    if (!isInitialRender) {
                        // Flex({direction:FlexDirection.Row}){
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                // Flex({direction:FlexDirection.Row}){
                Text.pop();
                Flex.pop();
                ListItem.pop();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.Start, alignItems: ItemAlign.Start });
                    Flex.padding({ left: 10, top: 10, bottom: 1, right: 55 });
                    Flex.margin(0);
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create('/images/icon1.png');
                    Image.width(45);
                    Image.height(45);
                    Image.borderRadius(5);
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    // Flex({direction:FlexDirection.Row}){
                    Text.create('4燕子你走了我可怎么活啊燕子～～～～燕子～～～～啊啊～～～～～～～燕子你走了我可怎么活啊燕子～～～～燕子～～～～啊啊～～～～～～～');
                    // Flex({direction:FlexDirection.Row}){
                    Text.backgroundColor(Color.White);
                    // Flex({direction:FlexDirection.Row}){
                    Text.fontColor(Color.Black);
                    // Flex({direction:FlexDirection.Row}){
                    Text.padding(10);
                    // Flex({direction:FlexDirection.Row}){
                    Text.borderRadius(6);
                    // Flex({direction:FlexDirection.Row}){
                    Text.lineHeight(20);
                    // Flex({direction:FlexDirection.Row}){
                    Text.margin({ left: 10 });
                    if (!isInitialRender) {
                        // Flex({direction:FlexDirection.Row}){
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                // Flex({direction:FlexDirection.Row}){
                Text.pop();
                Flex.pop();
                ListItem.pop();
            };
            if (isLazyCreate) {
                observedShallowRender();
            }
            else {
                observedDeepRender();
            }
        }
        {
            const isLazyCreate = true;
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, isLazyCreate);
                if (!isInitialRender) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const observedShallowRender = () => {
                this.observeComponentCreation(itemCreation);
                ListItem.pop();
            };
            const observedDeepRender = () => {
                this.observeComponentCreation(itemCreation);
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.Start, alignItems: ItemAlign.Start });
                    Flex.padding({ left: 10, top: 10, bottom: 1, right: 55 });
                    Flex.margin(0);
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create('/images/icon1.png');
                    Image.width(45);
                    Image.height(45);
                    Image.borderRadius(5);
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    // Flex({direction:FlexDirection.Row}){
                    Text.create('4燕子你走了我可怎么活啊燕子～～～～燕子～～～～啊啊～～～～～～～燕子你走了我可怎么活啊燕子～～～～燕子～～～～啊啊～～～～～～～');
                    // Flex({direction:FlexDirection.Row}){
                    Text.backgroundColor(Color.White);
                    // Flex({direction:FlexDirection.Row}){
                    Text.fontColor(Color.Black);
                    // Flex({direction:FlexDirection.Row}){
                    Text.padding(10);
                    // Flex({direction:FlexDirection.Row}){
                    Text.borderRadius(6);
                    // Flex({direction:FlexDirection.Row}){
                    Text.lineHeight(20);
                    // Flex({direction:FlexDirection.Row}){
                    Text.margin({ left: 10 });
                    if (!isInitialRender) {
                        // Flex({direction:FlexDirection.Row}){
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                // Flex({direction:FlexDirection.Row}){
                Text.pop();
                Flex.pop();
                ListItem.pop();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.Start, alignItems: ItemAlign.Start });
                    Flex.padding({ left: 10, top: 10, bottom: 1, right: 55 });
                    Flex.margin(0);
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create('/images/icon1.png');
                    Image.width(45);
                    Image.height(45);
                    Image.borderRadius(5);
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    // Flex({direction:FlexDirection.Row}){
                    Text.create('4燕子你走了我可怎么活啊燕子～～～～燕子～～～～啊啊～～～～～～～燕子你走了我可怎么活啊燕子～～～～燕子～～～～啊啊～～～～～～～');
                    // Flex({direction:FlexDirection.Row}){
                    Text.backgroundColor(Color.White);
                    // Flex({direction:FlexDirection.Row}){
                    Text.fontColor(Color.Black);
                    // Flex({direction:FlexDirection.Row}){
                    Text.padding(10);
                    // Flex({direction:FlexDirection.Row}){
                    Text.borderRadius(6);
                    // Flex({direction:FlexDirection.Row}){
                    Text.lineHeight(20);
                    // Flex({direction:FlexDirection.Row}){
                    Text.margin({ left: 10 });
                    if (!isInitialRender) {
                        // Flex({direction:FlexDirection.Row}){
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                // Flex({direction:FlexDirection.Row}){
                Text.pop();
                Flex.pop();
                ListItem.pop();
            };
            if (isLazyCreate) {
                observedShallowRender();
            }
            else {
                observedDeepRender();
            }
        }
        {
            const isLazyCreate = true;
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, isLazyCreate);
                if (!isInitialRender) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const observedShallowRender = () => {
                this.observeComponentCreation(itemCreation);
                ListItem.pop();
            };
            const observedDeepRender = () => {
                this.observeComponentCreation(itemCreation);
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.Start, alignItems: ItemAlign.Start });
                    Flex.padding({ left: 10, top: 10, bottom: 1, right: 55 });
                    Flex.margin(0);
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create('/images/icon1.png');
                    Image.width(45);
                    Image.height(45);
                    Image.borderRadius(5);
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    // Flex({direction:FlexDirection.Row}){
                    Text.create('4燕子你走了我可怎么活啊燕子～～～～燕子～～～～啊啊～～～～～～～燕子你走了我可怎么活啊燕子～～～～燕子～～～～啊啊～～～～～～～');
                    // Flex({direction:FlexDirection.Row}){
                    Text.backgroundColor(Color.White);
                    // Flex({direction:FlexDirection.Row}){
                    Text.fontColor(Color.Black);
                    // Flex({direction:FlexDirection.Row}){
                    Text.padding(10);
                    // Flex({direction:FlexDirection.Row}){
                    Text.borderRadius(6);
                    // Flex({direction:FlexDirection.Row}){
                    Text.lineHeight(20);
                    // Flex({direction:FlexDirection.Row}){
                    Text.margin({ left: 10 });
                    if (!isInitialRender) {
                        // Flex({direction:FlexDirection.Row}){
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                // Flex({direction:FlexDirection.Row}){
                Text.pop();
                Flex.pop();
                ListItem.pop();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.Start, alignItems: ItemAlign.Start });
                    Flex.padding({ left: 10, top: 10, bottom: 1, right: 55 });
                    Flex.margin(0);
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create('/images/icon1.png');
                    Image.width(45);
                    Image.height(45);
                    Image.borderRadius(5);
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    // Flex({direction:FlexDirection.Row}){
                    Text.create('4燕子你走了我可怎么活啊燕子～～～～燕子～～～～啊啊～～～～～～～燕子你走了我可怎么活啊燕子～～～～燕子～～～～啊啊～～～～～～～');
                    // Flex({direction:FlexDirection.Row}){
                    Text.backgroundColor(Color.White);
                    // Flex({direction:FlexDirection.Row}){
                    Text.fontColor(Color.Black);
                    // Flex({direction:FlexDirection.Row}){
                    Text.padding(10);
                    // Flex({direction:FlexDirection.Row}){
                    Text.borderRadius(6);
                    // Flex({direction:FlexDirection.Row}){
                    Text.lineHeight(20);
                    // Flex({direction:FlexDirection.Row}){
                    Text.margin({ left: 10 });
                    if (!isInitialRender) {
                        // Flex({direction:FlexDirection.Row}){
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                // Flex({direction:FlexDirection.Row}){
                Text.pop();
                Flex.pop();
                ListItem.pop();
            };
            if (isLazyCreate) {
                observedShallowRender();
            }
            else {
                observedDeepRender();
            }
        }
        List.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.SpaceBetween });
            Flex.padding({ top: 10, left: 15, right: 15 });
            Flex.width('100%');
            Flex.height(90);
            Flex.backgroundColor('rgb(240,240,240)');
            if (!isInitialRender) {
                Flex.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create('/images/voice.png');
            Image.width(30);
            Image.height(30);
            Image.margin({ top: 5 });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create();
            TextInput.width('62%');
            TextInput.height(40);
            TextInput.backgroundColor(Color.White);
            TextInput.borderRadius(5);
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create('/images/emoj.png');
            Image.width(30);
            Image.height(30);
            Image.margin({ top: 5 });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create('/images/more.png');
            Image.width(30);
            Image.height(30);
            Image.margin({ top: 5 });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Flex.pop();
        Navigation.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new Chat(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=Chat.js.map