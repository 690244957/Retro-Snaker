(function () {
  
  var arr = []; 
function Snake(obj){
	obj = obj || {};
	this.width = obj.width || 20;
	this.height = obj.height || 20;
	this.direction = 'right'; 
	 this.body = [
      //x,y 代表的是蛇节再地图上的哪个格子里
      // 真正蛇的坐标 要用x/y * 蛇节的宽高
      { x: 3, y:2, col : 'red'}, //蛇头
      { x: 2, y:2, col : 'blue'}, //蛇的身体
      { x: 1, y:2, col : 'blue'}
    ]
}
Snake.prototype.render = function(){
	for(var i = 0, leng = arr.length; i < leng; i++){
		map.removeChild(arr[0]);
		arr.splice(0,1);
	}
	this.body.forEach(function(item){
		var div = document.createElement('div');
		arr.push(div);
		div.style.width = this.width + 'px';
		div.style.height = this.height + 'px';
		div.style.backgroundColor = item.col;
		div.style.left = item.x * this.width + 'px';
		div.style.top = item.y * this.height + 'px';
		div.style.position = 'absolute';
		map.appendChild(div);
		
	}.bind(this));
	
}
Snake.prototype.move = function(){
	for(var i = this.body.length - 1; i > 0; i--){
		this.body[i].x = this.body[i-1].x;
		this.body[i].y = this.body[i-1].y;
	}
	switch(this.direction){
      case 'left':
        this.body[0].x -= 1;
        break;
      case 'right':
        this.body[0].x += 1;
        break;
      case 'top':
        this.body[0].y -= 1;
        break;
      case 'bottom':
        this.body[0].y += 1;
        break;
    }
      // this.body[0].x += 1;
	
	
}
window.Snake = Snake;
})()