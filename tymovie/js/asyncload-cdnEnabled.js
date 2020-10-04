
			if($('.pageSwitcher').is(':visible')){
				var p1box = $('.news-content-window .news-article-list-box .news-article-list.p1');
				for(var key in jnewest){
					let src = jnewest[key].src,
						subSrc = src.substr(18,src.length);
					p1box.append('<article class="news-window wow fadeInUp hentry" data-wow-delay="0.1s"><div class="news-window-inside"><span class="news-window-img"><a href="'+src+'"target="_blank"><img class="lazy" src="https://cdn.jsdelivr.net/gh/TYblog/CDN/tymovie/'+jnewest[key].img+'"/></a></span><div class="news-inside-content"><!-- hAtom -entry-more --><h2 class="entry-title"><a href="'+src+'" title="'+jnewest[key].title+'">'+jnewest[key].title+'</a></h2><span class="news-core_area entry-content"><p>'+jnewest[key].desc+'</p></span><span class="news-personal_stand" unselectable="on"><dd>'+jnewest[key].ps+'</dd></span><div id="news-tail_info"><span class="article-type">'+jnewest[key].classify+' 源自 <a href="'+jnewest[key].orgsrc+'" target="_blank">'+jnewest[key].author+'</a></span><ul class="post-info"><li><span class="valine-comment-count" data-xid="'+subSrc+'"></span></li><!--<li id="post-level"><i class="icom"></i> LV - '+jnewest[key].lv+'</li>--><li id="post-date" class="updated"><i class="icom"></i> '+jnewest[key].date+' </li></ul></div></div></div></article>');
				}
			};
			if($('.recommendation').is(':visible')){
				var rcmd = $('.recommendation');
				rcmd.append('<article id="recommend-inside"><div class="recommend-newsImg"><div><a href="'+jnewest[0].src+'"><span id="lowerbg" style="background:'+jnewest[0].bg+'"></span><a href="'+jnewest[0].src+'" id="rel" rel="bookmark" target="_blank"><b> '+jnewest[0].title+' </b></a></div></div><div class="recommend-newsContent"><span class="content-core entry-content"><p>'+jnewest[0].desc+'</p></span><span class="content-tail"><aside class="personal_stand"><p>'+jnewest[0].ps+'</p></aside></span></article>');
			}
			if($('.notes_default').is(':visible')){
				for(var key in jnotest){
					let src = jnotest[key].src,
						subSrc = src.substr(18,src.length);
					$('.win-content .notes_default .load-more_notes').before(
						'<article><h1> <a href="'+jnotest[key].src+'" target="_blank"> '+jnotest[key].title+'</a>'+jnotest[key].ps+'</h1><p> '+jnotest[key].desc+' </p><div class="info"><span class="valine-comment-count" data-xid="'+subSrc+'"></span><span class="classify" id="'+jnotest[key].classify+'"><i class="icom"></i> '+jnotest[key].type+' </span><span class="date"> '+jnotest[key].date+' </span><span id="slider"></span></div></article>'
					)
				}
			}
			$(window).load(function(){
				if($('.scroll-block').is(':visible')){
					var inform = $('.scroll-block');
					for(var key in jinform){
						inform.append('<span>'+jinform[key].title+'</span>')
					};
					function informScrollFuc(){
						var informF = $('.scroll-inform div.scroll-block span').first(),
							informH = $('.scroll-inform div.scroll-block span').height();
						$('.scroll-inform div.scroll-block').stop().animate({top:-informH},{complete:function(){
							informF.remove();
							$(this).css('top','');
						}}).last().append(informF.clone());
					};
					var informScroll = setInterval(function(){informScrollFuc()},3000);
					$('.scroll-inform div.scroll-block span a').mouseover(function(){
						clearInterval(informScroll);
					}).mouseout(function(){
						informScroll ? clearInterval(informScroll) : false;
						informScroll = setInterval(function(){informScrollFuc()},3000);
					});
				};
			});
		});
	//});

});