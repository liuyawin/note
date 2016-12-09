var ready_state = {
	create : function(){
		var space_opr =  this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);//定义操作按键变量
		space_opr.onDown.add(this.start,this);//按下空格键开始
		
		//加载准备所需资源
		this.background = this.game.add.sprite(0,0,'bg-img');
		this.back = this.game.add.sprite(0,0,'back-img');
		this.ready = this.game.add.sprite(0,0,'ready-img');
		this.bird = this.game.add.sprite(100,245,'bird-img');
		
	},
	start : function(){
		this.game.state.start('play');
	}
};
