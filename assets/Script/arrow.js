

cc.Class({
    extends: cc.Component,

    properties: {
        lastPos: null,
    },

    onLoad () {
    },

    shoot: function(force){
        cc.log("shoot");

        this.getComponent(cc.RigidBody).awake = true;
        this.getComponent(cc.RigidBody).linearVelocity = force;

        this.lastPos = this.node.position;
    },

    onCollisionEnter: function (other, self) {
        cc.log("onCollisionEnter");
    },

    update: function(dt){
        if (this.node.position.y < 0 || this.node.position.x > cc.visibleRect.width){
            this.node.destroy();
            cc.log("destroy");
        }else{

            if (this.lastPos){
                var delta = this.node.position.sub(this.lastPos);
                var angle = -Math.atan2(delta.y,delta.x) / Math.PI * 180 ;
                this.node.setRotation(angle);
    
                this.lastPos = this.node.position;
            }
        }
    },

    start () {

    },

    // update (dt) {},
});
