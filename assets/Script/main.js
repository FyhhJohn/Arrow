

cc.Class({
    extends: cc.Component,

    properties: {
        back: cc.Sprite,
        monsterPre: cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getPhysicsManager().enabled = true;

        this.schedule( this.addMonster,5 );
    },

    addMonster: function(){
        var monster = cc.instantiate(this.monsterPre);
        this.back.node.addChild(monster);
    },

    start () {

    },

    // update (dt) {},
});
