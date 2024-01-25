/**
 *  Enemyクラス　
 **/

class Enemy extends enchant.Sprite{
	//コンストラクタの引数： 幅、高さ、x座標, y座標
	constructor(w,h,x,y){
		super(w,h);	//Spriteクラスのコンストラクタを呼び出す
		this.x=x;
		this.y=y;	
		
		this.damage=1;		//自機に当たったときのダメージ
		this.hitpoint=1;	//ヒットポイントの初期化
	}

	//Playerの弾丸に当たったときの処理
	hitByPlayerBullet(damage){
		this.hitpoint-=damage;
		if (this.hitpoint<=0){
			game.rootScene.addChild(new Explosion(this.x,this.y));
			game.rootScene.removeChild(this);
		}
	}

	onenterframe(){
		//画面の上下に抜けたらシーンから削除する
    	if (this.y>game.height || this.y<this.height*-1){
			game.rootScene.removeChild(this);
		}
		
		//自機と当たったらダメージを与えて爆発する
		if (this.within(player,30)){
			player.hitByEnemyBullet(this.damage);
			this.hitpoint--;
			if (this.hitpoint<=0){
				game.rootScene.addChild(new Explosion(this.x,this.y));
				game.rootScene.removeChild(this);
			}
		}
	}
}
