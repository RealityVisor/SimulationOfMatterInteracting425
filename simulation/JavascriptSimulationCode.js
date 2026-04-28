let isRunning =true;
let Objects = [];
//pause button space bar
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        isRunning = !isRunning; 
        if (isRunning) {
            MoveEverything();
        }
    }
});
class Matter{
    static numOfObjects = 0;
    constructor(mass,width,height,XPos,YPos,YSpeed,XSpeed){
        Matter.numOfObjects++;
        this.mass = mass; // in kilograms
        this.width = width; // in pixels
        this.height = height; // in pixels
        this.Xpos = XPos;
        this.YPos = YPos;
        this.YSpeed = YSpeed;
        this.XSpeed = XSpeed;
        this.img = document.createElement('img');
        this.img.src="BlackDot.png";
        this.img.style.position = 'absolute';
        this.img.style.width = `${this.width}px`;
        this.img.style.height = `${this.height}px`;
        document.body.appendChild(this.img);
        this.img.style.transform = `translate(${this.Xpos}px, ${this.YPos}px)`;
    }
}

Simulation();


/*while(true){
    if (isRunning){
    let startTime = Date.now();
    MoveEverything();
    let endTime = Date.now();
    let timeTaken = endTime - startTime;
    if (timeTaken < 1600){
        setTimeout(() => {
            MoveEverything();
        }, 1600 - timeTaken);
    }
    }
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            isRunning = !isRunning;
        }
    });
}*/

function Simulation(){
    let Matter1 = new Matter(400000000000, 40,40, 1000,450,0,0);
    let Matter2 = new Matter(.5,20,20, 800, 450, -.2,0);
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
    console.log("number of objects: " + Matter.numOfObjects);   
    for (let i = 0; i < Matter.numOfObjects; i++){
        let acceleration = AccelerationOfObject(Objects[i]);
        changeSpeedOfObject(Objects[i], acceleration);
        changePositionOfObject(Objects[i]);
        changeGraphicPositionOfObject(Objects[i]);
        console.log(Objects[i].Xpos, Objects[i].YPos);
    }
    if (isRunning){
    requestAnimationFrame(MoveEverything);
    }
    
}
MoveEverything();

requestAnimationFrame(MoveEverything);

function changeGraphicPositionOfObject(object){
    object.img.style.transform = `translate(${object.Xpos}px, ${object.YPos}px)`;

}
