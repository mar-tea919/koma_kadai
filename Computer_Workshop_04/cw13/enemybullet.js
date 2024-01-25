/**
 * EnemyBullet
 *
 * 	敵の弾丸の共通処理
 **/

class EnemyBullet extends Bullet{

    constructor(x,y,xspeed,yspeed){
        super(17,17,xspeed,yspeed);
	    this.image=game.assets['images/enemyshot.png'];
	    this.x=x;
        this.y=y;

        this.hitpoint=1;    //ヒットポイント
        this.damage=1;      //自機に与えるダメージ
    }

    onenterframe(){
        super.onenterframe();    //スーパークラス（Bullet）のonenterframe()を実行する
        if (this.within(player,25)){    //当たり判定の対象は自機
            player.hitByEnemyBullet(this.damage);
            this.hitpoint--;
            if (this.hitpoint<=0){
                game.rootScene.removeChild(this);
            }
        }
    }

}
