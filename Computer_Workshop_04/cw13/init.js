/**
 *  init.js
 * 
 * 	ゲーム全体の初期化、画像の読み込み、グローバル変数の宣言を行う
 * 
 * **/
	
//グローバル変数はここで宣言する    
console.log("DEBUG: init.js loaded.");
let game;
let MAP_LINES;
if (mapData in this){
    MAP_LINES=mapData.length;
}
let MOVE_FRAMES=5;  //タッチした場所まで、自機が何フレームで移動終了するか      
let moveTo=300;
let enemys=new Array();
let enemyCount=0;
let player;             //自機
let gameoverScene;
let sounds;
	
function init(){
	console.log("DEBUG: init() called.");
    game=new Core(640,960);
    game.score=0;
    game.fps=20;
        
    game.onload=main;
    loadAssets();
    game.start();
}

//アセット（データ）の読み込み処理
//画像を追加したい場合はここに追加
function loadAssets(){
    let g_ASSETS = [
        "images/effect0.png",
        "images/start.png",
        "images/clear.png",
        "images/tank.png",
        "images/enemyshot.png",
        "images/space1.png",
        "images/space2.png",
        "images/myshot.png",
        "images/scope.png",
        "images/mychara0.png",
        "images/avatarBg1.png",
        "images/chara1.png",
        "images/icon1.png",
        "images/chara6.png",
        "images/gameover.png"
    ];
    game.preload(g_ASSETS);
}
	