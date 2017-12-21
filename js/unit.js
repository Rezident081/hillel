function Unit(type, healthPoint, distance){

    this.type = type;
    this.healthPoint = this.maxHealthPoint = healthPoint;
    this.distance = this.maxDistance = distance;
}

Unit.prototype.isReadyToMove = function(distance){
    return this.maxDistance >= distance;
}

Unit.prototype.isReadyToFight = function(damage){
    return this.healthPoint > damage;
}

Unit.prototype.restore = function(){
    this.healthPoint = this.maxHealthPoint;
}

Unit.prototype.getReadyToMove = function(){
    this.distance = this.maxDistance;
}

Unit.prototype.clone = function(){
    return new Unit(this.type, this.healthPoint, this.distance);
}

