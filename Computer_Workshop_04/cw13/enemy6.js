/**
 * Enemy6クラス
 * ランダムに決めた高さまで下がって停止する岩
 *
**/

class Enemy6 extends Enemy{
    constructor(x,y){
        super(64,64,x,y);
       	this.image=game.assets['images/space1.png'];
		this.hitpoint=20;
	    this.frame=0;
	    this.x=x;
	    this.y=y;
		this.maxY=400+Math.random()*100;  
    }

	onenterframe(){
		super.onenterframe();	//親クラスの内容を呼び出す

		//ここに独自の移動処理を記述する
		if(this.y<this.maxY){
			this.y+=4
		}

	}
}
