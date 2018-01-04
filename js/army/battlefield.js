function Battlefield(){

    console.info("Battlefield init");
}

Battlefield.prototype.action = function(){

    var Squad1,Squad2;
    Squad1 = new Squad([new Unit('knight', 120, 100, 15),new Unit('knight', 120, 100, 15),new Unit('archer', 100, 120, 10)]);
    Squad2 = new Squad([new Unit('spear', 120, 90, 12),new Unit('spear', 120, 90, 12),new Unit('knight', 120, 100, 15)]);

    var intervalID = setInterval(function () {

        try{

            if(Squad1.squad.length === 0 ||  Squad2.squad.length === 0 ){
                console.log("Game over");
                console.log(Squad1,Squad2);

                if(Squad1.squad.length > Squad2.squad.length){
                    console.info("First squad win");
                }else{
                    console.info("Second squad win");
                }

                clearInterval(intervalID);
                return;
            }

            Squad1.squadAttackedBy(Squad2);
            Squad2.squadAttackedBy(Squad1);

        }catch (err){
            console.error(err.message);
        }
    },100)

}

var Battlefield = new Battlefield();
Battlefield.action();