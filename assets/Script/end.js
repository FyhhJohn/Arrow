

cc.Class({
    extends: cc.Component,

    properties: {

    },

    restartOnclicked: function(){
        cc.director.loadScene("main");
        cc.director.resume();
    }
});
