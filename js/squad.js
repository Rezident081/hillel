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

    this.squad = this.squad.concat(arr);
}

Squad.prototype.cloneResource = function(arr){

    return new Squad(arr);
}

Squad.prototype.squadAttackedBy = function (enemy) {

    var maxValue = Math.max(this.squad.length, enemy.squad.length );
    var randomUnit = Math.round(Math.random() * maxValue );

    if( this.squad[randomUnit] === undefined || enemy.squad[randomUnit] === undefined ){

        throw new Error('Unit does not exist in Squad');
    }

    this.squad[randomUnit].attackedBy(enemy.squad[randomUnit]);

    if(this.squad[randomUnit].healthPoint === 0 || enemy.squad[randomUnit].healthPoint === 0){

        throw new Error('The Unit died');
    }

    this.squad = this.squad.filter(function (value) {
        return value.healthPoint > 0;
    })

    return this.squad;
}

