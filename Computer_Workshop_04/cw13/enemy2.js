/**
 * Enemy2クラス
 * 2%の確率で撃ってくる敵
**/

class Enemy2 extends Enemy{

    constructor(x,y){
        super(32,32,x,y);
	    this.image=game.assets['images/space2.png'];
	    this.frame=0;
	    this.x=x;
		this.y=y;
		this.hitpoint=1;     
    }

	onenterframe(){
		super.onenterframe();	//親クラスの内容を呼び出す
		//ここに独自の移動処理を記述する
		if(Math.random()<=0.04){
			let neb=new EnemyBullet1(this.x,this.y+16,24)
			game.rootScene.addChild(neb)
		}

	}
}
