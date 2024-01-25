/**
 * EnemyBullet2
 *
 * 	敵の弾丸 タイプ2
 *  (x,y)から発射し、毎フレームdx,dy分移動する
 **/

class EnemyBullet2 extends EnemyBullet{
    constructor(x,y,dx,dy){
        super(x,y,0,0);
        this.dx=dx;
        this.dy=dy;
    }

    onenterframe(){
		super.onenterframe();

        //ここに弾丸の座標を変化させる処理を書く
        this.x+=this.dx
        this.y+=this.dy
	}

}

