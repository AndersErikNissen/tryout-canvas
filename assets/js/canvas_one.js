/**
 * Canvas One
 * Guide: https://medium.com/dailyjs/how-to-get-started-with-canvas-animations-in-javascript-cb2ccf37515c
 */
const btnOne = document.querySelector( '#btn_one' );
const canvasOne = document.querySelector( '#canvas_one' );
const ctxOne = canvasOne.getContext( '2d' );
const sizeOne = 30;
ctxOne.fillStyle = 'orange';

const animateOne = () => {


    ctxOne.strokeStyle = 'black';
    ctxOne.lineWidth = 5;

    ctxOne.beginPath();
    ctxOne.moveTo( 100, 50 );
    ctxOne.lineTo( 300, 150 );
    ctxOne.stroke();

    ctxOne.fillStyle = 'red';
    ctxOne.fillRect( 100, 100, 30, 30 );

    // Animate

    // for( let x = 0; x < canvasOne.width; x += sizeOne ) {
    //     // Clean Up
    //     ctxOne.clearRect( 0, 0 , canvasOne.width, canvasOne.height );

    //     ctxOne.fillRect( x, 50, sizeOne, sizeOne );
    // }

    let xOne = 0;
    const intervalOne = setInterval( () => {
        // Clean Up
        ctxOne.clearRect( 0, 0 , canvasOne.width, canvasOne.height );

        ctxOne.fillRect( xOne, 50, sizeOne, sizeOne );

        xOne += sizeOne;

        if ( xOne >= canvasOne.width ) {

            clearInterval( intervalOne );

        }

    }, 40 );

};

/**
 * Allow Multible Squares
 */
let squares = [];
let started = false;

function tickOne() {
    // Clear Canvas
    ctxOne.clearRect( 0, 0, canvasOne.width, canvasOne.height );
    
    // Paint squares
    squares.forEach( x => ctxOne.fillRect( x, 50, sizeOne, sizeOne ) );

    squares = squares.map( x => x += sizeOne )
    .filter( x => x < canvasOne.width );
    
}


let start = 0;

function animateV2( timestamp ) {
    const elapsed = timestamp - start;

    // Check what time we last ran the animation, this will slow down from the normal 60fps
    if ( elapsed > 40 ) {

        start = timestamp;

        tickOne();
        
    }

    requestAnimationFrame( animateV2 );
}

function playOne() {
    // Add 0 as x value for object to start from the left.
    // Think that this way it will start after other squares since it now the first 1 in the array?
    squares.push(0);

    // Version 1
    // if( ! started ) {

    //     started = true;

    //     setInterval( () => {

    //         tickOne();

    //     }, 40 );

    // }

    if ( ! started ) {
        animateV2();
    }

}

if( btnOne ) {
    btnOne.addEventListener( 'click', playOne );
}

