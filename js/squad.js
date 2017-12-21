function Squad(defaultResources) {

    this.squad = [];
    if(defaultResources)
        this.combineResources(defaultResources);
}

Squad.prototype.isResourcesReadyToMove = function(distance){

    return this.squad.every(function (value) {
        return  value.distance >= distance;
    })
}

Squad.prototype.isResourcesReadyToFight = function(damage){

    return this.squad.some(function (value) {
        return  value.healthPoint > damage;
    })
}

Squad.prototype.restoreResources = function(index){

    if(Number.isFinite(index)){

        this.squad[index].healthPoint = this.squad[index].maxHealthPoint;
        return;
    }

    this.squad.forEach(function (value) {

        value.healthPoint = value.maxHealthPoint;
    })
}

Squad.prototype.getReadyToMoveResources = function(index){

    if(Number.isFinite(index)){

        this.squad[index].distance = this.squad[index].maxDistance;
        return;
    }

    this.squad.forEach(function (value) {

        value.distance = value.maxDistance;
    })
}

Squad.prototype.combineResources = function(arr){

    this.squad.push.apply(this.squad, arr);
}

Squad.prototype.cloneResource = function(arr){

    return new Squad(arr);
}


