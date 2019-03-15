(function() {
    window.zhuge = window.zhuge || [];
    window.zhuge.methods = "_init identify track getDid getSid getKey setSuperProperty setUserProperties setPlatform".split(" ");
    window.zhuge.factory = function(b) {
        return function() {
            var a = Array.prototype.slice.call(arguments);
            a.unshift(b);
            window.zhuge.push(a);
            return window.zhuge;
        }
    };
    for (var i = 0; i < window.zhuge.methods.length; i++) {
        var key = window.zhuge.methods[i];
        window.zhuge[key] = window.zhuge.factory(key);
    }
    window.zhuge.load = function(b, x) {
        if (!document.getElementById("zhuge-js")) {
            var a = document.createElement("script");
            var verDate = new Date();
            var verStr = verDate.getFullYear().toString() + verDate.getMonth().toString() + verDate.getDate().toString();

            a.type = "text/javascript";
            a.id = "zhuge-js";
            a.async = !0;
            a.src ="https://zg.boxuegu.com/zhuge.js?v=" + verStr;
            a.onerror = function() {
                window.zhuge.identify = window.zhuge.track = function(ename, props, callback) {
                     if(callback && Object.prototype.toString.call(callback) === '[object Function]') {
        callback();
    } else if (Object.prototype.toString.call(props) === '[object Function]') {
        props();
    }
                };
            };
            var c = document.getElementsByTagName("script")[0];
            c.parentNode.insertBefore(a, c);
            window.zhuge._init(b, x)
        }
    };
    if(window.location.origin == 'https://m.boxuegu.com'){
		window.zhuge.load('ea5fe1a9d6d94bfdbdd8a54e0ac598c2', {autoTrack: true,singlePage: false});//配置应用的AppKey
	}else{
		window.zhuge.load('7754eb76d2754588beed5ce8f9871edb', {autoTrack: true,singlePage: false});//配置应用的AppKey
	}
    
})();