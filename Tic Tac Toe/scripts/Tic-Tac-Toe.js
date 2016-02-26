/**
 * Created by Meto on 11.1.2016 г..
 */

var numOfClicks = 0;
var haveLine = false;
var clicked = [false, false, false, false, false, false, false, false, false];

function changeImage(box) {
    if (haveLine === false){
        if (clicked[box-1] === false) {
            if (numOfClicks % 2 === 0) {
                document.getElementById(box).src = "images/Black%20X.png";
                numOfClicks++;
                clicked[box-1] = true;
                if(numOfClicks >= 5){
                    checkForWining(box)
                }
            }
            else{
                document.getElementById(box).src = "images/Black%20O.png";
                numOfClicks++;
                clicked[box-1] = true;
                if(numOfClicks >= 5){
                    checkForWining(box)
                }
            }
        }
    }
}

function reset(){
    numOfClicks = 0;
    haveLine = false;
    clicked = [false, false, false, false, false, false, false, false, false];
    for (var i = 1; i < 10; i++) {
        document.getElementById(i).src = "images/WhiteSpace.png";
    }
}

function checkForWining(place) {
    //check of clicked in first Column
    if (place % 3 === 1) {
        //check Row 1, 2, 3 for line
        if (document.getElementById(place).src === document.getElementById(place + 1).src && document.getElementById(place + 1).src === document.getElementById(place + 2).src) {
            if (numOfClicks % 2 === 1) {
                document.getElementById(place).src = "images/Green_X.png";
                document.getElementById(place + 1).src = "images/Green_X.png";
                document.getElementById(place + 2).src = "images/Green_X.png";
                haveLine = true;
            } else {
                document.getElementById(place).src = "images/Green_O.png";
                document.getElementById(place + 1).src = "images/Green_O.png";
                document.getElementById(place + 2).src = "images/Green_O.png";
                haveLine = true;
            }
        }
        //check Column 1 for line
        if (document.getElementById(place % 3).src === document.getElementById(place % 3 + 3).src && document.getElementById(place % 3).src === document.getElementById(place % 3 + 6).src) {
            if (numOfClicks % 2 === 1) {
                document.getElementById(place % 3).src = "images/Green_X.png";
                document.getElementById(place % 3 + 3).src = "images/Green_X.png";
                document.getElementById(place % 3 + 6).src = "images/Green_X.png";
                haveLine = true;
            } else {
                document.getElementById(place % 3).src = "images/Green_O.png";
                document.getElementById(place % 3 + 3).src = "images/Green_O.png";
                document.getElementById(place % 3 + 6).src = "images/Green_O.png";
                haveLine = true;
            }
        }
    }
    //check if clicked in third Column
    if (place % 3 === 0) {
        //check Row 1, 2, 3 for line
        if (document.getElementById(place).src === document.getElementById(place - 1).src && document.getElementById(place - 1).src === document.getElementById(place - 2).src) {
            if (numOfClicks % 2 === 1) {
                document.getElementById(place).src = "images/Green_X.png";
                document.getElementById(place - 1).src = "images/Green_X.png";
                document.getElementById(place - 2).src = "images/Green_X.png";
                haveLine = true;
            } else {
                document.getElementById(place).src = "images/Green_O.png";
                document.getElementById(place - 1).src = "images/Green_O.png";
                document.getElementById(place - 2).src = "images/Green_O.png";
                haveLine = true;
            }
        }
        //check Column 3 for line
        if (document.getElementById(place % 3 + 3).src === document.getElementById(place % 3 + 6).src && document.getElementById(place % 3 + 6).src === document.getElementById(place % 3 + 9).src) {
            if (numOfClicks % 2 === 1) {
                document.getElementById(place % 3 + 3).src = "images/Green_X.png";
                document.getElementById(place % 3 + 6).src = "images/Green_X.png";
                document.getElementById(place % 3 + 9).src = "images/Green_X.png";
                haveLine = true;
            } else {
                document.getElementById(place % 3 + 3).src = "images/Green_O.png";
                document.getElementById(place % 3 + 6).src = "images/Green_O.png";
                document.getElementById(place % 3 + 9).src = "images/Green_O.png";
                haveLine = true;
            }
        }
    }
    //check if clicked at place 2 or place 8
    if (place % 3 === 2) {
        //check Row 1 or 3 for line
        if (document.getElementById(place).src === document.getElementById(place + 1).src && document.getElementById(place).src === document.getElementById(place - 1).src) {
            if (numOfClicks % 2 === 1) {
                document.getElementById(place).src = "images/Green_X.png";
                document.getElementById(place + 1).src = "images/Green_X.png";
                document.getElementById(place - 1).src = "images/Green_X.png";
                haveLine = true;
            } else {
                document.getElementById(place).src = "images/Green_O.png";
                document.getElementById(place + 1).src = "images/Green_O.png";
                document.getElementById(place - 1).src = "images/Green_O.png";
                haveLine = true;
            }
        }
        //check Column 2 for line
        if (document.getElementById(place % 3).src === document.getElementById(place % 3 + 3).src && document.getElementById(place % 3).src === document.getElementById(place % 3 + 6).src) {
            if (numOfClicks % 2 === 1) {
                document.getElementById(place % 3).src = "images/Green_X.png";
                document.getElementById(place % 3 + 3).src = "images/Green_X.png";
                document.getElementById(place % 3 + 6).src = "images/Green_X.png";
                haveLine = true;
            } else {
                document.getElementById(place % 3).src = "images/Green_O.png";
                document.getElementById(place % 3 + 3).src = "images/Green_O.png";
                document.getElementById(place % 3 + 6).src = "images/Green_O.png";
                haveLine = true;
            }
        }
    }
    //check if clicked in the middle (place 5)
    if (place%2 === 1) {
        //check left Diagonal for line
        if(place%4 === 1){
            if (document.getElementById(place%2).src === document.getElementById(place%2 + 4).src && document.getElementById(place%2).src === document.getElementById(place%2 + 8).src) {
                if (numOfClicks % 2 === 1) {
                    document.getElementById(place%2).src = "images/Green_X.png";
                    document.getElementById(place%2 + 4).src = "images/Green_X.png";
                    document.getElementById(place%2 + 8).src = "images/Green_X.png";
                    haveLine = true;
                } else {
                    document.getElementById(place%2).src = "images/Green_O.png";
                    document.getElementById(place%2 + 4).src = "images/Green_O.png";
                    document.getElementById(place%2 + 8).src = "images/Green_O.png";
                    haveLine = true;
                }
            }
        }
        //check right Diagonal for line
        else{
            if (document.getElementById(place%2 + 2).src === document.getElementById(place%2 + 4).src && document.getElementById(place%2 + 2).src === document.getElementById(place%2 + 6).src) {
                if (numOfClicks % 2 === 1) {
                    document.getElementById(place%2 + 2).src = "images/Green_X.png";
                    document.getElementById(place%2 + 4).src = "images/Green_X.png";
                    document.getElementById(place%2 + 6).src = "images/Green_X.png";
                    haveLine = true;
                } else {
                    document.getElementById(place%2 + 2).src = "images/Green_O.png";
                    document.getElementById(place%2 + 4).src = "images/Green_O.png";
                    document.getElementById(place%2 + 6).src = "images/Green_O.png";
                    haveLine = true;
                }
            }
        }
        //cech right Diagonal for line if clicked in middle place 5
        if (place === 5){
            if (document.getElementById(place%2 + 2).src === document.getElementById(place%2 + 4).src && document.getElementById(place%2 + 2).src === document.getElementById(place%2 + 6).src) {
                if (numOfClicks % 2 === 1) {
                    document.getElementById(place%2 + 2).src = "images/Green_X.png";
                    document.getElementById(place%2 + 4).src = "images/Green_X.png";
                    document.getElementById(place%2 + 6).src = "images/Green_X.png";
                    haveLine = true;
                } else {
                    document.getElementById(place%2 + 2).src = "images/Green_O.png";
                    document.getElementById(place%2 + 4).src = "images/Green_O.png";
                    document.getElementById(place%2 + 6).src = "images/Green_O.png";
                    haveLine = true;
                }
            }
        }
    }
}