"use strict";

field.onclick = function (event){
    //find window relative field coordinates
    let fieldCoords = this.getBoundingClientRect(); //gives coordinates on div when you click
    console.log(field.clientTop)
    //clienTop means border

    let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight/2,//fieldCoords subtracted makes the space between the ball and cursor shortened, clienttop does that too, and clientwidth makes it in the center
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth/2
    }
    //ball.clientWidth reads as the width of the ball


    //keeps ball in bounds
    if(ballCoords.top < 0) ballCoords.top = 0;
    if(ballCoords.left < 0) ballCoords.left = 0;
    if(ballCoords.left + ball.clientWidth > field.clientWidth) ballCoords.left = field.clientWidth - ball.clientWidth;
    if(ballCoords.top + ball.clientHeight > field.clientHeight) ballCoords.top = field.clientHeight - ball.clientHeight;
    //width of ball + where ball is

    ball.style.left = ballCoords.left+'px'
    ball.style.top = ballCoords.top+'px'
}