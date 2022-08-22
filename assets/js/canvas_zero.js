/**
 * Canvas Zero - Used to make header styling
 */

// Get ROOT border-width
const borderWidth = getComputedStyle( document.documentElement ).getPropertyValue( '--border-width' ).replace( 'px', '' );
// Replace: To remove PX from Border Width


const canvasZero = document.querySelector( '#canvas_zero' );
const ctx = canvasZero.getContext( '2d' );


ctx.strokeStyle = 'black';
ctx.lineWidth = borderWidth;
// ctx.lineJoin = 'bevel';


// Only need to input 2 cordinates to draw 1 line.
// When creating lines together this is the wrong approuch, this way they are not joined, and are all seperate lines... :)
// let currect_pencil_placement = [ 100, 50 ];
// function draw_one_line( first, second ) {

//     ctx.beginPath();
//     ctx.moveTo( currect_pencil_placement[0], currect_pencil_placement[1] );
//     ctx.lineTo( first, second );
//     ctx.stroke();

//     currect_pencil_placement = [ first, second ]; 
// }

// draw_one_line( 100, 200 );
// draw_one_line( 50, 200 );
// draw_one_line( 50, 150 );
// draw_one_line( 500, 150 );
// draw_one_line( 500, 0 );
// draw_one_line( 550, 0 );
// draw_one_line( 550, 50 );
// draw_one_line( 100, 50 );

// Create JOINED lines
ctx.beginPath();
ctx.moveTo( 100, 50 );
ctx.lineTo( 100, 190 );
ctx.lineTo( 60, 190 );
ctx.lineTo( 60, 150 );
ctx.lineTo( 500, 150 );
ctx.lineTo( 500, 10 );
ctx.lineTo( 540, 10 );
ctx.lineTo( 540, 50 );

// 99 to make it look like it's connected.
ctx.lineTo( 99, 50 );

ctx.stroke();

/**
 * Canvas Zero - Corner
 */
 const canvasCorner = document.querySelector( '#canvas_zero--corner' );
 const ctxCorner = canvasCorner.getContext( '2d' );
 
 ctxCorner.strokeStyle = 'black';
 ctxCorner.lineWidth = borderWidth;

ctxCorner.beginPath();
ctxCorner.moveTo( 50, 0 );
ctxCorner.lineTo( 50, 30 );
ctxCorner.lineTo( 60, 30 );
ctxCorner.lineTo( 60, 20 );
ctxCorner.lineTo( 40, 20 );
ctxCorner.lineTo( 40, 60 );
ctxCorner.lineTo( 60, 60 );
ctxCorner.lineTo( 60, 40 );
ctxCorner.lineTo( 20, 40 );
ctxCorner.lineTo( 20, 60 );
ctxCorner.lineTo( 30, 60 );
ctxCorner.lineTo( 30, 50 );
ctxCorner.lineTo( 0, 50 );

ctxCorner.stroke();