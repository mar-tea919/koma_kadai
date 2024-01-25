/**
 * PlayerBullet
 *  
 * 	自機が発射する弾丸のクラス
 **/

class PlayerBullet extends Bullet {

  constructor(x, y, speed) {
    super(17, 17, 0, speed);
    this.image = game.assets['images/myshot.png'];
    this.x = x;
    this.y = y;

    this.damage = 1;    //敵に与えるダメージ
    this.hitpoint = 1;  //ヒットポイント
  }

  //このインスタンスがremoveSceneされたときの処理
  onremovedfromscene() {
    player.decBullets(); //実機の発射済弾数を減らす
  }

  //フレームごとの処理
  onenterframe() {
    super.onenterframe();  //Bulletクラスのonenterframe()を実行する

    let enemys = game.rootScene.getEnemys();  //シーンに存在している敵の配列
    for (let i = 0; i < enemys.length; i++) {
      if (this.within(enemys[i], 25)) {
        enemys[i].hitByPlayerBullet(this.damage);  //敵にダメージを送る
        this.hitpoint--;
        if (this.hitpoint <= 0) {
          //この次の行に爆発処理を追加
          game.rootScene.addChild(new Explosion(this.x,this.y))
          game.rootScene.removeChild(this)

          return;
        }
      }
    }
  }
}
