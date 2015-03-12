define({
    padWithZero: function (number) {
        if (number < 10) {
            return "0" + number;
        }
        return number;
    },
    toReadableDate: function (date) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        month = this.padWithZero(month);
        var day = this.padWithZero(date.getDate());
        var hour = this.padWithZero(date.getHours());
        var minute = this.padWithZero(date.getMinutes());
        var second = this.padWithZero(date.getSeconds());
        var millis = this.padWithZero(date.getMilliseconds());
        return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second + ":" + millis;
    }

});



