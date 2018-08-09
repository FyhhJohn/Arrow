

cc.Class({
    extends: cc.Component,

    properties: {
        lastPos: null,
    },

    onLoad () {
    },

    shoot: function(force){
        this.getComponent(cc.RigidBody).awake = true;
        this.getComponent(cc.RigidBody).linearVelocity = force;

        this.lastPos = this.node.position;
    },

    onBeginContact:function(contact,selfCollider,otherCollider){
        // cc.director.loadScene('hello');
        selfCollider.node.destroy();
    },

    update (dt) {
        if (this.node.position.x > cc.visibleRect.width || this.node.position.y < 173){
            this.node.destroy();
        }else if (this.lastPos){
            var delta = this.node.position.sub(this.lastPos);
            var angle = -Math.atan2(delta.y,delta.x) / Math.PI * 180 ;
            this.node.setRotation(angle);

            this.lastPos = this.node.position;
        }
    },
});
