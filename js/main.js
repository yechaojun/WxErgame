var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var BaseUI = (function (_super) {
    __extends(BaseUI, _super);
    function BaseUI(skinName) {
        var _this = _super.call(this) || this;
        _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.onComponentCreated, _this);
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.onComplete, _this);
        _this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, _this.onAddToStage, _this);
        _this.addEventListener(eui.UIEvent.REMOVED_FROM_STAGE, _this.OnRemoveFromStage, _this);
        if (skinName)
            _this.skinName = skinName;
        return _this;
    }
    BaseUI.prototype.onComponentCreated = function () {
        this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this.onComponentCreated, this);
    };
    BaseUI.prototype.onComplete = function () {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.onComplete, this);
    };
    BaseUI.prototype.onAddToStage = function () {
    };
    BaseUI.prototype.OnRemoveFromStage = function () {
    };
    return BaseUI;
}(eui.Component));
__reflect(BaseUI.prototype, "BaseUI");
var helloworld;
(function (helloworld) {
    function run() {
        return __awaiter(this, void 0, void 0, function () {
            var t;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, RES.loadConfig("default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.getResAsync("logo.png")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0)];
                    case 3:
                        _a.sent();
                        t = paper.Application.sceneManager.loadScene("Assets/Runpath.scene.json");
                        UIManager.getInstance().InitUISystem();
                        return [2 /*return*/];
                }
            });
        });
    }
    helloworld.run = run;
})(helloworld || (helloworld = {}));
var MainUI = (function (_super) {
    __extends(MainUI, _super);
    function MainUI() {
        return _super.call(this, "resource/2d/eui_skins/MainUi.exml") || this;
    }
    MainUI.prototype.onComplete = function () {
        _super.prototype.onComplete.call(this);
        this.imgstart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStart, this);
    };
    MainUI.prototype.onStart = function () {
        ObjectManager.getInstance().loadMainchar();
        ObjectManager.getInstance().loadAllObj();
        SceneManager.getInstance().CreateMainRoad();
        UIManager.getInstance().RemoveMainUI();
        UIManager.getInstance().ShowPlayUI();
    };
    return MainUI;
}(BaseUI));
__reflect(MainUI.prototype, "MainUI");
var ObjectManager = (function () {
    function ObjectManager() {
        this.objdata = [
            { "obj": "Assets/TreeStump.prefab.json", "x": 14, "y": 8, "z": -80, "line": 1, "pt": -1 },
            { "obj": "Assets/TreeStump.prefab.json", "x": 0, "y": 8, "z": -50, "line": 0, "pt": -1 },
            //  {"obj":"Assets/boss_ym_gjfl.prefab.json","x":-12,"y":5,"z":-150,"line":-1},
            { "obj": "Assets/Crystle.prefab.json", "x": -12, "y": -10, "z": -20, "line": -1, "pt": 10 },
        ];
        this.mapprefab = {};
        this.nowscore = 0;
        this.objlist = {};
    }
    ObjectManager.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ObjectManager();
        return this.instance;
    };
    ObjectManager.prototype.loadMainchar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var prefab, ani;
            return __generator(this, function (_a) {
                prefab = RES.getRes("Assets/Prisoner.prefab.json");
                this.person = prefab.createInstance();
                ani = this.person.getComponent(egret3d.Animation);
                ani.play("run");
                this.charcon = this.person.addComponent(CharControl);
                return [2 /*return*/];
            });
        });
    };
    ObjectManager.prototype.loadAllObj = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var t1, t2;
            return __generator(this, function (_a) {
                t1 = new Array();
                t2 = new Array();
                this.objdata.forEach(function (element) {
                    var prefab = _this.mapprefab[element.obj];
                    if (!prefab) {
                        //  RES.getRes(element.obj);
                        prefab = RES.getRes(element.obj);
                    }
                    var obstacle1 = prefab.createInstance();
                    var pos = obstacle1.transform.getPosition();
                    pos.x = element.x;
                    pos.z = element.z;
                    pos.y = element.y;
                    obstacle1.transform.setPosition(pos);
                    var moveobj = obstacle1.addComponent(MoveObj);
                    moveobj.setcurline(element.line);
                    moveobj.setdata(element);
                    t1.push(moveobj);
                    var obstacle2 = prefab.createInstance();
                    var pos = obstacle2.transform.getPosition();
                    pos.x = element.x;
                    pos.z = element.z - 200;
                    pos.y = element.y;
                    obstacle2.transform.setPosition(pos);
                    var moveobj2 = obstacle2.addComponent(MoveObj);
                    moveobj2.setcurline(element.line);
                    moveobj2.setdata(element);
                    //  moveobj2.gameObject.activeSelf = false;
                    t2.push(moveobj2);
                });
                this.objlist[1] = t1;
                this.objlist[2] = t2;
                return [2 /*return*/];
            });
        });
    };
    ObjectManager.prototype.ResetMoveobj = function (zparent, id) {
        var list = this.objlist[id];
        list.forEach(function (obj) {
            obj.Reset(zparent);
        });
    };
    ObjectManager.instance = null;
    return ObjectManager;
}());
__reflect(ObjectManager.prototype, "ObjectManager");
var MoveObj = (function (_super) {
    __extends(MoveObj, _super);
    function MoveObj() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timer = 0;
        _this.curline = 0;
        _this.bactive = true;
        return _this;
    }
    MoveObj.prototype.onUpdate = function (deltaTime) {
        var pos = this.gameObject.transform.getPosition();
        pos.z += 30 * deltaTime;
       console.log("add z........." + 30*deltaTime);
        //    if(pos.z >= 200)
        {
            //    pos.z = -200;
            //      this.gameObject.hideFlags = 2;
            //          this.bactive = true;
            //         this.gameObject.activeSelf = true
        }
        this.gameObject.transform.setPosition(pos);
        this.checkcol(ObjectManager.getInstance().charcon);
    };
    MoveObj.prototype.Reset = function (zparent) {
        var pos = this.transform.getPosition();
        pos.x = this.objdata.x;
        pos.z = this.objdata.z + zparent;
        pos.y = this.objdata.y;
        this.transform.setPosition(pos);
        this.bactive = true;
        this.gameObject.activeSelf = true;
    };
    MoveObj.prototype.setcurline = function (line) {
        this.curline = line;
    };
    MoveObj.prototype.setdata = function (data) {
        this.objdata = data;
    };
    MoveObj.prototype.checkcol = function (mainchr) {
        if (!this.bactive)
            return;
        if (this.curline == mainchr.curline) {
            var z1 = this.gameObject.transform.position.z;
            var z2 = mainchr.gameObject.transform.position.z;
            //   console.log("z1.........." + z1);
            // console.log("z2.........." + z2);
            //        console.log("dis.........." + Math.abs(z1-z2));
            if (Math.abs(z1 - z2) < 5.0) {
                //  console.log("Col is on..........");
                this.gameObject.activeSelf = false;
                this.bactive = false;
                if (this.objdata.pt > 0) {
                    ObjectManager.getInstance().nowscore += this.objdata.pt;
                    UIManager.getInstance().UpdateScore(ObjectManager.getInstance().nowscore);
                    //   this.gameObject.renderer.material.opacity = 0;
                    //   var count = this.gameObject.renderer.materials.length
                    //   var aa = this.gameObject.renderer.material.getColor();
                    // this.gameObject.renderer.material.setColor(aa);
                    // this.gameObject.hideFlags = 2;
                    // this.gameObject.renderer.enabled = false;
                    //  this.gameObject.destroy()
                }
            }
        }
    };
    return MoveObj;
}(paper.Behaviour));
__reflect(MoveObj.prototype, "MoveObj");
var movepos = 11.8;
var CharControl = (function (_super) {
    __extends(CharControl, _super);
    function CharControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.curline = 2;
        _this.isMoving = false;
        _this.destpos = 0;
        _this.destline = 0;
        return _this;
    }
    CharControl.prototype.onStart = function () {
        this.curline = 0;
    };
    CharControl.prototype.onUpdate = function (deltaTime) {
        if (this.isMoving) {
            var pos = this.gameObject.transform.getPosition();
            if (pos.x < this.destpos) {
                pos.x += deltaTime * 20;
                if (pos.x >= this.destpos) {
                    pos.x = this.destpos;
                    this.isMoving = false;
                    this.curline = this.destline;
                }
            }
            if (pos.x > this.destpos) {
                pos.x -= deltaTime * 20;
                if (pos.x <= this.destpos) {
                    pos.x = this.destpos;
                    this.isMoving = false;
                    this.curline = this.destline;
                }
            }
            this.gameObject.transform.setPosition(pos);
        }
    };
    CharControl.prototype.Movexdir = function (dir) {
        if (this.curline == -1 && dir == -1) {
            return;
        }
        if (this.curline == 1 && dir == 1) {
            return;
        }
        this.destline = this.curline + dir;
        if (this.destline < -1) {
            this.destline = -1;
            return;
        }
        if (this.destline > 1) {
            this.destline = 1;
            return;
        }
        if (dir > 0) {
            var anilist = ["left", "run"];
            var ani = this.gameObject.getComponent(egret3d.Animation);
            ani.play(anilist);
        }
        else {
            var anilist = ["right", "run"];
            var ani = this.gameObject.getComponent(egret3d.Animation);
            ani.play(anilist);
        }
        this.destpos = this.destline * movepos;
        this.isMoving = true;
    };
    return CharControl;
}(paper.Behaviour));
__reflect(CharControl.prototype, "CharControl");
var PlayUI = (function (_super) {
    __extends(PlayUI, _super);
    function PlayUI() {
        var _this = _super.call(this, "resource/2d/eui_skins/RunPlay.exml") || this;
        _this.score = 0;
        return _this;
    }
    PlayUI.prototype.onComplete = function () {
        _super.prototype.onComplete.call(this);
        //  this.imgstart.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onStart,this);
    };
    PlayUI.prototype.SetScore = function (sc) {
        this.score = sc;
        this.lab_score.text = this.score.toString();
    };
    return PlayUI;
}(BaseUI));
__reflect(PlayUI.prototype, "PlayUI");
var SceneManager = (function () {
    function SceneManager() {
    }
    SceneManager.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new SceneManager();
        return this.instance;
    };
    SceneManager.prototype.CreateMainRoad = function () {
        //   await RES.getResAsync("Assets/Plane.prefab.json");
        var preabplane = RES.getRes("Assets/Plane.prefab.json");
        this.plane = preabplane.createInstance();
        this.plane.addComponent(MovePlane);
        this.plane2 = preabplane.createInstance();
        var pos = this.plane2.transform.getPosition();
        pos.z -= 200;
        this.plane2.transform.setPosition(pos);
        var pl = this.plane2.addComponent(MovePlane);
        pl.setplaneid(2);
    };
    SceneManager.instance = null;
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
var MovePlane = (function (_super) {
    __extends(MovePlane, _super);
    function MovePlane() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timer = 0;
        _this._planeid = 1;
        return _this;
    }
    MovePlane.prototype.setplaneid = function (id) {
        this._planeid = id;
    };
    MovePlane.prototype.onUpdate = function (deltaTime) {
        var pos = this.gameObject.transform.getPosition();
        pos.z += 30 * deltaTime;
        if (pos.z >= 200) {
            var zdest = 0;
            if (this._planeid == 1)
                zdest = SceneManager.getInstance().plane2.transform.getPosition().z - 199.5;
            else
                zdest = SceneManager.getInstance().plane.transform.getPosition().z - 199.5;
            pos.z = zdest;
            ObjectManager.getInstance().ResetMoveobj(pos.z, this._planeid);
        }
        this.gameObject.transform.setPosition(pos);
    };
    return MovePlane;
}(paper.Behaviour));
__reflect(MovePlane.prototype, "MovePlane");
// TypeScript file
var UIManager = (function () {
    function UIManager() {
        this.UIRoot = null;
        this.mainUI = null;
        this.playUI = null;
    }
    UIManager.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new UIManager();
        return this.instance;
    };
    UIManager.prototype.InitUISystem = function () {
        var gameobj = paper.GameObject.create();
        gameobj.name = "GameUI";
        gameobj.addComponent(egret3d.Egret2DRenderer);
        this.UIRoot = gameobj.addComponent(GameUIScript);
    };
    UIManager.prototype.ShowMainUI = function () {
        if (this.mainUI == null) {
            this.mainUI = new MainUI();
            this.UIRoot.addUI(this.mainUI);
        }
        else {
            this.mainUI.visible = true;
        }
    };
    UIManager.prototype.ShowPlayUI = function () {
        if (this.playUI == null) {
            this.playUI = new PlayUI();
            this.UIRoot.addUI(this.playUI);
        }
        else {
            this.playUI.visible = true;
        }
        this.playUI.SetScore(0);
    };
    UIManager.prototype.UpdateScore = function (score) {
        this.playUI.SetScore(score);
    };
    UIManager.prototype.RemoveMainUI = function () {
        this.mainUI.visible = false;
    };
    UIManager.prototype.RemovePlayUI = function () {
        this.playUI.visible = false;
    };
    UIManager.instance = null;
    return UIManager;
}());
__reflect(UIManager.prototype, "UIManager");
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        var _this = this;
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else if (typeof generateEUI2 !== 'undefined') {
            RES.getResByUrl("resource/gameEui.json", function (data, url) {
                window["JSONParseClass"]["setData"](data);
                onResGet(data);
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI2);
                }, _this);
            }, this, RES.ResourceItem.TYPE_JSON);
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        var data = RES.getRes(source);
        if (data) {
            onGetRes(data);
        }
        else {
            RES.getResAsync(source, onGetRes, this);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
var GameUIScript = (function (_super) {
    __extends(GameUIScript, _super);
    function GameUIScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ptbegin = new egret.Point(0, 0);
        return _this;
    }
    GameUIScript.prototype.addUI = function (ui) {
        if (this.uiLayer)
            this.uiLayer.addChild(ui);
    };
    GameUIScript.prototype.onStart = function () {
        var renderer = this.gameObject.getComponent(egret3d.Egret2DRenderer);
        var adapter = new egret3d.MatchWidthOrHeightAdapter();
        adapter.setResolution(egret3d.stage.screenViewport.w, egret3d.stage.screenViewport.h);
        renderer.screenAdapter = adapter;
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        var theme = new eui.Theme("resource/2d/default.thm.json", renderer.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, onThemeLoadComplete, this);
        function onThemeLoadComplete() {
            this.uiLayer = new eui.UILayer();
            this.uiLayer.touchEnabled = true;
            renderer.root.addChild(this.uiLayer);
            UIManager.getInstance().ShowMainUI();
            this.uiLayer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, ontouchstart, this);
            this.uiLayer.addEventListener(egret.TouchEvent.TOUCH_MOVE, ontouchmove, this);
            function ontouchstart(e) {
                var tt = e;
                this.ptbegin.x = tt.localX;
                this.ptbegin.y = tt.localX;
            }
            function ontouchmove(e) {
                var tt = e;
                var xdis = tt.localX - this.ptbegin.x;
                if (xdis > 200.0)
                    ObjectManager.getInstance().person.getComponent(CharControl).Movexdir(-1);
                if (xdis < -200.0)
                    ObjectManager.getInstance().person.getComponent(CharControl).Movexdir(1);
            }
            //   var mainui = new MainUI();
            // uiLayer.addChild(mainui)
            /*    let button = new eui.Button();
                button.label = "left";
               // button.horizontalCenter = 0;
            //    button.verticalCenter = 0;
                button.x = 100;
                button.y = egret3d.stage.screenViewport.h -100;
                button.width = 80;
                button.height = 40;

                uiLayer.addChild(button);

                button.addEventListener(egret.TouchEvent.TOUCH_TAP, onButtonClick, this);


                 let button2 = new eui.Button();
                button2.label = "right";
               // button.horizontalCenter = 0;
            //    button.verticalCenter = 0;
                button2.x = egret3d.stage.screenViewport.w -100;
                button2.y = egret3d.stage.screenViewport.h -100;
                button2.width = 80;
                button2.height = 40;

                uiLayer.addChild(button2);

                button2.addEventListener(egret.TouchEvent.TOUCH_TAP, onButtonClick2, this);

                function onButtonClick(e: egret.TouchEvent) {
                   // showPannel("Button Click!");
                           //  var pos:egret3d.Vector3 = person.transform.getPosition();
                            ObjectManager.getInstance().person.getComponent(CharControl).Movexdir(1)

        }

                 function onButtonClick2(e: egret.TouchEvent) {

                      ObjectManager.getInstance().person.getComponent(CharControl).Movexdir(-1)
    
                }






                function showPannel(title: string) {
                    let panel = new eui.Panel();
                    panel.title = title;
                    panel.horizontalCenter = 0;
                    panel.verticalCenter = 0;
                    uiLayer.addChild(panel);
                }*/
        }
    };
    return GameUIScript;
}(paper.Behaviour));
__reflect(GameUIScript.prototype, "GameUIScript");
;window.helloworld = helloworld;