let isRunning = true;



class Matter{
    static numOfObjects = 0;
    constructor(mass,width,height,XPos,YPos,YSpeed,XSpeed){
        this.numOfObjects++;
        this.mass = mass; // in kilograms
        this.width = width; // in pixels
        this.height = height; // in pixels
        this.Xpos = XPos;
        this.YPos = YPos;
        this.YSpeed = YSpeed;
        this.XSpeed = XSpeed;
        this.img = document.createElement('img');
        this.img.src="BlackDot.png";
    }
}

Simulation();
while(isRunning){
    MoveEverything();
}

function Simulation(){
    let Objects = [];
    const Matter1 = new Matter(40000000, 40,40, 800,450,0,0);
    const Matter2 = new Matter(.5,20,20, 600, 450, 0,0);
    Objects.push(Matter1);
    Objects.push(Matter2);

}


function AccelerationOfObject(object1){
    const G = .000000000066743;

    for (let i = 0; i < Matter.numOfObjects; i++){
            if (object1 != Objects[i]){
                // Calculate acceleration
                let xDistance = Objects[i].Xpos - object1.Xpos;
                let yDistance = Objects[i].YPos - object1.YPos;
                let distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
                let acceleration = G * Objects[i].mass / Math.pow(distance, 2);
                let xAccerlation = acceleration * (xDistance / distance);
                let yAccerlation = acceleration * (yDistance / distance);
                return [xAccerlation, yAccerlation];
            }
    }
}

function changeSpeedOfObject(object, acceleration){
    object.XSpeed += acceleration[0];
    object.YSpeed += acceleration[1];
}

function changePositionOfObject(object){
    object.Xpos += object.XSpeed;
    object.YPos += object.YSpeed;
}

function MoveEverything(){
    for (let i = 0; i < Matter.numOfObjects; i++){
        let acceleration = AccelerationOfObject(Objects[i]);
        changeSpeedOfObject(Objects[i], acceleration);
        changePositionOfObject(Objects[i]);
        changeGraphicPositionOfObject(Objects[i]);
    }
}

function changeGraphicPositionOfObject(object){
    object.img.style.transform = `translate(${object.Xpos}px, ${object.YPos}px)`;
}
