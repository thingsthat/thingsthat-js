ThingsThat.prototype.format = {
    
    getPrice : function(value) {
    
        return parseFloat(value).toFixed(2).replace(/./g, function(c, i, a) {
            return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
        })

    }
    
};