/**
 * Enemy3クラス
 *  20フレーム（2秒）ごとに、左右の方向を変えながら斜めに下がってくる敵
 *      this.dxに、速度を準備（定数または乱数で2-10）
 *      20の倍数フレームで、-1を掛けて逆転させる
 *
**/

class Enemy3 extends Enemy{
	constructor(x,y){
		super(32,32,x,y);
		this.image=game.assets['images/space2.png'];
		this.frame=0;
		this.x=x;
		this.y=y;
		//乱数を使って横移動速度を作成し記憶しておく
		this.dx=Math.floor(Math.random()*12+2);
	}

	onenterframe(){
		super.onenterframe();	//親クラスの内容を呼び出す

		//ここに独自の移動処理を記述する
		this.x+=this.dx
		this.y+=16
		if(this.age%20==0){
			this.dx*=-1
		}

	}
}
