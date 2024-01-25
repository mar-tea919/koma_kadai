/**
 * EnemyBullet1
 *
 * 	敵の弾丸 タイプ1
 *  (x,y)から発射し真下に移動する
 **/

class EnemyBullet1 extends EnemyBullet{

	constructor(x,y,yspeed){
		super(x,y,0,yspeed);
	}

	//Bulletクラスに決められた方向に移動し続ける機能があるため
	//ここではその機能を呼び出すだけでよい
	onentreframe(){
		super.onenterframe();
	}
	
}

 