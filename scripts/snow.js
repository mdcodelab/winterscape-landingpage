window.onload = function () {
    let canvas = document.getElementById("canvas");
    let ctx=canvas.getContext("2d");

    //set canvas dimensions to window width/height
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

    //generate flakes
    let num = 1000;
    let flakes = [];
    //loop to flakes and apply attributes
    // minimum density d of 1 - controls how quickly the snowflake falls 
    for (let i =0; i<num; i++) {
        flakes.push({
            x: Math.random()*canvas.width,
            y: Math.random()*canvas.height,
            r: (Math.random())*1.8+1,
            d: Math.random(),
        })
    }
    
    //draw the flakes
    function draw () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle="white";
        ctx.beginPath();
        for (let i=0; i< num; i++) {
            let f = flakes[i];
            ctx.moveTo(f.x, f.y);
            ctx.arc(f.x, f.y, f.r, 0, 2*Math.PI);
        }
        ctx.fill(); 
    }

    
//move the flakes
let angle = 0;
function update() {
    angle += 0.01;
    draw();
    for (let i=0; i< num; i++) {
        let f = flakes[i];
        f.x += Math.sin(angle)*1.1;
        f.y += Math.pow(f.d, 2)+1;
        // if snowflake reaches the bottom of the canvas, re-assign y coordinate to send it back to the top
        if (f.y > canvas.height) {
            flakes[i] = {
                x: Math.random()*canvas.width,
                y: 0,
                r: f.r,
                d: f.d
            }
        }   
    }
    
    requestAnimationFrame(update);
}
update();




}