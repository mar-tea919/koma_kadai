/**
 * Enemy4クラス
 * 自機を追跡する敵
 *
**/

class Enemy4 extends Enemy{
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
		this.y+=16
		if(this.x>player.x){
			this.x-=8
		}
		if(this.x<player.x){
			this.x+=8
		}

	}
}
