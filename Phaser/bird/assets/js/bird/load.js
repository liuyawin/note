var load_state = {
	//把所需的资源预加载进来
	preload : function(){
		this.game.load.image('bg-img','assets/imgs/bg.png');  //加载图片资源
		this.game.load.image('back-img','assets/imgs/back.png');
		this.game.load.image('menu-img','assets/imgs/menu.png');
		this.game.load.image('ready-img','assets/imgs/ready.png');
		this.game.load.image('bird-img','assets/imgs/bird.png');
		this.game.load.image('pipe-img','assets/imgs/pipe.png');
		this.game.load.audio('jump-aud','assets/imgs/jump.wav'); //加载音频资源
		this.game.load.audio('dead-aud','assets/imgs/dead.wav');
		this.game.load.image('gameover-img','assets/imgs/gameover.png');
	},
	create : function(){
		this.game.state.start('menu'); //资源加载完毕后进入'menu' 场景
	}
};