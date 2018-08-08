

cc.Class({
    extends: cc.Component,

    properties: {
        towerHP: 100,
        common: require("common"),
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.getComponent(cc.RigidBody).awake = true;
        this.common.getComponent("common").setTowerHP(this.towerHP);
    },

    setTowerHP: function(hurtHP){
        this.towerHP -= hurtHP;
        this.common.getComponent("common").setTowerHP(this.towerHP);
    },

    start () {

    },

    // update (dt) {},
});
