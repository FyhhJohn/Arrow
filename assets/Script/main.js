

cc.Class({
    extends: cc.Component,

    properties: {
        back: cc.Sprite,
        heroPos: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getPhysicsManager().enabled = true;
    },

    start () {

    },

    // update (dt) {},
});
