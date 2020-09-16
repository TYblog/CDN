
$(function(){
	//function lazyloaded(){
		$('img.lazy').load(function() {
			 //console.log($(this).attr('src') + ' loaded');
			 if($(this).attr('src').match('loading')){
				 let _this = $(this),
					 imgPath = _this.attr('data-original').slice(0,-3),
					 errType = _this.attr('data-original').slice(-3,-1)+'g';
				 switch(errType){
					 case('jpg'): //请求jpg报错，尝试请求png
						 _this.attr({'src':imgPath+'png','requestd':errType});
						 break;
					 case('png'): //请求png报错，尝试请求jpg
						 _this.attr({'src':imgPath+'jpg','requestd':errType});
						 break;
					 default:
						 return 'err';
						 break;
				 }
			 }
		 });
	//};lazyloaded();
	//.. img error check while load-complete
	function callJson(){
		var anime = $('.rcmd-boxes .info.anime .inbox.more'),
			comic = $('.rcmd-boxes .info.comic .inbox.more'),
			game = $('.rcmd-boxes .info.game .inbox.more'),
			movie = $('.rcmd-boxes .info.movie .inbox.more'),
			tv = $('.rcmd-boxes .info.tv .inbox.more');
		/*for(var key in janime){
			console.log(janime[0][key]+' : '+janime[0].id);  //id=1
		}*/
		//..json counter
		function jsonCounter(){
			$('.win-top .counter h2').append('<sup>+</sup>');
			var n = na=nc=ng=nm=nt=0,
				a = $(' .counter .anime h2'),
				c = $(' .counter .comic h2'),
				g = $(' .counter .game h2'),
				m = $(' .counter .movie h2'),
				t = $(' .counter .tv h2'),
				timerA = setInterval(function(){
					na++;
					a.text(na).append('<sup>+</sup>');
					if(na>=janime.length){
						clearInterval(timerA);
					}
				},100*na),
				timerC = setInterval(function(){
					nc++;
					c.text(nc).append('<sup>+</sup>');
					if(nc>=jcomic.length){
						clearInterval(timerC);
					}
				},10*nc),
				timerG = setInterval(function(){
					ng++;
					g.text(ng).append('<sup>+</sup>');
					if(ng>= jgame.length){
						clearInterval(timerG);
					}
				},10*ng),
				timerM = setInterval(function(){
					nm++;
					m.text(nm).append('<sup>+</sup>');
					if(nm>=jmovie.length){
						clearInterval(timerM);
					}
				},10*nm),
				timerT = setInterval(function(){
					nt++;
					t.text(nt).append('<sup>+</sup>');
					if(nt>=jtv.length){
						clearInterval(timerT);
					}
				},10*nt);
			//$('.win-top .counter h2').append('<sup>+</sup>');
		};jsonCounter();
		
		//..
		for(var i in janime){  //i=0; i<ass.length; i++
			//console.log(janime[i].img);  //遍历输出每个imgsrc
			anime.before('<div class="inbox flexboxes"><div class="inbox-headside flexboxes"><span class="author">'
						 +janime[i].subtitle+
						 '</span><img class="bg lazy" data-original="https://img.2broear.com/acg/1/'
						 +janime[i].id+
						 '.png" /><img class="lazy" data-original="https://img.2broear.com/acg/1/'
						 +janime[i].id+
						 '.png" /></div><div class="inbox-aside"><span class="lowside-title"><h4><a href="'
						 +janime[i].src+
						 '" target="_blank">'
						 +janime[i].title+
						 '</a></h4></span><span class="lowside-description"><p>'
						 +janime[i].description+
						 '</p></span></div></div>');
			for(var j in janime[i]){
				//console.log(j+' : '+janime[i][j]);
				//anime.before('<p>'+janime[i][j]'</p>');
				//console.log(janime[i].src)
			};
		}
		//.. for in comic
		for(var i in jcomic){
			comic.before('<div class="inbox flexboxes"><div class="inbox-headside flexboxes"><span class="author">'
						 +jcomic[i].subtitle+
						 '</span><img class="bg lazy" data-original="https://img.2broear.com/acg/4/'
						 +jcomic[i].id+
						 '.jpg" /><img class="lazy" data-original="https://img.2broear.com/acg/4/'
						 +jcomic[i].id+
						 '.jpg" /></div><div class="inbox-aside"><span class="lowside-title"><h4><a href="'
						 +jcomic[i].src+
						 '" target="_blank">'
						 +jcomic[i].title+
						 '</a></h4></span><span class="lowside-description"><p>'
						 +jcomic[i].description+
						 '</p></span></div></div>');
		}
		//.. for in movie
		for(var i in jmovie){
			movie.before('<div class="inbox flexboxes"><div class="inbox-headside flexboxes"><span class="author">'
						 +jmovie[i].subtitle+
						 '</span><img class="bg lazy" data-original="https://img.2broear.com/acg/2/'
						 +jmovie[i].id+
						 '.jpg" /><img class="lazy" data-original="https://img.2broear.com/acg/2/'
						 +jmovie[i].id+
						 '.jpg" /></div><div class="inbox-aside"><span class="lowside-title"><h4><a href="'
						 +jmovie[i].src+
						 '" target="_blank">'
						 +jmovie[i].title+
						 '</a></h4></span><span class="lowside-description"><p>'
						 +jmovie[i].description+
						 '</p></span></div></div>');
		}
		//.. for in tv
		for(var i in jtv){
			tv.before('<div class="inbox flexboxes"><div class="inbox-headside flexboxes"><span class="author">'
						 +jtv[i].subtitle+
						 '</span><img class="bg lazy" data-original="https://img.2broear.com/acg/3/'
						 +jtv[i].id+
						 '.jpg" /><img class="lazy" data-original="https://img.2broear.com/acg/3/'
						 +jtv[i].id+
						 '.jpg" /></div><div class="inbox-aside"><span class="lowside-title"><h4><a href="'
						 +jtv[i].src+
						 '" target="_blank">'
						 +jtv[i].title+
						 '</a></h4></span><span class="lowside-description"><p>'
						 +jtv[i].description+
						 '</p></span></div></div>');
		}
		
		//.. for in game + game-ratings gs/ign
		
		for(var i in jgame){
			game.before('<div class="inbox flexboxes"><div class="inbox-headside flexboxes"><span class="author">'
						 +jgame[i].subtitle+
						 '</span><img class="bg lazy" data-original="https://img.2broear.com/acg/5/'
						 +jgame[i].id+
						 '.jpg" /><img class="lazy" data-original="https://img.2broear.com/acg/5/'
						 +jgame[i].id+
						 '.jpg" /></div><div class="inbox-aside"><span class="lowside-title"><h4><a href="https://store.steampowered.com/app/'
						 +jgame[i].src+
						 '" target="_blank">'
						 +jgame[i].title+
						 '</a></h4></span><span class="lowside-description"><p>'
						 +jgame[i].description+
						 '</p></span><div class="game-ratings '
						 +jgame[i].class+
						 '"><div class="ign" title="IGN Ratings"><h3 style="color: #fff;">'
						 +jgame[i].ign_rating+'</h3></div><div class="gamespot" title="GameSpot Ratings"><div class="range"><span id="before"></span><span id="after"></span></div><span id="spot"><h3 style="color: #fff;">'
						 +jgame[i].gs_rating+'</h3></span></div></div></div></div>');
		};
		
		//$(window).load(function(){
			var imgs = $('.rcmd-boxes .info .inbox .inbox-headside img')
			if(imgs.complete){
				console.log('complete')
			}
			imgs.onload = function(){
				console.log('img onload')
			}
			/*imgs.each(function(){
				var imgSrc = $(this).attr('src');
				if(imgSrc.match('data:image/')){
					let _this = $(this),
						imgPath = _this.attr('data-original').slice(0,-3),
						errType = _this.attr('data-original').slice(-3,-1)+'g';
					switch(errType){
						case('jpg'): //请求jpg报错，尝试请求png
							_this.attr({'src':imgPath+'png','requestd':errType});
							break;
						case('png'): //请求png报错，尝试请求jpg
							_this.attr({'src':imgPath+'jpg','requestd':errType});
							break;
						default:
							return 'err';
							break;
					}
				}
			});*/
		//});
};callJson();
	
	//..
	
	function ratingRange(){
		var baseRange = 90,afterRange = 180,
			fullRangeA = baseRange+afterRange;
		$('.inbox-aside .game-ratings.gs .gamespot h3').each(function(){
			var RS = $(this),
				RSP = RS.parent().siblings('.range'),
				RSPA = RSP.children('#after'),
				RSPB = RSP.children('#before'),
				RSLen = RS.length,
				RSTxt = $(this).text(), //String
				RSNum = (parseInt(RSTxt)),
				RSNumFloat = (parseFloat(RSTxt)),
				RSNumPer = (RSNumFloat/10).toFixed(2), //Number Percentage 0.85
				RSNumPerFloat = (RSNumPer*fullRangeA).toFixed(1); //0.85(percent)*270(fullRangeA)=rotateAngle
			
			if(RSNum > 0){
				
				var cSpots,_cSpots,
					_RSNumPerFloat = RSNumPerFloat, //设定对比值]
					_RSNumPerFloat_ = (RSNumPer*(90)).toFixed(1); //特定对比值
				function numFloat(){
					var num=0,
						timer = setInterval(function(){
						num+=0.1;
						if(RSNumFloat > 0 && RSNumFloat <= 5){
							RS.text((num+0.0).toFixed(1));
						}else if(RSNumFloat > 5 && RSNumFloat < 10){
							RS.text((num-0.1).toFixed(1));
						}else if(RSNumFloat == 10){
							RS.text((num-0.1).toFixed(0));
						}
						if(num>=RSTxt){
							clearInterval(timer);
						}
					},20);
				};
				
				//得分大于0，小于等于5
				if(RSNumFloat > 0 && RSNumFloat <= 5){
					RSP.addClass('RSBIndex');
					RSPA.hide();
					RSPB.css({'transform':'rotate('+(_RSNumPerFloat_)+'deg)'}); //(-RSNumPerFloat)反向旋转
					//mouseenter/leave:
					RS.parents('.rcmd-boxes .info.game .inbox').mouseenter(function(){
						RSPB.css({'transform':'rotate('+(-RSNumPerFloat)+'deg)'}); //-90
						numFloat(); //浮动数字
					}).mouseleave(function(){
						RSPB.css({'transform':'rotate('+(_RSNumPerFloat_)+'deg)'}); //%
					});
				};
				
				//得分大于5，小于等于10
				if(RSNumFloat > 5 && RSNumFloat <= 10){
					RSPA.css({'transform':'rotate('+RSNumPerFloat+'deg)'}); //按百分比设定初始值
					//mouseenter/leave:animation
					RS.parents('.rcmd-boxes .info.game .inbox').mouseenter(function(){
						//clearInterval(timer); //清除浮动数字
						clearInterval(_cSpots); //清除本地定时器
						clearInterval(cSpots); //清除(鼠标移出)定时器
						//设定本地定时器
						_cSpots = setInterval(function(){
							RSNumPerFloat--;
							RSPA.css({'transform':'rotate('+(RSNumPerFloat)+'deg)'});
							if(RSNumPerFloat <= 30){
								RSP.addClass('RSBIndex');
								RSPB.css({'transform':'rotate('+(RSNumPerFloat)+'deg)'});
								RSPA.css({'z-index':''});
							}
							if(RSNumPerFloat <= (-90)){
								clearInterval(_cSpots); //清除本地定时器
							}
						},0);
						numFloat(); //浮动数字
					}).mouseleave(function(){
						clearInterval(_cSpots); //清除(鼠标移入)定时器
						clearInterval(cSpots); //清除本地定时器
						//设定本地定时器
						cSpots = setInterval(function(){
							RSNumPerFloat++;
							RSPA.css({'transform':'rotate('+(RSNumPerFloat)+'deg)'});
							if(RSNumPerFloat > 160){
								RSPB.css({'transform':''});
								RSPA.css({'z-index':'4'});
							}
							if(RSNumPerFloat >= (_RSNumPerFloat)){
								clearInterval(cSpots); //清除本地定时器
							}
						},0)
					});
				};
			};
			switch(true){
				case (RSNumFloat == 10):
					RSP.addClass('Essential');
					break;
				case (RSNumFloat>=9 && RSNumFloat<10):
					RSP.addClass('Superb');
					break;
				case (RSNumFloat>=8 && RSNumFloat<9):
					RSP.addClass('Great');
					break;
				case (RSNumFloat>=7 && RSNumFloat<8):
					RSP.addClass('Good');
					break;
				case (RSNumFloat>=6 && RSNumFloat<7):
					RSP.addClass('Fair');
					break;
				case (RSNumFloat>=5 && RSNumFloat<6):
					RSP.addClass('Medicore');
					break;
				case (RSNumFloat>=4 && RSNumFloat<5):
					RSP.addClass('Poor');
					break;
				case (RSNumFloat>=3 && RSNumFloat<4):
					RSP.addClass('Bad');
					break;
				case (RSNumFloat>=2 && RSNumFloat<3):
					RSP.addClass('Terrible');
					break;
				case (RSNumFloat>=1 && RSNumFloat<2):
					RSP.addClass('Abysmal');
					break;
				default:
					return 'error';
					break;
			};
		})
	};ratingRange();
})
