if (typeof Event.prototype.preventDefault === 'undefined') {
    Event.prototype.preventDefault = function (e, callback) {
        this.returnValue = false;
    };
}