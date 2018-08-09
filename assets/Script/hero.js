

cc.Class({
    extends: cc.Component,

    properties: {
        heroUp: cc.Sprite,
        heroDown: cc.Sprite,
        arch: cc.Sprite,
        arrow: cc.Sprite,

        arrowFrame: {
            default: [],
            type: cc.SpriteFrame,
        },

        common: require("common"),

        _arrowIndex: 0,
        _arrowAngle: 0,
        _oneVector: cc.v2(0,0),
        _force: cc.v2(0,0),
    },

    onLoad () {
        this.addTouchListener();
    },

    addTouchListener: function(){
        this.node.parent.on("touchstart",this.onTouchStart,this);
        this.node.parent.on("touchmove",this.onTouchMove,this);
        this.node.parent.on("touchend",this.onTouchEnd,this);
    },

    onTouchStart: function(event){
        this.beginPos = event.getLocation();
        this.arrow.node.active = true;
    },

    onTouchMove: function(event){
        var endPos = event.getLocation();
        var delta = this.beginPos.sub(endPos);

        this._oneVector = delta.normalize();

        //向量的角度计算，Math.atan2是获得弧度值，角度 = 弧度/PI*180
        var angle = this.common.getComponent("common").getAngle(delta) ;


        if ( angle < 45 && angle > -45 ){
            this.heroUp.node.setRotation(angle);
        }

        var endPos = event.getLocation();
        var dis = this.beginPos.sub( endPos ).mag();
        this.updateArrowState(dis);
    },

    onTouchEnd: function(event){
        var arrowClip = this.arch.getComponent(cc.Animation);
        arrowClip.play();

        this.arrow.node.active = false;

        this.common.getComponent("common").shootArrow(this._force);
    },

    updateArrowState: function( dis ){
        if ( dis < 50 ){
            this.arch.spriteFrame = this.arrowFrame[0];
            this.arrow.node.position = cc.v2(110,50);
        }else if( dis < 80 ){
            this.arch.spriteFrame = this.arrowFrame[1];
            this.arrow.node.position = cc.v2(95,50);
        }else if( dis < 110 ){
            this.arch.spriteFrame = this.arrowFrame[2];
            this.arrow.node.position = cc.v2(80,50);
        }else if( dis < 130 ){
            this.arch.spriteFrame = this.arrowFrame[3];
            this.arrow.node.position = cc.v2(65,50);
        }else{
            this.arch.spriteFrame = this.arrowFrame[4];
            this.arrow.node.position = cc.v2(50,50);
        }
        this._force = this._oneVector.mulSelf(dis*5);
    },

    start () {

    },

    // update (dt) {},
});
