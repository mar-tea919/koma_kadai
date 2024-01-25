/**
 * EnemyBullet1
 *
 * 	敵の弾丸 タイプ5
 *  
 **/

class EnemyBullet5 extends EnemyBullet{

	constructor(x,y,yspeed){
		super(x,y,0,yspeed);
	}
	
    onenterframe(){
        super.onenterframe();    //スーパークラス（Bullet）のonenterframe()を実行する
	}
}

 