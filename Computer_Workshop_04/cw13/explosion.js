/**
*   explosion.js
*   爆発スプライトのクラス
**/

class Explosion extends enchant.Sprite{
    constructor(x,y){
        super(16,16);
        this.image=game.assets["images/effect0.png"];
        this.x=x;
        this.y=y;
        this.scaleX=2;
        this.scaleY=2;
        
        this.onenterframe=function(){
            //1フレームごとにキャラチップを変化させ、
            //5になったら自身を消去して消滅する
            this.frame++;
            if (this.frame==5){
                this.parentNode.removeChild(this);
            }
        };
        game.rootScene.addChild(this);
    }
}

