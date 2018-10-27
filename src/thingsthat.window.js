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

        document.documentElement
        el.setAttribute('data-foo', 'Hello World!');
        
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
