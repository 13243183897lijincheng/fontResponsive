(function(){
    var deviceWidth = document.documentElement.clientWidth;

    if (deviceWidth > 750) {
        deviceWidth = 750;
    }

    document.documentElement.style.fontSize = deviceWidth / 6.4 + 'px';

    // 页面宽度发生变化时动态生成根字体尺寸
    window.onresize = function () {
        var deviceWidth = document.documentElement.clientWidth;
        if (deviceWidth > 750) deviceWidth = 750; // Iphone6Plus的屏幕尺寸
        document.documentElement.style.fontSize = deviceWidth / 6.4 + 'px';
    }
})()




(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=640){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


