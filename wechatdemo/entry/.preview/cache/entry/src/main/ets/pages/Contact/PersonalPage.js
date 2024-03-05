import router from '@ohos:router';
class PersonalPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.__person = new ObservedPropertyObjectPU(router.getParams()['person'], this, "person");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.person !== undefined) {
            this.person = params.person;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__person.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__person.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get message() {
        return this.__message.get();
    }
    set message(newValue) {
        this.__message.set(newValue);
    }
    get person() {
        return this.__person.get();
    }
    set person(newValue) {
        this.__person.set(newValue);
    }
    NavigationMenus(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("pages/Contact/PersonalPage.ets(9:5)");
            Row.justifyContent(FlexAlign.End);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create('/images/we_add.png');
            Image.debugLine("pages/Contact/PersonalPage.ets(11:7)");
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
            Row.debugLine("pages/Contact/PersonalPage.ets(18:5)");
            Row.width('80%');
            Row.justifyContent(FlexAlign.Center);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/Contact/PersonalPage.ets(29:5)");
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
            Navigation.debugLine("pages/Contact/PersonalPage.ets(30:7)");
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
            List.create({ space: 10 });
            List.debugLine("pages/Contact/PersonalPage.ets(32:9)");
            List.backgroundColor('rgb(247,247,247)');
            if (!isInitialRender) {
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ListItemGroup.create();
            ListItemGroup.debugLine("pages/Contact/PersonalPage.ets(34:11)");
            ListItemGroup.divider({ strokeWidth: 1, color: 'rgb(247,247,247)', startMargin: 20, endMargin: 0 });
            ListItemGroup.padding({ left: 12, right: 12, top: 20 });
            ListItemGroup.backgroundColor(Color.White);
            if (!isInitialRender) {
                ListItemGroup.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            const isLazyCreate = true;
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, isLazyCreate);
                ListItem.debugLine("pages/Contact/PersonalPage.ets(35:13)");
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
                    Flex.create({ direction: FlexDirection.Row, alignItems: ItemAlign.Center });
                    Flex.debugLine("pages/Contact/PersonalPage.ets(36:15)");
                    Flex.padding({ bottom: 30, top: 10 });
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create(this.person['avtar']);
                    Image.debugLine("pages/Contact/PersonalPage.ets(37:17)");
                    Image.width(65);
                    Image.height(65);
                    Image.borderRadius(8);
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Flex.create({ direction: FlexDirection.Column, justifyContent: FlexAlign.SpaceBetween });
                    Flex.debugLine("pages/Contact/PersonalPage.ets(42:17)");
                    Flex.margin({ left: 15 });
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Flex.create({ direction: FlexDirection.Row });
                    Flex.debugLine("pages/Contact/PersonalPage.ets(43:19)");
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create(this.person['name']);
                    Text.debugLine("pages/Contact/PersonalPage.ets(44:21)");
                    Text.fontSize(22);
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create({ "id": 16777220, "type": 20000, params: [], "bundleName": "com.example.wechatdemo", "moduleName": "entry" });
                    Image.debugLine("pages/Contact/PersonalPage.ets(46:21)");
                    Image.width(20);
                    Image.height(20);
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Flex.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Column.create();
                    Column.debugLine("pages/Contact/PersonalPage.ets(51:19)");
                    if (!isInitialRender) {
                        Column.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create('微信号：123456');
                    Text.debugLine("pages/Contact/PersonalPage.ets(52:21)");
                    Text.fontColor(Color.Gray);
                    Text.fontSize(15);
                    Text.margin({ bottom: 3 });
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create('地区：中国大陆');
                    Text.debugLine("pages/Contact/PersonalPage.ets(56:21)");
                    Text.fontColor(Color.Gray);
                    Text.fontSize(15);
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                Column.pop();
                Flex.pop();
                Flex.pop();
                ListItem.pop();
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                this.updateFuncByElmtId.set(elmtId, itemCreation);
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Flex.create({ direction: FlexDirection.Row, alignItems: ItemAlign.Center });
                    Flex.debugLine("pages/Contact/PersonalPage.ets(36:15)");
                    Flex.padding({ bottom: 30, top: 10 });
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create(this.person['avtar']);
                    Image.debugLine("pages/Contact/PersonalPage.ets(37:17)");
                    Image.width(65);
                    Image.height(65);
                    Image.borderRadius(8);
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Flex.create({ direction: FlexDirection.Column, justifyContent: FlexAlign.SpaceBetween });
                    Flex.debugLine("pages/Contact/PersonalPage.ets(42:17)");
                    Flex.margin({ left: 15 });
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Flex.create({ direction: FlexDirection.Row });
                    Flex.debugLine("pages/Contact/PersonalPage.ets(43:19)");
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create(this.person['name']);
                    Text.debugLine("pages/Contact/PersonalPage.ets(44:21)");
                    Text.fontSize(22);
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create({ "id": 16777220, "type": 20000, params: [], "bundleName": "com.example.wechatdemo", "moduleName": "entry" });
                    Image.debugLine("pages/Contact/PersonalPage.ets(46:21)");
                    Image.width(20);
                    Image.height(20);
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Flex.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Column.create();
                    Column.debugLine("pages/Contact/PersonalPage.ets(51:19)");
                    if (!isInitialRender) {
                        Column.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create('微信号：123456');
                    Text.debugLine("pages/Contact/PersonalPage.ets(52:21)");
                    Text.fontColor(Color.Gray);
                    Text.fontSize(15);
                    Text.margin({ bottom: 3 });
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create('地区：中国大陆');
                    Text.debugLine("pages/Contact/PersonalPage.ets(56:21)");
                    Text.fontColor(Color.Gray);
                    Text.fontSize(15);
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                Column.pop();
                Flex.pop();
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
                ListItem.debugLine("pages/Contact/PersonalPage.ets(67:13)");
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
                    Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.SpaceBetween, alignItems: ItemAlign.Center });
                    Flex.debugLine("pages/Contact/PersonalPage.ets(68:15)");
                    Flex.height(45);
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create('备注和标签');
                    Text.debugLine("pages/Contact/PersonalPage.ets(69:17)");
                    Text.fontSize(18);
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    // $r("app.media.arrow_right_filled")
                    Image.create({ "id": 16777238, "type": 20000, params: [], "bundleName": "com.example.wechatdemo", "moduleName": "entry" });
                    Image.debugLine("pages/Contact/PersonalPage.ets(73:17)");
                    // $r("app.media.arrow_right_filled")
                    Image.width(20);
                    // $r("app.media.arrow_right_filled")
                    Image.height(20);
                    if (!isInitialRender) {
                        // $r("app.media.arrow_right_filled")
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
                    Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.SpaceBetween, alignItems: ItemAlign.Center });
                    Flex.debugLine("pages/Contact/PersonalPage.ets(68:15)");
                    Flex.height(45);
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create('备注和标签');
                    Text.debugLine("pages/Contact/PersonalPage.ets(69:17)");
                    Text.fontSize(18);
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    // $r("app.media.arrow_right_filled")
                    Image.create({ "id": 16777238, "type": 20000, params: [], "bundleName": "com.example.wechatdemo", "moduleName": "entry" });
                    Image.debugLine("pages/Contact/PersonalPage.ets(73:17)");
                    // $r("app.media.arrow_right_filled")
                    Image.width(20);
                    // $r("app.media.arrow_right_filled")
                    Image.height(20);
                    if (!isInitialRender) {
                        // $r("app.media.arrow_right_filled")
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
                ListItem.debugLine("pages/Contact/PersonalPage.ets(81:13)");
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
                    Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.SpaceBetween, alignItems: ItemAlign.Center });
                    Flex.debugLine("pages/Contact/PersonalPage.ets(82:15)");
                    Flex.height(45);
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create('朋友权限');
                    Text.debugLine("pages/Contact/PersonalPage.ets(83:17)");
                    Text.fontSize(18);
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    // $r("app.media.arrow_right_filled")
                    Image.create({ "id": 16777238, "type": 20000, params: [], "bundleName": "com.example.wechatdemo", "moduleName": "entry" });
                    Image.debugLine("pages/Contact/PersonalPage.ets(87:17)");
                    // $r("app.media.arrow_right_filled")
                    Image.width(20);
                    // $r("app.media.arrow_right_filled")
                    Image.height(20);
                    if (!isInitialRender) {
                        // $r("app.media.arrow_right_filled")
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
                    Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.SpaceBetween, alignItems: ItemAlign.Center });
                    Flex.debugLine("pages/Contact/PersonalPage.ets(82:15)");
                    Flex.height(45);
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create('朋友权限');
                    Text.debugLine("pages/Contact/PersonalPage.ets(83:17)");
                    Text.fontSize(18);
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    // $r("app.media.arrow_right_filled")
                    Image.create({ "id": 16777238, "type": 20000, params: [], "bundleName": "com.example.wechatdemo", "moduleName": "entry" });
                    Image.debugLine("pages/Contact/PersonalPage.ets(87:17)");
                    // $r("app.media.arrow_right_filled")
                    Image.width(20);
                    // $r("app.media.arrow_right_filled")
                    Image.height(20);
                    if (!isInitialRender) {
                        // $r("app.media.arrow_right_filled")
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
        ListItemGroup.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ListItemGroup.create();
            ListItemGroup.debugLine("pages/Contact/PersonalPage.ets(100:11)");
            ListItemGroup.divider({ strokeWidth: 1, color: 'rgb(247,247,247)', startMargin: 20, endMargin: 0 });
            ListItemGroup.padding({ left: 12, right: 12, top: 0 });
            ListItemGroup.backgroundColor(Color.White);
            if (!isInitialRender) {
                ListItemGroup.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            const isLazyCreate = true;
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, isLazyCreate);
                ListItem.debugLine("pages/Contact/PersonalPage.ets(102:13)");
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
                    Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.SpaceBetween, alignItems: ItemAlign.Center });
                    Flex.debugLine("pages/Contact/PersonalPage.ets(103:15)");
                    Flex.height(70);
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Flex.create({ direction: FlexDirection.Row, alignItems: ItemAlign.Center });
                    Flex.debugLine("pages/Contact/PersonalPage.ets(105:17)");
                    Flex.height(70);
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create('朋友圈');
                    Text.debugLine("pages/Contact/PersonalPage.ets(106:19)");
                    Text.fontSize(18);
                    Text.width(100);
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    // $r("app.media.arrow_right_filled")
                    Image.create('/images/icon1.png');
                    Image.debugLine("pages/Contact/PersonalPage.ets(111:19)");
                    // $r("app.media.arrow_right_filled")
                    Image.width(50);
                    // $r("app.media.arrow_right_filled")
                    Image.height(50);
                    if (!isInitialRender) {
                        // $r("app.media.arrow_right_filled")
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Flex.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create({ "id": 16777238, "type": 20000, params: [], "bundleName": "com.example.wechatdemo", "moduleName": "entry" });
                    Image.debugLine("pages/Contact/PersonalPage.ets(120:17)");
                    Image.width(20);
                    Image.height(20);
                    if (!isInitialRender) {
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
                    Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.SpaceBetween, alignItems: ItemAlign.Center });
                    Flex.debugLine("pages/Contact/PersonalPage.ets(103:15)");
                    Flex.height(70);
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Flex.create({ direction: FlexDirection.Row, alignItems: ItemAlign.Center });
                    Flex.debugLine("pages/Contact/PersonalPage.ets(105:17)");
                    Flex.height(70);
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create('朋友圈');
                    Text.debugLine("pages/Contact/PersonalPage.ets(106:19)");
                    Text.fontSize(18);
                    Text.width(100);
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    // $r("app.media.arrow_right_filled")
                    Image.create('/images/icon1.png');
                    Image.debugLine("pages/Contact/PersonalPage.ets(111:19)");
                    // $r("app.media.arrow_right_filled")
                    Image.width(50);
                    // $r("app.media.arrow_right_filled")
                    Image.height(50);
                    if (!isInitialRender) {
                        // $r("app.media.arrow_right_filled")
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Flex.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create({ "id": 16777238, "type": 20000, params: [], "bundleName": "com.example.wechatdemo", "moduleName": "entry" });
                    Image.debugLine("pages/Contact/PersonalPage.ets(120:17)");
                    Image.width(20);
                    Image.height(20);
                    if (!isInitialRender) {
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
                ListItem.debugLine("pages/Contact/PersonalPage.ets(127:13)");
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
                    Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.SpaceBetween, alignItems: ItemAlign.Center });
                    Flex.debugLine("pages/Contact/PersonalPage.ets(128:15)");
                    Flex.height(45);
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create('更多信息');
                    Text.debugLine("pages/Contact/PersonalPage.ets(129:17)");
                    Text.fontSize(18);
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    // $r("app.media.arrow_right_filled")
                    Image.create({ "id": 16777238, "type": 20000, params: [], "bundleName": "com.example.wechatdemo", "moduleName": "entry" });
                    Image.debugLine("pages/Contact/PersonalPage.ets(133:17)");
                    // $r("app.media.arrow_right_filled")
                    Image.width(20);
                    // $r("app.media.arrow_right_filled")
                    Image.height(20);
                    if (!isInitialRender) {
                        // $r("app.media.arrow_right_filled")
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
                    Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.SpaceBetween, alignItems: ItemAlign.Center });
                    Flex.debugLine("pages/Contact/PersonalPage.ets(128:15)");
                    Flex.height(45);
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create('更多信息');
                    Text.debugLine("pages/Contact/PersonalPage.ets(129:17)");
                    Text.fontSize(18);
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    // $r("app.media.arrow_right_filled")
                    Image.create({ "id": 16777238, "type": 20000, params: [], "bundleName": "com.example.wechatdemo", "moduleName": "entry" });
                    Image.debugLine("pages/Contact/PersonalPage.ets(133:17)");
                    // $r("app.media.arrow_right_filled")
                    Image.width(20);
                    // $r("app.media.arrow_right_filled")
                    Image.height(20);
                    if (!isInitialRender) {
                        // $r("app.media.arrow_right_filled")
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
        ListItemGroup.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ListItemGroup.create();
            ListItemGroup.debugLine("pages/Contact/PersonalPage.ets(146:11)");
            ListItemGroup.divider({ strokeWidth: 1, color: 'rgb(247,247,247)', startMargin: 0, endMargin: 0 });
            if (!isInitialRender) {
                ListItemGroup.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            const isLazyCreate = true;
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                ListItem.create(deepRenderFunction, isLazyCreate);
                ListItem.backgroundColor(Color.White);
                ListItem.debugLine("pages/Contact/PersonalPage.ets(147:13)");
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
                    Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center });
                    Flex.debugLine("pages/Contact/PersonalPage.ets(148:15)");
                    Flex.height(50);
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create({ "id": 16777235, "type": 20000, params: [], "bundleName": "com.example.wechatdemo", "moduleName": "entry" });
                    Image.debugLine("pages/Contact/PersonalPage.ets(149:17)");
                    Image.width(25);
                    Image.height(25);
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create('发消息');
                    Text.debugLine("pages/Contact/PersonalPage.ets(153:17)");
                    Text.fontSize(19);
                    Text.fontWeight(700);
                    Text.fontColor('rgb(87,107,148)');
                    Text.margin({ left: 5 });
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
                    Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center });
                    Flex.debugLine("pages/Contact/PersonalPage.ets(148:15)");
                    Flex.height(50);
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create({ "id": 16777235, "type": 20000, params: [], "bundleName": "com.example.wechatdemo", "moduleName": "entry" });
                    Image.debugLine("pages/Contact/PersonalPage.ets(149:17)");
                    Image.width(25);
                    Image.height(25);
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create('发消息');
                    Text.debugLine("pages/Contact/PersonalPage.ets(153:17)");
                    Text.fontSize(19);
                    Text.fontWeight(700);
                    Text.fontColor('rgb(87,107,148)');
                    Text.margin({ left: 5 });
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
                ListItem.backgroundColor(Color.White);
                ListItem.debugLine("pages/Contact/PersonalPage.ets(163:13)");
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
                    Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center });
                    Flex.debugLine("pages/Contact/PersonalPage.ets(164:15)");
                    Flex.height(50);
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create({ "id": 16777227, "type": 20000, params: [], "bundleName": "com.example.wechatdemo", "moduleName": "entry" });
                    Image.debugLine("pages/Contact/PersonalPage.ets(165:17)");
                    Image.width(25);
                    Image.height(25);
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create('音视频童话');
                    Text.debugLine("pages/Contact/PersonalPage.ets(169:17)");
                    Text.fontSize(19);
                    Text.fontWeight(700);
                    Text.fontColor('rgb(87,107,148)');
                    Text.margin({ left: 5 });
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
                    Flex.create({ direction: FlexDirection.Row, justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center });
                    Flex.debugLine("pages/Contact/PersonalPage.ets(164:15)");
                    Flex.height(50);
                    if (!isInitialRender) {
                        Flex.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create({ "id": 16777227, "type": 20000, params: [], "bundleName": "com.example.wechatdemo", "moduleName": "entry" });
                    Image.debugLine("pages/Contact/PersonalPage.ets(165:17)");
                    Image.width(25);
                    Image.height(25);
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create('音视频童话');
                    Text.debugLine("pages/Contact/PersonalPage.ets(169:17)");
                    Text.fontSize(19);
                    Text.fontWeight(700);
                    Text.fontColor('rgb(87,107,148)');
                    Text.margin({ left: 5 });
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
        ListItemGroup.pop();
        List.pop();
        Navigation.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new PersonalPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=PersonalPage.js.map