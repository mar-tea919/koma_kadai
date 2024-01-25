/**
 * EnemyBullet3
 *
 *  敵の弾丸 タイプ3
 *  (x,y)から発射し、自機を追跡する
 **/

class EnemyBullet3 extends EnemyBullet{
    constructor(x,y,dx,dy){
        super(x,y,0,dy);
    }

    onentreframe(){
        super.onenterframe();
        //ここに弾丸の座標を変化させる処理を書く
        if(player.x>this.x){
            this.x+=4
        }
        if(player.x<this.x){
            this.x-=4
        }
    }
}
