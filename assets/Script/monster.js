

cc.Class({
    extends: cc.Component,

    properties: {
        HP_total: 100,
        HP_cur: 100,
        hurmHP: 20,
        HPProgress: cc.ProgressBar,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.runAction(cc.moveBy(3,cc.v2(-900,0)));
    },

    onBeginContact:function(contact,selfCollider,otherCollider){
        if (otherCollider.node.group == "arrow"){
            this.HP_cur -= 10;
            this.HPProgress.progress = (this.HP_cur/this.HP_total);
            if ( this.HP_cur <= 0 ){
                selfCollider.node.destroy();
            }
        }else if(otherCollider.node.group == "tower"){
            cc.log("攻击塔");
            otherCollider.getComponent("tower").setTowerHP(this.hurmHP);
            selfCollider.getComponent(cc.Animation).stop();
        }
    },

    start () {

    },

    // update (dt) {},
});
