

cc.Class({
    extends: cc.Component,

    properties: {
        arrowPre: cc.Prefab,
        hero: cc.Node,
        heroUp: cc.Node,
        heroArrow: cc.Node,
        arrow: cc.Sprite,
        back: cc.Sprite,
    },

    onLoad () {

    },

    shootArrow: function(force){
        cc.log("ShootArrow");
        cc.log(this.hero.position);
        var pos = (this.hero.position.add( this.heroUp.position )).add( this.heroArrow.position );
        cc.log(pos);
        var arrow = cc.instantiate(this.arrowPre);
        arrow.position = pos;
        this.back.node.addChild(arrow);
        arrow.getComponent("arrow").shoot(force);

    },

    getAngle: function(delta){
        var angle = -Math.atan2(delta.y,delta.x) / Math.PI * 180 ;

        return angle;
    },

    start () {

    },

    // update (dt) {},
});
