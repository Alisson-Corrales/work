let canvas = document.getElementById("canvas");
let draw = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/*draw.strokeStyle = "pink"
draw.fillStyle = "lightblue"
draw.strokeRect(50, 50, 50, 50);
draw.strokeRect(200, 200, 200, 200);
//rect(xposition, y position, width, height);

draw.fillRect(100, 100, 100, 100)
function looping () {
    for(let i = 0; i < 50; i++){
        let red = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)

        let x = Math.random() * canvas.width
        let y = Math.random() * canvas.height

        //minimum is 10, max is 40
        let l = Math.random() * 90 +10
        let w = Math.random() * 90 +10

        draw,lineWidth = 20;
        draw.strokeStyle = `rgb(${red}, ${green}, ${blue})`
        draw.strokeRect(x, y, l, w)
    }
}

let interval = setInterval(looping, 20)


for(let i = 0; i < 20; i++){
    for(let j = 0; j < 20; j++){
        //draw.lineWidth = 5;

        draw.strokeStyle = `rgb(    
            ${Math.floor(255 - 13.5 * i)},
            ${0},
            ${Math.floor(255 - 13.5 * j)}
        )`;
        draw.beginPath();
        draw.arc(12.5 + j * 25, 12.5 + i * 25, 15, 0, 2 * Math.PI)
        draw.stroke()
        //x, y, radius, starting angle, ending angle);
    }
}*/

let xpos = 50;
let ypos = 50;
let xdir = true;
let ydir = true;

let dx = 2
let dy = 2

let img = new Image();
img.src = "https://i.dlpng.com/static/png/6466953_preview.png"

function animated() {
    requestAnimationFrame(animated);

    draw.clearRect(0,0, canvas.width, canvas.height);

    draw.beginPath();
    draw.drawImage(img, xpos, ypos, 200, 100)
    //draw.arc(xpos, ypos, 50, 0, 2*Math.PI)
    //draw.arc(xpos, ypos, xpos, ypos, ypos+2)
    draw.stroke();

    //xpos+=4;
    //ypos+=5;

    if(xpos >= canvas.width - 45){xdir = false}
    if(xpos <= 0 + 45){xdir = true};

    if(ypos >= canvas.height - 45){ydir = false}
    if(ypos <= 0 + 45){ydir = true};

    xdir ? (xpos += 4) : (xpos -= 4);
    ydir ? (ypos += 4) : (ypos -= 4);
    

    {/*if(xpos >= canvas.width - 45){xdir = false; dx++}
    if(xpos <= 0 + 45){xdir = true dx++};

    if(ypos >= canvas.height - 45){ydir = false, y++}
    if(ypos <= 0 + 45){ydir = true};

    xdir ? (xpos += dx) : (xpos -= dx);
    ydir ? (ypos += dy) : (ypos -= dy);*/
    }
    
}

animated();