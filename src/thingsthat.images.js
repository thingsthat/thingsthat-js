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