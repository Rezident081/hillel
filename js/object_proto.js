String.prototype.comparisonStrings = function (str) {

    return this.valueOf() === str;
}

Array.prototype.setAllValuesToNumber = function(){

    return this.valueOf().map(function (val) {
        return  isNaN(val) ? 1 : Number(val);
    })

}
