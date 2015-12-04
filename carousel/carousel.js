
function Carousel(id){

	this.oCarousel=document.getElementById(id);
	this.oCarouselUl=this.oCarousel.children[0];
	this.aCarouselLi=this.oCarouselUl.children;
	this.oPromptUl=this.oCarousel.children[1];
	this.aPromptLi=this.oPromptUl.children;
	this.oBtn=this.oCarousel.children[2];
	this.oPrev=this.oBtn.children[0];
	this.oNext=this.oBtn.children[1];

	this.index=0;
	this.timer=null;

	this.init();
}

Carousel.prototype.prompt=function(){
	// 小圆点
	for (var i = 0; i < this.aPromptLi.length; i++) {
		var _this=this;
		(function(index){
			_this.aPromptLi[i].onclick=function(){
				_this.tab(index)
			}
		})(i)
	}
}
// 切换
Carousel.prototype.tab=function (index){
	for (var i = 0; i <this.aCarouselLi.length; i++) {
		this.aCarouselLi[i].className='';
		this.aPromptLi[i].className='';
	}
	this.aCarouselLi[index].className='active';
	this.aPromptLi[index].className='cur';
}

Carousel.prototype.next=function (index){
	this.index=index;
	this.index++;
	if(this.index>this.aCarouselLi.length-1) {this.index=0;}
	this.tab(this.index);
}
Carousel.prototype.prev=function(index){
	this.index=index;
	this.index--;
	if(this.index<0) this.index=this.aCarouselLi.length-1;
	this.tab(this.index);
}
Carousel.prototype.over=function(){
	var _this=this;
	clearInterval(_this.timer);
}
Carousel.prototype.out=function(){
	var _this=this;
	this.timer=setInterval(function(){
		_this.oNext.click();
	},3000)
}

Carousel.prototype.init=function(){
	this.prompt();
	// 下一张
	var _this=this;
	this.oNext.onclick=function(){
		_this.next(_this.index)
	}
	
	// 上一张
	this.oPrev.onclick=function(){
		_this.prev(_this.index)
	}
	// 自动切换
	
	this.timer=setInterval(function(){
		_this.oNext.click();
	}, 3000)

	this.oCarousel.onmouseover=function(){
		_this.over()
	}
	this.oCarousel.onmouseout=function(){
		_this.out()
	}
}
