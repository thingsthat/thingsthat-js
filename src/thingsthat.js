var ThingsThat = function() {

}

ThingsThat.prototype.images = {

    preloadImages : function(arrayOfImages) {

        if (arrayOfImages && arrayOfImages.length > 0) {
            $(arrayOfImages).each(function() {
                thingsthat.images.preloadImage(this.toString(), null);
            });
        }

    },

    preloadImage : function(src, cb) {

        var img = new Image();
        img.addEventListener('load', cb);
        img.src = src;

    },

    loadImage : function(src, cb, cbProgress) {
        
        var img = new Image();
        img[0].addEventListener('load', cb);
        if (cbProgress) {
            img[0].onprogress = cbProgress;
        }
        img[0].src = src;
    },

};

ThingsThat.prototype.format = {
    
    getPrice : function(value) {
    
        return parseFloat(value).toFixed(2).replace(/./g, function(c, i, a) {
            return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
        })

    }
    
};

ThingsThat.prototype.window = {

    lockScroll : function() {

        // lock scroll position, but retain settings for later
        var scrollPosition = [
            document.documentElement.scrollLeft || document.body.scrollLeft,
            (document.documentElement.scrollTop  || document.body.scrollTop)
        ];

        document.documentElement.setAttribute('scroll-position', scrollPosition);
        document.documentElement.setAttribute('previous-overflow', document.documentElement.style.overflow);
        document.documentElement.style.overflow = 'hidden';
        window.scrollTo(scrollPosition[0], scrollPosition[1]);
        document.body.style.overflow = 'hidden';

    },

    getBodyScrollY : function() {
        return document.documentElement.scrollTop  || document.body.scrollTop;
    },

    unlockScroll : function() {
 
        // un-lock scroll position
        var scrollPosition = document.documentElement.getAttribute('scroll-position');
        document.documentElement.style.overflow = document.documentElement.getAttribute('previous-overflow');
        
        window.scrollTo(scrollPosition[0], scrollPosition[1]);
        document.body.style.overflow = 'auto';

    },

    getScrollHeight : function() {

        var body = document.body;
        var html = document.documentElement;

        return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

    }

};

window.thingsthat = new ThingsThat();