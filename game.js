(function(){
	function Game(){
		this.food = new Food();
		this.snake = new Snake();
	}
	Game.prototype.start = function(){
		 this.food.render();
    this.snake.render();
  //  2. 让蛇自己动起来
    var timeId = setInterval(function(){
      this.snake.move();
      var maxX = map.offsetWidth / this.snake.width - 1;
      var maxY = map.offsetHeight / this.snake.height - 1;
      var head = this.snake.body[0];
      if(head.x < 0 || head.y < 0 || head.x > maxX || head.y > maxY){
      	alert('game over');
      	clearInterval(timeId);
      	return;
      }
      var x = this.snake.body[0].x * this.snake.width;
      var y = this.snake.body[0].y * this.snake.height;
      if(this.food.x == x && this.food.y == y){
      	this.food.render();
      
      var last = this.snake.body[this.snake.body.length - 1];
      this.snake.body.push({
      	 x : last.x,
          y : last.y,
          col :last.col
      });
      }
      this.snake.render();
    }.bind(this),150);
    document.onkeydown = function(e){
    switch(e.keyCode){
		case 37 :
		 if(this.snake.direction === 'right') break;
		 this.snake.direction = 'left';
		 break;
		case 38 :
		 if(this.snake.direction === 'bottom') break;
          this.snake.direction = 'top';
          break;
        case 39:
          if(this.snake.direction === 'left') break;
          this.snake.direction = 'right';
          break;
        case 40:
          if(this.snake.direction === 'top') break;
          this.snake.direction = 'bottom';
          break;

	}
}.bind(this);


	 
	}
	window.Game = Game;
})()