let isRunning = true;

Simulation();
while(isRunning){

}


function Simulation(){
    const Matter1 = new Matter(40000000, 40,40, 800,450,0,0);
    const Matter2 = new Matter(.5,20,20, 600, 450, 0,0);
    
}

class Matter{
    static numOfObjects = 0;
    constuctor(mass,width,height,XPos,YPos,YSpeed,XSpeed){
        numOfObjects++;
        this.mass = mass; // in kilograms
        this.width = width; // in pixels
        this.height = height; // in pixels
        this.Xpos = XPos;
        this.YPos = YPos;
        this.YSpeed = YSpeed;
        this.XSpeed = XSpeed;
        
    }
}

function AccelerationOfObject(object1){
    const G = .000000000066743;

    for (let i =0; i<numOfObjects; i++){

    }
}
function calcNewSpeedUsingAcceleration(){

}
function MoveEverything(){

}