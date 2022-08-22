/**
 * Canvas Two - Animate Circles
 * Guide: https://www.youtube.com/watch?v=YkPyedMS6s4&ab_channel=TylerPotts
 */

const canvasTwo = document.querySelector( '#canvas_two' );
// canvas.width = window.innerWidth;

const ctxTwo = canvasTwo.getContext( '2d' );

function Circle( x , y , r , c) {

    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;

    // Movement
    this.dx = ( Math.random() * 4 ) + 1;
    this.dx *= Math.floor( Math.random() * 2 ) == 1 ? 1 : -1;
    this.dy = ( Math.random() * 4 ) + 1;
    this.dy *= Math.floor( Math.random() * 2 ) == 1 ? 1 : -1;

    this.draw = function() {
        ctxTwo.beginPath();
        ctxTwo.fillStyle = this.c;
        // PI * 2 = 360 degres?
        ctxTwo.arc( this.x, this.y, this.r, 0, Math.PI * 2 );
        ctxTwo.fill();
    }

    this.animate = function() {
        this.x += this.dx;
        this.y += this.dy;

        if( this.x + this.r > canvasTwo.width || this.x - this.r < 0 ) {
            this.dx = -this.dx;
        }
        
        if( this.y + this.r > canvasTwo.height || this.y - this.r < 0 ) {
            this.dy = -this.dy;
        }

        this.draw();
    };
}

const balls = [];
for( let i = 0; i < 20; i++ ) {
    // Number between 15 and 30
    let r = Math.floor( Math.random() * 30) + 15;
    // Where to spanw on the x-axis, minus the diameter, plus the radius.
    // This is to prevent the ball from spawning inside the wall, will also make a bug where the ball won't know what to do.
    let x = Math.random() * ( canvasTwo.width - r * 2 ) + r;
    let y = Math.random() * ( canvasTwo.height - r * 2 ) + r;
    let c = 'red';

    balls.push( new Circle( x, y, r, c ) );
}
// Made my own changes, since the canvas is not full screen it will not spawn the balls where you click.
document.querySelector( '#btn_two' ).addEventListener( 'click', function(e) {

    let r = Math.floor( Math.random() * 30 ) + 15;
    
    

    // console.log( e.clientX, e.clientY );
    balls.push( new Circle( ( canvasTwo.width / 2 ), ( canvasTwo.height / 2 ), r, 'blue' ) );

    console.log(balls)

} );

function Update() {
    ctxTwo.clearRect( 0, 0, canvasTwo.width, canvasTwo.height );

    for( let i = 0; i < balls.length; i++ ) {
        balls[i].animate();
    }

    requestAnimationFrame(Update);
}

Update();
