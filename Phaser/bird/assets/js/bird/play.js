var play_state = {
	create : function(){
		//加载所需资源文件
		this.background = this.game.add.sprite(0,0,'bg-img'); 
		this.back = this.game.add.sprite(0,0,'back-img');
		
		//定义按键时间，调用对应的方法，开始游戏
		var space_opr = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		space_opr.onDown.add(this.jump,this);
		
		//添加跑道
		this.pipes = game.add.group();
		this.pipes.createMultiple(50,'pipe-img'); //创建50个管道精灵
		this.timer = this.game.time.events.loop(1500,this.add_row_of_pipies,this); //持续产生管道
		
		//醉驾小鸟设置
		this.bird = this.game.add.sprite(100,245,'bird-img');
		this.bird.body.gravity.y = 1000; //设置重力属性
		this.bird.anchor.setTo(-0.2,0.5); //设置醉驾小鸟的重心
		
		//得分设置
		score = 0;
		var score_style = {font : '15pt Arial',fill : '#fff'};
		this.show_score = this.game.add.text(20,20,'0',score_style); 
		
		//加载音效
		this.jump_aud = this.game.add.audio('jump-aud');
		this.dead_aud = this.game.add.audio('dead-aud');
	},
	
	update : function(){
		if(this.bird.inWorld == false){ //醉驾小鸟跑出去，重新开始游戏
			this.restart_play();
		}
		
		if(this.bird.angle < 20){
			this.bird.angle += 1;
		}
		
		this.game.physics.overlap(this.bird,this.pipes,this.hit_pipe,null,this);
	},
	
	jump : function(){ //醉驾小鸟跳跃事件，由空格键调用
		if(this.bird.alive == false){
			return ; //醉驾小鸟撞管道了， over
		}
		this.bird.body.velocity.y = -350;
		this.game.add.tween(this.bird).to({angle:-20},50).start(); //醉驾小鸟开始跳跃
		this.jump_aud.play(); //播放跳跃音效
	},
	
	hit_pipe : function(){ //醉驾小鸟撞管子检测
		if(this.bird.alive == false){
			return;
		}
		
		this.bird.alive = false;
		this.game.time.events.remove(this.timer); //移除管道生成
		
		this.pipes.forEachAlive(function(p){
			p.body.velocity.x = 0;
		},this);
		
		this.dead_aud.play(); //播放死亡音效
	},
	
	restart_play : function(){ //重新开始游戏
		
		this.game.time.events.remove(this.timer);
		this.game.state.start('over');
	},
	
	add_one_pipe : function(x,y){ //添加单个管道
		var pipe = this.pipes.getFirstDead();
		pipe.reset(x,y);
		pipe.body.velocity.x = -200;
		pipe.outOfBoundsKill = true;
	},
	
	add_row_of_pipies : function(){ //添加多个管道成一行
		var hole = Math.floor(Math.random()*5)+1;
		for(var i = 0; i < 10; i++){
			if(i != hole && i != hole + 1){
				this.add_one_pipe(400,i*60+10);
			}
		}
		score += 1;
		this.show_score.content = score;
	}
	
};