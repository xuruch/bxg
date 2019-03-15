
;$(function(){
     
    // 百度-CNZZ统计插码
    var _hmt = _hmt || [];
    (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js©d45632d7a3586ff682f4ce4683da70dc";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
    })();


    // 2019开年大促活动
	var newDate = new Date().getTime();
	// 一阶段
	var time1_start = new Date("2019/02/20 0:0:0").getTime();
	var time1_day1 = new Date("2019/02/26 0:0:0").getTime();
	var time1_day2 = new Date("2019/02/27 0:0:0").getTime();
	var time1_day3 = new Date("2019/02/28 0:0:0").getTime();
	// 二阶段
	var time2_start = new Date("2019/03/01 0:0:0").getTime();
	var time2_day1 = new Date("2019/03/18 0:0:0").getTime();
	var time2_day2 = new Date("2019/03/19 0:0:0").getTime();
	var time2_day3 = new Date("2019/03/20 0:0:0").getTime();
	// 三阶段
	var time3_start = new Date("2019/03/21 0:0:0").getTime();
	var time3_day1 = new Date("2019/03/29 0:0:0").getTime();
	var time3_day2 = new Date("2019/03/30 0:0:0").getTime();
	var time3_day3 = new Date("2019/03/31 0:0:0").getTime();
	// 结束时间
	var time_end = new Date("2019/04/01 0:0:0").getTime();

	if(newDate >= time1_start && newDate < time_end){
		$(".addNewBox").css({"display":"block"});
		$(".PopupBox").css({"display":"block"});
		$(".warp_dlb").css({"display":"none"});
		if(newDate >= time1_start && newDate < time2_start){
			$(".PopupBox .picBox .tit2 span").html("8929<i>元</i>")
			$(".PopupBox .picBox .tit2 img").attr("src",require("../assets/images/n_promotion/popup/tit_1.png"));
			$(".footFixed .main .tit_pic").attr("src",require("../assets/images/n_promotion/bottom/tit_pic_1.png"));
			$(".addNewBox .main .SceneBox div").addClass("SceneTab");
			$(".addNewBox .main .line div").addClass("lineTab");
			tabBox()
			if(newDate >= time1_day1 && newDate < time2_start){
				$(".footFixed .main .tit_pic").attr("src",require("../assets/images/n_promotion/bottom/tit_time_1.png"));
				countDown(time1_day1,time1_day2,time1_day3,time2_start)
			}
		}else if(newDate >= time2_start && newDate < time3_start){
			$(".PopupBox .picBox .tit2 span").html("8779<i>元</i>")
			$(".PopupBox .picBox .tit2 img").attr("src",require("../assets/images/n_promotion/popup/tit_2.png"));
			$(".footFixed .main .tit_pic").attr("src",require("../assets/images/n_promotion/bottom/tit_pic_2.png"));
			$(".addNewBox .main .tit img").attr("src",require("../assets/images/n_promotion/newBox/tit_2.png"));
            $(".addNewBox .main .SceneBox div:eq(0) img").attr("src",require("../assets/images/n_promotion/newBox/Scene_1_end.png"));
            $(".addNewBox .main .SceneBox div:eq(1) img").attr("src",require("../assets/images/n_promotion/newBox/Scene_2_ing.png"));
            $(".addNewBox .main .line div:eq(0)").css({"background":"#aaaaaa"})
            $(".addNewBox .main .line div:eq(1)").css({"background":"#ffe1b5"})
			$(".addNewBox .main .DiscountBox .picBox img").attr("src",require("../assets/images/n_promotion/newBox/Prize2.png"));
			$(".addNewBox .main .SceneBox div").addClass("SceneTab");
			$(".addNewBox .main .line div").addClass("lineTab");
			$(".addNewBox .main .SceneBox div").eq(0).removeClass("SceneTab");
			$(".addNewBox .main .line div").eq(0).removeClass("lineTab");
			tabBox()
			if(newDate >= time2_day1 && newDate < time3_start){
				$(".footFixed .main .tit_pic").attr("src",require("../assets/images/n_promotion/bottom/tit_time_2.png"));
				countDown(time2_day1,time2_day2,time2_day3,time3_start)
			}
		}else if(newDate >= time3_start && newDate < time_end){
			$(".PopupBox .picBox .tit2 span").html("1699<i>元</i>")
			$(".PopupBox .picBox .tit2 img").attr("src",require("../assets/images/n_promotion/popup/tit_3.png"));
			$(".footFixed .main .tit_pic").attr("src",require("../assets/images/n_promotion/bottom/tit_pic_3.png"));
			$(".addNewBox .main .tit img").attr("src",require("../assets/images/n_promotion/newBox/tit_3.png"));
            $(".addNewBox .main .SceneBox div:eq(0) img").attr("src",require("../assets/images/n_promotion/newBox/Scene_1_end.png"));
            $(".addNewBox .main .SceneBox div:eq(1) img").attr("src",require("../assets/images/n_promotion/newBox/Scene_2_end.png"));
            $(".addNewBox .main .SceneBox div:eq(2) img").attr("src",require("../assets/images/n_promotion/newBox/Scene_3_ing.png"));
            $(".addNewBox .main .line div:eq(0)").css({"background":"#aaaaaa"})
            $(".addNewBox .main .line div:eq(1)").css({"background":"#aaaaaa"})
            $(".addNewBox .main .line div:eq(2)").css({"background":"#ffe1b5"})
            $(".addNewBox .main .DiscountBox .picBox img").attr("src",require("../assets/images/n_promotion/newBox/Prize3.png"));
			if(newDate >= time3_day1 && newDate < time_end){
				$(".footFixed .main .tit_pic").attr("src",require("../assets/images/n_promotion/bottom/tit_time_3.png"));
				countDown(time3_day1,time3_day2,time3_day3,time_end)
			}
			
		}
	}

	// 新增一屏切换
	function tabBox(){
		var len = $(".addNewBox .main .SceneBox .SceneTab").length;
		$(".addNewBox .main .SceneBox .SceneTab").click(function(){
			var i = $(this).index()
			if(len == 3){
				if(i == 0){
					$(".addNewBox .main .SceneBox .SceneTab:eq(0) img").attr("src",require("../assets/images/n_promotion/newBox/Scene_1_ing.png"));
					$(".addNewBox .main .SceneBox .SceneTab:eq(1) img").attr("src",require("../assets/images/n_promotion/newBox/Scene_2_dns.png"));
					$(".addNewBox .main .SceneBox .SceneTab:eq(2) img").attr("src",require("../assets/images/n_promotion/newBox/Scene_3_dns.png"));
					$(".addNewBox .main .DiscountBox .picBox img").attr("src",require("../assets/images/n_promotion/newBox/Prize1.png"));
				}else if(i == 1){
					$(".addNewBox .main .SceneBox .SceneTab:eq(0) img").attr("src",require("../assets/images/n_promotion/newBox/Scene_1_dns.png"));
					$(".addNewBox .main .SceneBox .SceneTab:eq(1) img").attr("src",require("../assets/images/n_promotion/newBox/Scene_2_ing.png"));
					$(".addNewBox .main .SceneBox .SceneTab:eq(2) img").attr("src",require("../assets/images/n_promotion/newBox/Scene_3_dns.png"));
					$(".addNewBox .main .DiscountBox .picBox img").attr("src",require("../assets/images/n_promotion/newBox/Prize2.png"));
				}else if(i == 2){
					$(".addNewBox .main .SceneBox .SceneTab:eq(0) img").attr("src",require("../assets/images/n_promotion/newBox/Scene_1_dns.png"));
					$(".addNewBox .main .SceneBox .SceneTab:eq(1) img").attr("src",require("../assets/images/n_promotion/newBox/Scene_2_dns.png"));
					$(".addNewBox .main .SceneBox .SceneTab:eq(2) img").attr("src",require("../assets/images/n_promotion/newBox/Scene_3_ing.png"));
					$(".addNewBox .main .DiscountBox .picBox img").attr("src",require("../assets/images/n_promotion/newBox/Prize3.png"));
				}
				$(".addNewBox .main .line .lineTab:eq("+ i +")").css({"background":"#ffe1b5"}).siblings().css({"background":"#d82542"})
			}else if(len == 2){
				if(i == 1){
					$(".addNewBox .main .SceneBox .SceneTab:eq(0) img").attr("src",require("../assets/images/n_promotion/newBox/Scene_2_ing.png"));
					$(".addNewBox .main .SceneBox .SceneTab:eq(1) img").attr("src",require("../assets/images/n_promotion/newBox/Scene_3_dns.png"));
					$(".addNewBox .main .DiscountBox .picBox img").attr("src",require("../assets/images/n_promotion/newBox/Prize2.png"));
					$(".addNewBox .main .line .lineTab:eq(0)").css({"background":"#ffe1b5"})
					$(".addNewBox .main .line .lineTab:eq(1)").css({"background":"#d82542"})
				}else if(i == 2){
					$(".addNewBox .main .SceneBox .SceneTab:eq(0) img").attr("src",require("../assets/images/n_promotion/newBox/Scene_2_dns.png"));
					$(".addNewBox .main .SceneBox .SceneTab:eq(1) img").attr("src",require("../assets/images/n_promotion/newBox/Scene_3_ing.png"));
					$(".addNewBox .main .DiscountBox .picBox img").attr("src",require("../assets/images/n_promotion/newBox/Prize3.png"));
					$(".addNewBox .main .line .lineTab:eq(0)").css({"background":"#d82542"})
					$(".addNewBox .main .line .lineTab:eq(1)").css({"background":"#ffe1b5"})
				}
			}
		})
	}

	// 3天倒计时
	function countDown(time_day1,time_day2,time_day3,end){
		if(newDate >= time_day1 && newDate < time_day2){
			$(".PopupBox .picBox .tit1 img").css({"display":"inline"});
			$(".PopupBox .picBox .tit1 img").attr("src",require("../assets/images/n_promotion/popup/day_3.png"));
			$(".footFixed .main .tit_day").css({"display":"block"});
			$(".footFixed .main .tit_day").attr("src",require("../assets/images/n_promotion/bottom/day_3.png"));
		}else if(newDate >= time_day2 && newDate < time_day3){
			$(".PopupBox .picBox .tit1 img").css({"display":"inline"});
			$(".PopupBox .picBox .tit1 img").attr("src",require("../assets/images/n_promotion/popup/day_2.png"));
			$(".footFixed .main .tit_day").css({"display":"block"});
			$(".footFixed .main .tit_day").attr("src",require("../assets/images/n_promotion/bottom/day_2.png"));
		}else if(newDate >= time_day3 && newDate < end){
			$(".PopupBox .picBox .tit1 img").css({"display":"inline"});
			$(".PopupBox .picBox .tit1 img").attr("src",require("../assets/images/n_promotion/popup/day_1.png"));
			$(".footFixed .main .tit_day").css({"display":"block"});
			$(".footFixed .main .tit_day").attr("src",require("../assets/images/n_promotion/bottom/day_1.png"));
		}
	}
	
	// 2019开年大促
	// 关闭大弹窗
	$(".PopupBox .picBox .off").click(function(event){
		$(".PopupBox").hide();
		$(".footFixed").show();
		$(".bottomWarp").css({"margin-bottom":"1.653333rem"});
		zhuge.track('H5_专题页_点击页面按钮', {
			'按钮名称': "关闭大弹窗",
			'专题页名称':'UI在线就业班专题页',
		});
		event.stopPropagation();
	})

	// 关闭底部悬浮
	$(".footFixed .off").click(function(event){
		$(".footFixed").hide();
		$(".bottomWarp").css({"margin-bottom":"0"});
		zhuge.track('H5_专题页_点击页面按钮', {
			'按钮名称': "关闭底部悬浮",
			'专题页名称':'UI在线就业班专题页',
		});
		event.stopPropagation();
	})


    // 就业薪资 滚动
    var num = 0;
    setInterval(() => {
        var firstLi = $('.ul_bottom li').eq(0);
        var lastLi = $('.ul_bottom li').last();
        num = 27;
        $('.ul_bottom').animate({marginTop: -num +'px'},1000,function(){
            lastLi.after(firstLi)
            $('.ul_bottom').animate({marginTop: '0px'},0)
        })
	}, 3000);
	

	// 轮播
	var mySwiper = new Swiper(".swiper01", {
		autoplay: {
			disableOnInteraction: false,
		},     
		loop: true, //无缝滚动
		// autoplayDisableOnInteraction: false, //点击停止并继续轮播
		pagination: {
			el: '.swiper-pagination',
		},
	})  
	
    
       //优秀作品的轮播;
    var current_index = 0;
    $(".mainlunboxzon .tops .top").click(function() {
        current_index = $(this).index();
        $(this).addClass("ol_on").siblings().removeClass("ol_on");
		$(".mainlunboxzon .cons .con").eq(current_index).addClass("ul_on").siblings().removeClass("ul_on");
		var zhi = current_index+3
		var swiper = ".swiper0"+zhi
		console.log(swiper)
        var mySwiper = new Swiper(swiper, {
            autoplay: {
				disableOnInteraction: false,
			},            
            paginationClickable: true,
            loop: true, //无缝滚动
            pagination: {
                el: '.swiper-pagination',
            },
        })

        // var mySwiper = new Swiper(".swiper05", {
        //     autoplayDisableOnInteraction: false, //点击停止并继续轮播
        //     autoplay:true,            
        //     paginationClickable: true,
		// 	loop: true, //无缝滚动
		// 	slidesPerView : 1,
			
        //     pagination: {
        //         el: '.swiper-pagination',
        //     },
        // })

        // var mySwiper = new Swiper(".swiper06", {
        //     autoplayDisableOnInteraction: false, //点击停止并继续轮播
        //     autoplay:true,            
        //     paginationClickable: true,
		// 	loop: true, //无缝滚动
		// 	slidesPerView : 1,
			
        //     pagination: {
        //         el: '.swiper-pagination',
        //     },
        // })

        // var mySwiper = new Swiper(".swiper07", {
        //     autoplayDisableOnInteraction: false, //点击停止并继续轮播
        //     autoplay:true,            
		// 	paginationClickable: true,
		// 	slidesPerView : 1,			
        //     loop: true, //无缝滚动
        //     pagination: {
        //         el: '.swiper-pagination',
        //     },
        // })
    
    })
    

    //事件挂载
    var Event = {
        

        zhuge: function(){
            //跳转咨询
            $(".addHref").click(function(){
                var dataName = $(this).attr('data-val');
                zhuge.track('H5_专题页_点击咨询',{
                    '专题页名称':'UI在线就业班专题页',
                    '咨询按钮名称':dataName
                });
                qimoChatClick();
            });

            //点击按钮的
			$(".classHref").click(function() {
				var data_event = $(this).attr('data-event');
				var data_name = $(this).attr('data-name');
				var data_val = $(this).attr('data-val');
				zhuge.track(data_event, {
					'按钮名称': data_val,
					'专题页名称': 'UI在线就业班专题页'
				});
            });
            
            // 点击视频播放
            $(".videoBox .videoImg").click(function() {
				var data_val = $(this).attr("data-val");
				var videoUrl= $(".videoBox .video_on").attr("data-src");
				$(".videoBox .video_on").attr("src",videoUrl);
				$(this).hide();
				$(".videoBox .video_on").show();
				zhuge.track('H5_专题页_点击页面按钮', {
					'按钮名称': data_val,
					'专题页名称': 'UI在线就业班专题页'
				})
			})
    

            // 点击logo跳转
            $('.header .logo').click(function(){
                zhuge.track('H5_专题页_点击页面按钮',{
                    '专题页名称':'UI在线就业班专题页',
                    '按钮名称':'顶部LOGO'
                });
                window.open($(this).attr('data-href'));
            })
        },



        init: function() {
            //初始化
			zhuge.track('H5_进入专题页',{
				'专题页名称':'UI在线就业班专题页'
			});
			Event.zhuge();
 
        }
    }
    Event.init();


    $.tools = {
    //判断是否是PC
    IsPC: function() {
            var userAgentInfo = navigator.userAgent;
            var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
            var flag = true;
            for(var v = 0; v < Agents.length; v++) {
                if(userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false;
                    break;
                }
            }
            return flag;
        }
    };
    var base_path = '';
    if(window.location.origin == 'https://www.boxuegu.com' || window.location.origin == 'https://m.boxuegu.com'){
        base_path = 'https://www.boxuegu.com/web/subject';
    }else{
        base_path = 'https://www.boxuegu.com/web/subject';
    }

    if($.tools.IsPC()) {
        window.location.href = base_path + "/UIstylist/" + window.location.search;
    };

})