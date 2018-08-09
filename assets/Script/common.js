

cc.Class({
    extends: cc.Component,

    properties: {
        arrowPre: cc.Prefab,
        hero: cc.Node,
        heroUp: cc.Node,
        heroArrow: cc.Node,
        arrow: cc.Sprite,
        back: cc.Sprite,
        towerLab: cc.Label,
        end: cc.Node,

        arrowList: {
            default: [],
            type: cc.Node,
        }
    },

    onLoad () {

    },

    shootArrow: function(force){
        var pos = (this.hero.position.add(this.heroUp.position)).add(this.arrow.node.position) ;
        var arrow = cc.instantiate(this.arrowPre);
        arrow.position = pos.sub(cc.v2(0,20));
        this.back.node.addChild(arrow);
        arrow.getComponent("arrow").shoot(force);
        arrow.setRotation(this.getAngle(force));
    },

    getAngle: function(delta){
        var angle = -Math.atan2(delta.y,delta.x) / Math.PI * 180 ;
        return angle;
    },

    setTowerHP: function(towerHP){
        if (towerHP <= 0){
            this.towerLab.string = "防御塔被摧毁";
            cc.director.pause();
            this.end.active = true;
        }else{
            this.towerLab.string = "当前血量:" + towerHP;
        }
    },

    start () {

    },

    // update (dt) {},
});
