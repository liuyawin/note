var menu_state = {
	create : function(){
		var space_opr = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR); //定义操作按键变量
		space_opr.onDown.add(this.start,this); //按下空格键开始
		
		var play_tip_style = {font:'20pt Arial',fill:'#fff'}; //游戏说明字体风格
		var x = game.world.width / 2 , y = game.world.height / 2; //定义坐标 x , y 
		
		this.backgroud = this.game.add.sprite(0,0,'bg-img'); //加载游戏资源，背景图片位于game.world 中心
		this.back = this.game.add.sprite(0,0,'back-img'); // 返回背景图片，由两个背景透明的图片组合而成
		this.menu = this.game.add.sprite(0,0,'menu-img'); //加载菜单图片
		this.bird = this.game.add.sprite(x-30,y-60,'bird-img'); //加载醉驾的小鸟
		
		var play_tip = 'Press Space To Start！';
		var text = this.game.add.text(x,y-118,play_tip,play_tip_style); //定义提示文本变量
		text.anchor.setTo(0.5,0.5);
	},
	start : function(){
		this.game.state.start('ready'); //准备进入ready场景
	}
};