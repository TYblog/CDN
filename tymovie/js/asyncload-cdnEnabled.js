$(function() {
//dynamicLoad('https://src.2broear.com/js/jquery-1.9.1.min.js',function(){
		var x = document.getElementsByTagName('script')[0];
		var s0 = document.createElement('script');
			s0.type = 'text/javascript';
			s0.async = true;
			s0.src = '';
			x.parentNode.insertBefore(s0, x);
	
		var dynamicLoad = function(jsUrl,fn){
			var _doc = document.getElementsByTagName('head')[0],
				script = document.createElement('script');
				script.setAttribute('type','text/javascript');
				script.setAttribute('async',true);
				script.setAttribute('src',jsUrl);
				_doc.appendChild(script);
			script.onload = script.onreadystatechange = function(){
				if(!this.readyState || this.readyState=='loaded' || this.readyState=='complete'){
					fn();
				}
				script.onload = script.onreadystatechange = null;
			}
		};
		dynamicLoad('https://src.2broear.com/js/jquery.easing.min.js?v=cdnsrc',function(){ });
		dynamicLoad('https://src.2broear.com/js/instantclick-1.2.2.js?v=cdnsrc',function(){ });
		dynamicLoad('https://src.2broear.com/js/fancybox/jquery.fancybox.min.js',function(){ });
		dynamicLoad('https://src.2broear.com/js/wow.min.js?v=cdnsrc',function(){
			new WOW().init();
		});
		dynamicLoad('https://src.2broear.com/js/nprogress.js?v=cdnsrc',function(){
			NProgress.start();
			$(window).load(function(){
				NProgress.done();
			})
		});
		dynamicLoad('https://src.2broear.com/js/lazyload.js?v=cdnsrc',function(){
			$("img.lazy").lazyload({
				placeholder : "https://img.2broear.com/loading_3_color_tp.png",    
				effect : "fadeIn",
				threshold : 200,
				failurelimit : 20
			});
			if ($('.temp-hide').is(':visible')){
				$("img.lazy").lazyload({ placeholder:'https://img.2broear.com/loading_3_color_tp.png',effect: "fadeIn",container: $("#container")});
				$('.temp-hide #more span').on('click',function(){
					$('.temp-hide#container').addClass('hide').css('overflow-y','scroll');
					$(this).fadeOut();
				})
			};
			$('img.lazy').each(function(){
				let img=$(this),
					src=img.attr('data-original'),
					box=img.parents(),  //box=img.parents('news-article-container'),
					boxes=box.attr('class');
				// box[0].tagName != 'A' ? img.wrap('<a data-fancybox="gallery" href="'+src+'"></a>') : false;
				// boxes=='news-article-container' ? img.wrap('<a data-fancybox="gallery" href="'+src+'"></a>') : false;
				/*if(box){
					img.wrap('<a data-fancybox="gallery" href="'+src+'"></a>')
				}*/
				box.hasClass('news-article-container') || box.hasClass('Introduce-window') ? img.wrap('<a data-fancybox="gallery" href="'+src+'"></a>') : false;
			});
		});
		function reUrl(){
			$('.content-all').on('mouseenter touchstart','.v a',function(){
				let _this = $(this),
					_thisLink = _this.attr('href');
				if(!_this.hasClass('reUrl')){
					_this.addClass('reUrl');
					//if(_thisLink != undefined && _thisLink != '' && _thisLink != null){
						let _thisLinkLen = _thisLink.length;
						if(_thisLink.match('http://http://')){
							_thisLink = _thisLink.substr(14,_thisLinkLen);
							_this.attr('href','http://'+_thisLink);  //console.log(_thisLink);
						}else if(_thisLink.match('http://https://')){
							_thisLink = _thisLink.substr(15,_thisLinkLen);
							_this.attr('href','https://'+_thisLink);  //console.log(_thisLink);
						}
					//}
				}
			});
		}reUrl();
		function goHash(){
			if(window.location.hash){
				var checkExist = setInterval(function() {
					if ($(window.location.hash).length) {
						$('html, body').animate({scrollTop: $(window.location.hash).offset().top-90}, 1000);
						clearInterval(checkExist);
					}
				}, 100);
			}
		};
		<!--
		//if($('#vcomments').is(':visible')){
			dynamicLoad('',function(){
				new Valine({
					el: '#vcomments',
					appId: 'k88wNKKlCqMIelWgT4XM8VDS-gzGzoHsz',
					appKey: '7JKJpECy42sqhS2hYJMj0pxl',
					//serverURLs: 'https://valine.2broear.com/',
					pageSize: 15,
					notify: false,
					verify: false, 
					// visitor: false,
					//recordIP: false,
					avatar: 'retro',
					placeholder: '稻花香里说丰年，谈笑风生一片..'
				});
				reUrl();
				goHash();
				//typeof AV != 'undefined'
			});
		//};
		dynamicLoad('https://2broear.com/js/json/global.json',function(){
			// Ajax load-file-footer
			if($('.ajaxloadfooter').is(':visible')){
					var FootloadObj = $('.ajaxloadfooter'),
						loadAttr = FootloadObj.attr('ajaxload');//'../ajax/ajax-headloader.html';
					if(FootloadObj != undefined || FootloadObj != ''){
						footerAjax = $.ajax({
							 url: loadAttr,//../ajax/ajax-text2.txt
							 type:'get',//post
							 async: 'true',
							 dataType: '',//jsonp
							 success: function(result){
								 FootloadObj.after(result).remove();
							 },error: function(xhr){
								 alert("Error: "+xhr.status+", "+xhr.statusText);
							 },complete: function(){
								 //因为加载.json数据的是通过ajax请求的文件，故需在该请求文件成功请求后再执行数据加载
								 if($('.recently').is(':visible')){
									 var i=0,ii=0,n=0,ij=0,
										 recently = $('.recently'),
										 ways = $('.footer-quickway'),
										 link = $('.friendsBox'),
										 rcmdNews = $('.news-list'),
										 rcmdNotes = $('.download-list'),
										 rcmdDload = $('.tech_window-content');

									 for(var key in jnewest){
										 	i++;
										 let src = jnewest[key].src,
											 subSrc = src.substr(18,src.length);
										 i<=5 ? recently.append('<li title="'+jnewest[key].title+'"><a href="'+src+'" target="_blank"><em>'+jnewest[key].title+'</em><sup id="'+jnewest[key].sup+'">'+jnewest[key].sup+'</sup></a></li>') : false;/*<sub class="valine-comment-count" data-xid="'+subSrc+'"></sub>*/
										 i<=6 ? rcmdNews.append('<li><a href="'+src+'" target="_blank">'+jnewest[key].title+'</a></li>') : false;
										 var compareStr = parseInt($('.footer-recommend a sup sub').text()),
											 maxStr = Math.max(compareStr);

									 };
									 for(var key in jnotest){
										 n++;
										 //n<=5 ? ways.append('<li title="'+jnotest[key].title+'"><a href="'+jnotest[key].src+'" target="_blank"><em>'+jnotest[key].title+'</em></a></li>') : false;
										 n<=6 ? rcmdNotes.append('<li><a href="'+jnotest[key].src+'" target="_blank">'+jnotest[key].title+'</a></li>') : false;
										 //jnotest[key].src == 'javascript:;' ? console.log(jnotest[key].title) : false;
									 };
									 $('.download-list li').each(function(){
										 let _this=$(this).children('a'),_src = _this.attr('href');
										 _src == '//blog.2broear.com/notes' ? _this.attr('target','_self') : false;
									 });
									 for(var key in jdload){
										 ij++;
										 ij<=5 ? rcmdDload.append('<li><a href="'+jdload[key].src+'" target="_blank">'+jdload[key].title+'</a></li>') : false;
									 };
									 for(var key in jlink){
										 link.append('<a id="'+jlink[key].id+'" href="'+jlink[key].src+'" title="'+jlink[key].title+'" target="_blank">  '+jlink[key].title+' </a>')
									 };
									 for(var key in jcontact){
										 let contact = $('.contactBox');
										 contact.append('<li id="'+key+'"></li>');
										 for(var i in jcontact[key]){
											 for(var j in jcontact[key][i]){
												 ii++; 
												 //wrap_lt4和wrap_not会同时请求 8 次，而lt4数据只有4个，故设置ii+数据请求限制
												 ii<=4 ? $('.contactBox li#wrap_lt4').append('<a href="'+jcontact[key][i][j].src+'" class="'+jcontact[key][i][j].class+'" target="_blank"><span class="contact-icons" id="'+jcontact[key][i][j].icon_id+'"><i class="'+jcontact[key][i][j].icon_type+'"></i></span></a>') : false;
												 $('.contactBox li#wrap_not').append('<a href="'+jcontact[key][i][j].src+'" class="'+jcontact[key][i][j].class+'" target="_blank"><span class="contact-icons" id="'+jcontact[key][i][j].icon_id+'"><i class="'+jcontact[key][i][j].icon_type+'"></i></span></a>');
											 }
										 }
									 }
								 };
							 }
						});
					}
			}
			// Ajax news dload-list
			if($('.ajaxloadAside').is(':visible')){
					var boxloader = $('.ajaxloadAside');
					if(boxloader != undefined || boxloader != ''){
						NewsBoxesAjax = $.ajax({
							 url: boxloader.attr('ajaxload'),
							 type:'get',
							 async: 'true',
							 dataType: '',
							 success: function(result){
								boxloader.after(result).remove();
							 },error: function(xhr){
								 alert("Error: "+xhr.status+", "+xhr.statusText);
							 },complete: function(){
								 $('.topic.remove').remove();
								 boxloader.remove();
								 //因为加载.json数据的是通过ajax请求的文件，故需在该请求文件成功请求后再执行数据加载
								 if($('.dload-list').is(':visible')){
									 var dload = $('.dload-list');
									 for(var key in jdload){
										 dload.append(
											 '<li><a href="'+jdload[key].src+'" target="_blank" title="'+jdload[key].title+'"> '+jdload[key].title+' </a></li>'
										 )
									 }
								 }
							 }
						});
					}
			};
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
	var smetav = document.createElement( "meta" );
		smetav.name = "viewport";
		smetav.content = "width=device-width,initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
	document.head.insertBefore( smetav, document.head.childNodes[10]);
	var smeta = document.createElement( "meta" );
		smeta.name = "theme-color";
		smeta.content = "#2b2b2b";
	document.head.insertBefore( smeta, document.head.childNodes[10]);
	var sicon = document.createElement( "link" );
		sicon.rel = "icon";
		sicon.type = "image/x-icon";
		sicon.href = 'https://mpsblog.shop/yun.ico';
	document.head.insertBefore( sicon, document.head.childNodes[10]);
	var sicona = document.createElement( "link" );
		sicona.rel = "apple-touch-icon";
		sicona.type = "image/x-icon";
		sicona.size = "48x48";
		sicona.href = 'https://mpsblog.shop/yun.ico';
	document.head.insertBefore( sicona, document.head.childNodes[10]);

	var scssa = document.createElement( "link" );
		scssa.type = "text/css";
		scssa.rel = "stylesheet";
		scssa.href = 'https://src.2broear.com/style/animate.min.css';
	document.head.insertBefore( scssa, document.head.childNodes[10]);

	var scsss = document.createElement( "link" );
		scsss.type = "text/css";
		scsss.rel = "stylesheet";
		scsss.href = 'https://src.2broear.com/style/fancybox/jquery.fancybox.min.css';
	document.head.insertBefore( scsss, document.head.childNodes[10]);
});