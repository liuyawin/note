var gameover_state = {
	create : function(){
		var space_opr = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		space_opr.onDown.add(this.start,this);
		
		var tip_style = {font : '20pt Arial',fill : '#000'};
		var show_style = {font : '15pt Arial',fill : '#fff'};
		var x = game.world.width / 2 , y = game.world.height / 2 ;
		
		this.background = this.game.add.sprite(0,0,'bg-img');
		this.back = this.game.add.sprite(0,0,'back-img');
		this.gameover = this.game.add.sprite(0,0,'gameover-img');
		var best_score = this.get_best_score();
		if(score > 0){
			var score_tip = this.game.add.text(x+90,y-40,score,show_style);
			score_tip.anchor.setTo(0.5,0.5);
			var score_show = this.game.add.text(x+90,y+20,best_score,tip_style);
			score_show.anchor.setTo(0.5,0.5);
		}else if(score == 0){
			var score_tip = this.game.add.text(x+90,y-40,'0',show_style);
			score_tip.anchor.setTo(0.5,0.5);
			var score_show = this.game.add.text(x+90,y+20,best_score,tip_style);
			score_show.anchor.setTo(0.5,0.5);
		}
	},
	
	start : function(){
		this.game.state.start('menu');
	},

	get_best_score : function(){
		var best_score = 0;
		var cookie_score = $.cookie('score');
		if(cookie_score){
			if(score > cookie_score){
				best_score = score;
				$.cookie('score',parseInt(score));
			}else{
				best_score = cookie_score;
			}
		}else{
			best_score = score;
			$.cookie('score',parseInt(score));
		}
		return best_score;
	}
}