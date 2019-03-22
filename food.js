(function(){
var container;
function Food(obj){
	obj = obj || {};
	this.width = obj.width || 20;
	this.height = obj.height || 20;
	this.bgc = obj.bgc || 'green';
	this.x = obj.x || 0;
	this.y = obj.y || 0;
}
Food.prototype.render = function(){
	 if(container){
      map.removeChild(container);
    }
	var div = document.createElement('div');
	container = div;
	div.style.width = this.width + 'px';
	div.style.height = this.height + 'px';
	div.style.backgroundColor = this.bgc;
	// this.x = Tool.getRandom(0,map.offsetWidth - this.width);
	// this.y = Tool.getRandom(0,map.offsetHeight - this.height);
	this.x = Tool.getRandom(0,map.offsetWidth/this.width - 1) * this.width;
	this.y = Tool.getRandom(0,map.offsetHeight/this.height - 1) * this.height;
	div.style.left = this.x + 'px';
	div.style.top = this.y + 'px';
	div.style.position =' absolute';
	map.appendChild(div);
	
}
	window.Food = Food;
})();
