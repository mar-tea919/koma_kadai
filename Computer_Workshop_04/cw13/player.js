/**
 *  player.js
 * 
 * 	Playerクラス（自機）
 */

class Player extends enchant.Sprite{
    constructor(){
		super(40,40);
		this.image=game.assets['images/mychara0.png'];
		this.x=300;
		this.y=700;
		this.scaleX=1.5;
	    this.scaleY=1.5;
	    this.speed=16;

		this.hitpoint=3;		//ヒットポイント
		this.maxBullets=10;		//最大発射弾丸数
	    this.firedBullets=0;	//発射済の弾丸数
	}

	onenterframe(){
		//4方向移動の処理
		if (game.input.right && this.x<game.width-this.width){
			this.x+=this.speed;
		}
		if (game.input.left && this.x>0){
			this.x-=this.speed;
	    }
    	if (game.input.up && this.y>300){
    		this.y-=this.speed;
    	}
	    if (game.input.down && this.y<game.height-32){
	    	this.y+=this.speed;
	    }
			
		//Aボタンが押された場合
	    if (game.input.a){
	    	//ここに自機の弾の発射処理を書く
			if(this.firedBullets<this.maxBullets){
				let newPlayerBullet=new PlayerBullet(this.x, this.y-16, -32)
				game.rootScene.addChild(newPlayerBullet)
				this.firedBullets++
			}
    	}
    }

	hitByEnemyBullet(damage){
		this.hitpoint-=damage;
		if (this.hitpoint<=0){
			game.rootScene.addChild(new Explosion(this.x,this.y));
			game.rootScene.removeChild(this);
			game.replaceScene(gameoverScene);
			game.stop();
		}
	}
	
	decBullets(){
		if (this.firedBullets>0){
			this.firedBullets--;
		}
	}
}

