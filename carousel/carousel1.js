
window.onload=function(){

	var oCarousel=document.getElementById('carousel');
	var oCarouselUl=oCarousel.children[0];
	var aCarouselLi=oCarouselUl.children;
	var oPromptUl=oCarousel.children[1];
	var aPromptLi=oPromptUl.children;
	var oBtn=oCarousel.children[2];
	var oPrev=oBtn.children[0];
	var oNext=oBtn.children[1];

	var index=0;
	var timer=null;

	// 小圆点
	for (var i = 0; i < aPromptLi.length; i++) {

		(function(index){
			aPromptLi[i].onclick=function(){
				tab(index)
			}
		})(i)
	}
	// 下一张
	oNext.onclick=next;

	function next(){
		index++;
		if(index>aCarouselLi.length-1) index=0;
		tab(index);
	}
	// 上一张
	oPrev.onclick=function(){
		index--;
		if(index<0) index=aCarouselLi.length-1;
		tab(index);
	}
	// 自动切换
	timer=setInterval(function(){
		// oNext.click();
		next()
	}, 1000)
	oCarousel.onmouseover=function(){
		clearInterval(timer);
	}
	oCarousel.onmouseout=function(){
		
		timer=setInterval(function(){
			// oNext.click();
			next() //直接调用 
		}, 1000)
		

	}

	// 切换
	function tab(index1){
		index=index1; //把当前改变的赋给全局
		for (var i = 0; i <aCarouselLi.length; i++) {
			aCarouselLi[i].className='';
			aPromptLi[i].className='';
		}
		aCarouselLi[index1].className='active';
		aPromptLi[index1].className='cur';
	}
}

