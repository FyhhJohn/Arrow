var MonsterState = cc.Enum({
    Monster_Run: 0,
    Monster_Attack: 1,
});

cc.Class({
    extends: cc.Component,

    properties: {
        HP_total: 100,
        HP_cur: 100,
        hurmHP: 20,
        HPProgress: cc.ProgressBar,
        moveSpeed: 100,
        monsterState: MonsterState.Monster_Run,
    },

    onLoad () {

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
            this.monsterState = MonsterState.Monster_Attack;
        }
    },

    start () {

    },

    update (dt) {
        if (this.monsterState == MonsterState.Monster_Run){
            var pos = this.moveSpeed*dt;
            this.node.setPosition( cc.v2( this.node.position.x - pos,this.node.position.y ) );
        }
    },
});
