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
            Row.debugLine("pages/Chat.ets(13:5)");
            Row.justifyContent(FlexAlign.End);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create('/images/we_add.png');
            Image.debugLine("pages/Chat.ets(15:7)");
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
            Row.debugLine("pages/Chat.ets(22:5)");
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
            Text.debugLine("pages/Chat.ets(23:7)");
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
            Column.debugLine("pages/Chat.ets(33:5)");
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
            Navigation.debugLine("pages/Chat.ets(34:7)");
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
            List.debugLine("pages/Chat.ets(36:9)");
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
                ListItem.debugLine("pages/Chat.ets(37:11)");
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
                    Flex.debugLine("pages/Chat.ets(38:13)");
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create('/images/icon1.png');
                    Image.debugLine("pages/Chat.ets(39:15)");
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
                    Text.debugLine("pages/Chat.ets(43:17)");
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
                    Flex.debugLine("pages/Chat.ets(38:13)");
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create('/images/icon1.png');
                    Image.debugLine("pages/Chat.ets(39:15)");
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
                    Text.debugLine("pages/Chat.ets(43:17)");
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
                ListItem.debugLine("pages/Chat.ets(59:11)");
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
                    Flex.debugLine("pages/Chat.ets(60:13)");
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
                    Text.debugLine("pages/Chat.ets(63:17)");
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
                    Image.debugLine("pages/Chat.ets(76:15)");
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
                    Flex.debugLine("pages/Chat.ets(60:13)");
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
                    Text.debugLine("pages/Chat.ets(63:17)");
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
                    Image.debugLine("pages/Chat.ets(76:15)");
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
                ListItem.debugLine("pages/Chat.ets(88:11)");
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
                    Flex.debugLine("pages/Chat.ets(89:13)");
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
                    Text.debugLine("pages/Chat.ets(92:15)");
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
                    Image.debugLine("pages/Chat.ets(106:15)");
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
                    Flex.debugLine("pages/Chat.ets(89:13)");
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
                    Text.debugLine("pages/Chat.ets(92:15)");
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
                    Image.debugLine("pages/Chat.ets(106:15)");
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
                ListItem.debugLine("pages/Chat.ets(117:11)");
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
                    Flex.debugLine("pages/Chat.ets(118:13)");
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
                    Image.debugLine("pages/Chat.ets(120:15)");
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
                    Text.debugLine("pages/Chat.ets(125:15)");
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
                    Flex.debugLine("pages/Chat.ets(118:13)");
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
                    Image.debugLine("pages/Chat.ets(120:15)");
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
                    Text.debugLine("pages/Chat.ets(125:15)");
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
                ListItem.debugLine("pages/Chat.ets(146:11)");
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
                    Flex.debugLine("pages/Chat.ets(147:13)");
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
                    Image.debugLine("pages/Chat.ets(149:15)");
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
                    Text.debugLine("pages/Chat.ets(154:15)");
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
                    Flex.debugLine("pages/Chat.ets(147:13)");
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
                    Image.debugLine("pages/Chat.ets(149:15)");
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
                    Text.debugLine("pages/Chat.ets(154:15)");
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
                ListItem.debugLine("pages/Chat.ets(180:11)");
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
                    Flex.debugLine("pages/Chat.ets(181:13)");
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
                    Image.debugLine("pages/Chat.ets(183:15)");
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
                    Text.debugLine("pages/Chat.ets(188:15)");
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
                    Flex.debugLine("pages/Chat.ets(181:13)");
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
                    Image.debugLine("pages/Chat.ets(183:15)");
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
                    Text.debugLine("pages/Chat.ets(188:15)");
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
                ListItem.debugLine("pages/Chat.ets(214:11)");
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
                    Flex.debugLine("pages/Chat.ets(215:13)");
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
                    Image.debugLine("pages/Chat.ets(217:15)");
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
                    Text.debugLine("pages/Chat.ets(222:15)");
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
                    Flex.debugLine("pages/Chat.ets(215:13)");
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
                    Image.debugLine("pages/Chat.ets(217:15)");
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
                    Text.debugLine("pages/Chat.ets(222:15)");
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
            Flex.debugLine("pages/Chat.ets(271:9)");
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
            Image.debugLine("pages/Chat.ets(272:11)");
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
            TextInput.debugLine("pages/Chat.ets(278:11)");
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
            Image.debugLine("pages/Chat.ets(284:11)");
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
            Image.debugLine("pages/Chat.ets(290:11)");
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