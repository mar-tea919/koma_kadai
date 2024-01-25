/**
 * Enemy5クラス
 * 5方向に飛ぶ弾を撃つ敵
 *
**/

class Enemy5 extends Enemy{
    constructor(x,y){
        super(32,32,x,y);
       	this.image=game.assets['images/space2.png'];
	    this.frame=0;
	    this.x=x;
	    this.y=y;
    }

	onenterframe(){
		super.onenterframe();	//親クラスの内容を呼び出す

		//ここに独自の移動処理を記述する
		this.y+=8
		if(this.age%40==10){
			let neb1=new EnemyBullet2(this.x, this.y+16, -16,16)
			game.rootScene.addChild(neb1)
			let neb2=new EnemyBullet2(this.x, this.y+16, -8,16)
			game.rootScene.addChild(neb2)
			let neb3=new EnemyBullet2(this.x, this.y+16, 0,16)
			game.rootScene.addChild(neb3)
			let neb4=new EnemyBullet2(this.x, this.y+16, 8,16)
			game.rootScene.addChild(neb4)
			let neb5=new EnemyBullet2(this.x, this.y+16, 16,16)
			game.rootScene.addChild(neb5)
		}

	}
}
