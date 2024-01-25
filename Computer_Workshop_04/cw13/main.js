/**
 * メインプログラム
**/
function main(){
    console.log("DEBUG: main() called.");   //起動メッセージをログに出力
    game.keybind(90,'a');                   //zキーをAボタンに設定
    
    //ゲームオーバー画面の準備
    gameoverScene=new Scene();
    let gos=new Sprite(189,97);
    gos.image=game.assets["images/gameover.png"];
    gos.y=400; gos.x=(game.width-gos.width)/2;
    gos.scaleX=1;gos.scaleY=1;
    gameoverScene.addChild(gos);
    
    //クリア画面の準備
    gameclearScene=new Scene();
    let gcs=new Sprite(267,48);
    gcs.image=game.assets["images/clear.png"];
    gcs.y=400; gcs.x=(game.width-gcs.width)/2;
    gcs.scaleX=1;gcs.scaleY=1;
    gameclearScene.addChild(gcs);

    //背景の準備（詳細は授業資料参照）
    let map=new Map(32,32);
    map.image=game.assets['images/avatarBg1.png'];  //マップに使用する画像ファイル
    map.loadData(mapData);
    map.onenterframe=function(){    //フレームごとのマップスクロール処理を登録
	    this.y+=2; 
        if (this.y>=0){     //背景の最後まで来たのでゲームクリアとする
            console.log("game clear");
            game.replaceScene(gameclearScene);
            game.pause();    
        }
	};
	map.y-=32*(mapData.length-30);  //初期位置を設定（上にずらしておく）
    game.rootScene.addChild(map);

    //スタート画面
    gamestartScene=new Scene();
    let gss=new Sprite(236,48);
    gss.image=game.assets["images/start.png"];
    gss.y=400; gss.x=(game.width-gss.width)/2;
    gss.scaleX=1;gss.scaleY=1;
    gss.ontouchstart=function(){    //スタートロゴをタッチしたらゲーム開始
        game.resume();
        game.removeScene(gamestartScene);  
    };
    gamestartScene.addChild(gss);

    //スタート画面を表示して停止する
    game.replaceScene(gamestartScene);
    game.pause(); 

    
    //
    //自機のスプライトと操作ボタンを表示する

    //ここに自機の表示を書く
    player=new Player()
    game.rootScene.addChild(player)


    //操作用ボタンを表示する
    let scope=new Sprite(57,57);
    scope.image=game.assets['images/scope.png'];
    scope.x=0;
    scope.y=800;
    scope.buttonMode="a";
    game.rootScene.addChild(scope);
    let b_r=new Sprite(57,57);
    b_r.image=game.assets['images/scope.png'];
    b_r.x=580;
    b_r.y=800;
    b_r.buttonMode="right";
    game.rootScene.addChild(b_r);
    let b_l=new Sprite(57,57);
    b_l.image=game.assets['images/scope.png'];
    b_l.x=270;
    b_l.y=800;
    b_l.buttonMode="left";
    game.rootScene.addChild(b_l);
    let b_u=new Sprite(57,57);
    b_u.image=game.assets['images/scope.png'];
    b_u.x=425;
    b_u.y=720;
    b_u.buttonMode="up";
    game.rootScene.addChild(b_u);
    let b_d=new Sprite(57,57);
    b_d.image=game.assets['images/scope.png'];
    b_d.x=425;
    b_d.y=880;
    b_d.buttonMode="down";
    game.rootScene.addChild(b_d);

    //シーンに存在する敵を配列にして返す関数
    game.rootScene.getEnemys=function(){
        let enemys=new Array();
        let numChilds=game.rootScene.childNodes.length;
        for(let i=0; i<numChilds; i++){
            if (game.rootScene.childNodes[i] instanceof Enemy){
                enemys.push(game.rootScene.childNodes[i]);
            }
        }
        return enemys;
    }
    
    //毎フレームごとの処理
    let lastStageIndex=0;   //stageDataから次に読み込む位置
    game.onenterframe=function(){    
        let current=stageData[lastStageIndex];
        while(current && current[0]==game.frame){
            let enemy_x=current[2];
            let enemy_y=current[3];
            if (enemy_x==999){
                enemy_x=Math.floor(Math.random()*game.width);
            }
            if (enemy_y==999){
                enemy_y=Math.floor(Math.random()*game.height);
            }
            //登場させる敵の種類に対応したインスタンスを作成する
            let newenemy;   //登場させる敵インスタンス格納用変数
            switch(current[1]){ //登場させる敵に対応した分岐
                case 1:
                    newenemy=new Enemy1(enemy_x, enemy_y);
                    break;
                case 2:
                    newenemy=new Enemy2(enemy_x, enemy_y);
                    break;
                case 3:
                    newenemy=new Enemy3(enemy_x, enemy_y);
                    break;
                case 4:
                    newenemy=new Enemy4(enemy_x, enemy_y);
                    break;
                case 5:
                    newenemy=new Enemy5(enemy_x, enemy_y);
                    break;
                case 6:
                    newenemy=new Enemy6(enemy_x, enemy_y);
                    break;                       
                default:
                    newenemy=new Enemy1(enemy_x, enemy_y);
                    break;                   
            }
            game.rootScene.addChild(newenemy);  //作成したインスタンスをシーンに登録
            lastStageIndex++;
            current=stageData[lastStageIndex];
        }
    };
}
