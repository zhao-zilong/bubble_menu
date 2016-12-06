var circle = document.getElementById('circleBase');
var menu1 = document.getElementById('menu1');
var subMenu1 = menu1.childNodes[2];
var deepMenu1 = subMenu1.children[1].children[1];
var deepMenu2 = subMenu1.children[7].children[1];
var subdeep1 = deepMenu2.children[0].children[1];
//var subdeep2 = deepMenu2.children[4].children[1];


var menu4 = document.getElementById('menu4');
var subMenu4 = menu4.childNodes[2];
var deepMenu4 = subMenu4.children[1].children[1];


var menu8 = document.getElementById('menu8');
var subMenu8 = menu8.childNodes[2];
var originX = 150;
var originY = 20;
var menu_width = 102;
var menu_height = 32;

var pointLast = [10000,10000];
var pointCurrent = [10000,10000];
var pointFloat = [0,0];



var isMouseDown = false;

var isActiveMenu1 = false;
var isActiveMenu4 = false;
var isActiveMenu8 = false;

var isActiveSubMenu11 = false;
var isActiveSubMenu12 = false;

var isActiveSubDeep11 = false;
var isActiveSubDeep12 = false;

var isSubDeepItem1 = false;
var isSubDeepItem2 = false;




var isActiveSubMenu41 = false;
var isActiveSubDeep41 = false;

var isActiveSubMenu81 = false;


var isActiveFloatMenu = false;


var isShowedMenu1 = false;
var isShowedMenu4 = false;
var isShowedMenu8 = false;

var modeFix = false;
var modeMove = false;

var isInmenu1 = false;
var isInmenu4 = false;
var isInmenu8 = false;

// menu1.onmouseenter = function() {
//     isInmenu1 = true;
// }
// menu1.onmouseleave = function() {
//     isInmenu1 = false;
// }
//
// menu4.onmouseenter = function() {
//     isInmenu4 = true;
// }
// menu4.onmouseleave = function() {
//     isInmenu4 = false;
// }
//
// menu8.onmouseenter = function() {
//     isInmenu8 = true;
// }
// menu8.onmouseleave = function() {
//     isInmenu8 = false;
// }









document.addEventListener("mousedown", handleMouseDown);
document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("mouseup", handleMouseUp);

function handleMouseDown(event) {

    console.log(event.pageX, event.pageY);
    isMouseDown = true;
    isActiveFloatMenu = false;
    pointLast = [10000,10000];
    pointCurrent = [10000,10000];
    pointFloat = [10000,10000];
    subMenu1.style.display = "none";
    subMenu4.style.display = "none";
    subMenu8.style.display = "none";

    IsInMenu(event);
    if ((isInmenu1 || isInmenu4 || isInmenu8) && modeMove == false) {
        modeFix = true;
        if (isInmenu1) {
            isShowedMenu1 = true;
            menu1.style.background = "#9400D3";
            subMenu1.style.display = "block";
        }
        if (isInmenu4) {
            isShowedMenu4 = true;
            menu4.style.background = "#9400D3";
            subMenu4.style.display = "block";
        }
        if (isInmenu8) {
            isShowedMenu8 = true;
            menu8.style.background = "#9400D3";
            subMenu8.style.display = "block";
        }
        console.log("initial");
        return;
    }
    if (!(isInmenu1 || isInmenu4 || isInmenu8) && modeFix == false) {
        modeMove = true;
        modeFix = false;
        handleMouseMove(event);
        circle.style.visibility = "visible";
        console.log("big circle");
        return;
    } else {
        isShowedMenu1 = false;
        isShowedMenu4 = false;
        isShowedMenu8 = false;
        console.log("recover");
    }
}

function handleMouseUp(event) {
    isMouseDown = false;

    modeMove = false;

    originX = 150;
    originY = 20;

    isInmenu1 = false;
    isInmenu4 = false;
    isInmenu8 = false;
    circle.style.visibility = "hidden";
    if (isActiveMenu1 && isActiveFloatMenu == false) {
        disactiveSubMenu(subMenu1);
        menu1.style.background = "#DDA0DD";
        isActiveMenu1 = false;
    }
    if (isActiveMenu4 && isActiveFloatMenu == false) {
        disactiveSubMenu(subMenu4);
        menu4.style.background = "#DDA0DD";
        isActiveMenu4 = false;
    }
    if (isActiveMenu8 && isActiveFloatMenu == false) {
        disactiveSubMenu(subMenu8);
        menu8.style.background = "#DDA0DD";
        isActiveMenu8 = false;
    }



    if (isActiveSubMenu11) {
        if (!isShowedMenu1) {
            disactiveSubMenu(deepMenu1);
            subMenu1.children[1].children[0].style.background = "#DDA0DD";
            menu1.style.background = "#DDA0DD";
            isActiveSubMenu11 = false;
            modeFix = false;
        }

    }
    if (isActiveSubMenu12) {
        if (!isShowedMenu1) {
            disactiveSubMenu(deepMenu2);
            subMenu1.children[7].children[0].style.background = "#DDA0DD";
            menu1.style.background = "#DDA0DD";
            isActiveSubMenu12 = false;
            modeFix = false;
        }

    }

    if (isActiveSubMenu41) {
        if (!isShowedMenu4) {
            disactiveSubMenu(deepMenu4);
            subMenu4.children[1].children[0].style.background = "#DDA0DD";
            menu4.style.background = "#DDA0DD";
            isActiveSubMenu41 = false;
            modeFix = false;
        }
    }

    if (isActiveSubMenu81) {
        if (!isShowedMenu8) {
            subMenu8.children[4].children[0].style.background = "#DDA0DD";
            menu8.style.background = "#DDA0DD";
            isActiveSubMenu81 = false;
            modeFix = false;
        }
    }

    if (isActiveSubDeep11) {
        if (!isShowedMenu1) {
            disactiveSubMenu(subdeep1);
            deepMenu2.children[0].children[0].style.background = "#DDA0DD";
            isActiveSubDeep11 = false;
            modeFix = false;
        }
    }

    if (isActiveSubDeep12) {
        if (!isShowedMenu1) {
            //            disactiveSubMenu(subdeep2);
            deepMenu2.children[4].children[0].style.background = "#DDA0DD";
            isActiveSubDeep12 = false;
            modeFix = false;
        }
    }

    if (isActiveSubDeep41) {
        if (!isShowedMenu4) {
            //            disactiveSubMenu(subdeep4);
            deepMenu4.children[4].children[0].style.background = "#DDA0DD";
            isActiveSubDeep41 = false;
            modeFix = false;
        }
    }


    if (isSubDeepItem1) {
        if (!isShowedMenu1) {
            disactiveSubMenu(subdeep1);
            subdeep1.children[0].children[0].style.background = "#DDA0DD";
            isSubDeepItem1 = false;
            modeFix = false;
        }
    }

    if (isSubDeepItem2) {
        if (!isShowedMenu1) {
            subdeep1.children[3].children[0].style.background = "#DDA0DD";
            isSubDeepItem2 = false;
            modeFix = false;
        }
    }






}

function handleMouseMove(event) {
    if (isMouseDown == true && modeMove == true && isActiveFloatMenu == false) {
        var capturedPoint = getPointCapturedByBubbleCursor(event);
        var currentPoint = [event.pageX, event.pageY];
        var radius = distance(capturedPoint, currentPoint);
        console.log(radius);
        circle.style.width = (2 * radius) + "px";
        circle.style.height = (2 * radius) + "px";
        circle.style.left = (event.pageX - radius) + "px";
        circle.style.top = (event.pageY - radius) + "px";

        pointLast = [pointCurrent[0],pointCurrent[1]];
        pointCurrent = [event.pageX, event.pageY];
        if(pointCurrent[0] > pointLast[0] && pointCurrent[1] > pointLast[1]
           && isActiveFloatMenu == false){
            isActiveFloatMenu = true;
            pointFloat = [pointCurrent[0], pointCurrent[1]];
            console.log("float menu!");
        }
        if (isActiveMenu1) {
            activeSubMenu(subMenu1);
            isShowedMenu1 = true;
            menu1.style.background = "#9400D3";
            subMenu4.style.display = "none";
            subMenu8.style.display = "none";
        }
        if (isActiveMenu4) {
            activeSubMenu(subMenu4);
            isShowedMenu4 = true;
            menu4.style.background = "#9400D3";
            subMenu1.style.display = "none";
            subMenu8.style.display = "none";
        }
        if (isActiveMenu8) {
            activeSubMenu(subMenu8);
            isShowedMenu8 = true;
            menu8.style.background = "#9400D3";
            subMenu4.style.display = "none";
            subMenu1.style.display = "none";
        }
        if (!isActiveMenu1) {
            disactiveSubMenu(subMenu1);
            menu1.style.background = "#DDA0DD";
        }
        if (!isActiveMenu4) {
            disactiveSubMenu(subMenu4);
            menu4.style.background = "#DDA0DD";
        }
        if (!isActiveMenu8) {
            disactiveSubMenu(subMenu8);
            menu8.style.background = "#DDA0DD";
        }

    }
    if (isMouseDown == true && (modeFix == true || isActiveFloatMenu == true) && isShowedMenu1) {
        circle.style.visibility = "visible";
        var capturedPoint = getMenuCapturedByBubbleCursor(event);
        var currentPoint = [event.pageX, event.pageY];
        var radius = distance(capturedPoint, currentPoint);
        console.log(radius);
        circle.style.width = (2 * radius) + "px";
        circle.style.height = (2 * radius) + "px";
        circle.style.left = (event.pageX - radius) + "px";
        circle.style.top = (event.pageY - radius) + "px";

        if (isActiveSubMenu11) {
            activeSubMenu(deepMenu1);
            //subMenu1.children[1].children[0].style.display = "block";
            subMenu1.children[1].children[0].style.background = "#9400D3";
            //deepMenu1.style.background = "#9400D3";
        }
        if (isActiveSubMenu12) {
            activeSubMenu(deepMenu2);
            subMenu1.children[7].children[0].style.background = "#9400D3";
        }
        if (!isActiveSubMenu11) {
            disactiveSubMenu(deepMenu1);
            subMenu1.children[1].children[0].style.background = "#DDA0DD";
        }
        if (!isActiveSubMenu12) {
            isActiveSubDeep11 = false;
            isActiveSubDeep12 = false;
            disactiveSubMenu(deepMenu2);
            subMenu1.children[7].children[0].style.background = "#DDA0DD";
        }



        if (isActiveSubDeep11) {
            activeSubMenu(subdeep1);
            //subMenu1.children[1].children[0].style.display = "block";
            //deepMenu1.children[0].children[0].style.display = "block";
            deepMenu2.children[0].children[0].style.background = "#9400D3";
            //deepMenu1.style.background = "#9400D3";
        }
        if (isActiveSubDeep12) {
            //activeSubMenu(subdeep2);
            //deepMenu1.children[4].children[0].style.display = "block";
            deepMenu2.children[4].children[0].style.background = "#9400D3";
        }
        if (!isActiveSubDeep11) {
            disactiveSubMenu(subdeep1);
            isSubDeepItem1 = false;
            isSubDeepItem2 = false;
            //subMenu1.children[1].children[0].style.display = "block";
            deepMenu2.children[0].children[0].style.background = "#DDA0DD";
            //deepMenu1.style.background = "#9400D3";
        }
        if (!isActiveSubDeep12) {
            //disactiveSubMenu(subdeep2);
            deepMenu2.children[4].children[0].style.background = "#DDA0DD";
        }





        if (isSubDeepItem1) {
            subdeep1.children[0].children[0].style.background = "#9400D3";
        }
        if (isSubDeepItem2) {
            subdeep1.children[3].children[0].style.background = "#9400D3";
        }
        if (!isSubDeepItem1) {
            subdeep1.children[0].children[0].style.background = "#DDA0DD";
        }
        if (!isSubDeepItem2) {
            subdeep1.children[3].children[0].style.background = "#DDA0DD";
        }


    }
    if (isMouseDown == true && (modeFix == true || isActiveFloatMenu == true) && isShowedMenu4) {
        circle.style.visibility = "visible";
        var capturedPoint = getMenuCapturedByBubbleCursor(event);
        var currentPoint = [event.pageX, event.pageY];
        var radius = distance(capturedPoint, currentPoint);
        circle.style.width = (2 * radius) + "px";
        circle.style.height = (2 * radius) + "px";
        circle.style.left = (event.pageX - radius) + "px";
        circle.style.top = (event.pageY - radius) + "px";
        if (isActiveSubMenu41) {
            activeSubMenu(deepMenu4);
            subMenu4.children[1].children[0].style.background = "#9400D3";
        }
        if (!isActiveSubMenu41) {
            disactiveSubMenu(deepMenu1);
            subMenu4.children[1].children[0].style.background = "#DDA0DD";
        }
        if (isActiveSubDeep41) {
            deepMenu4.children[4].children[0].style.background = "#9400D3";
        }
        if (!isActiveSubDeep41) {
            deepMenu4.children[4].children[0].style.background = "#DDA0DD";
        }

    }
    if (isMouseDown == true && (modeFix == true || isActiveFloatMenu == true) && isShowedMenu8) {
        circle.style.visibility = "visible";
        var capturedPoint = getMenuCapturedByBubbleCursor(event);
        var currentPoint = [event.pageX, event.pageY];
        var radius = distance(capturedPoint, currentPoint);
        circle.style.width = (2 * radius) + "px";
        circle.style.height = (2 * radius) + "px";
        circle.style.left = (event.pageX - radius) + "px";
        circle.style.top = (event.pageY - radius) + "px";
        if (isActiveSubMenu81) {
            subMenu8.children[4].children[0].style.background = "#9400D3";
        }
        if (!isActiveSubMenu81) {
            subMenu8.children[4].children[0].style.background = "#DDA0DD";
        }


    }

}




//tool functions
function distance(ptA, ptB) {
    var diff = [ptB[0] - ptA[0], ptB[1] - ptA[1]];
    return Math.sqrt(diff[0] * diff[0] + diff[1] * diff[1]);
}

function IsInMenu(event){

      if(event.pageX >= originX && event.pageX <= originX + menu_width
      && event.pageY >= originY && event.pageY <= originY + menu_height)
      {
         isInmenu1 = true;
         isInmenu4 = false;
         isInmenu8 = false;

      }
      if(event.pageX >= originX + 3*menu_width && event.pageX <= originX + 4*menu_width
      && event.pageY >= originY && event.pageY <= originY + menu_height)
      {
         isInmenu4 = true;
         isInmenu1 = false;
         isInmenu8 = false;
      }
      if(event.pageX >= originX + 7*menu_width && event.pageX <= originX + 8*menu_width
      && event.pageY >= originY && event.pageY <= originY + menu_height)
      {
         isInmenu8 = true;
         isInmenu1 = false;
         isInmenu4 = false;
      }
}



function activeSubMenu(submenu) {
    submenu.style.display = "block";
    if (submenu === subMenu1 && modeMove == true) {
        submenu.style.left = (event.pageX - originX) + "px";
        submenu.style.top = (event.pageY - originY) + "px";
    }
    if (submenu === subMenu4 && modeMove == true) {
        submenu.style.left = (event.pageX - originX - 3 * menu_width) + "px";
        submenu.style.top = (event.pageY - originY) + "px";
    }
    if (submenu === subMenu8 && modeMove == true) {
        submenu.style.left = (event.pageX - originX - 7 * menu_width) + "px";
        submenu.style.top = (event.pageY - originY) + "px";
    }

}

function disactiveSubMenu(submenu) {
    submenu.style.display = "none";
    submenu.style.left = "";
    submenu.style.top = "";
}


function getMenuCapturedByBubbleCursor(event) {
    var point = [];
    if (isShowedMenu1) {
        if(isActiveFloatMenu == true){
          originX = pointFloat[0];
          originY = pointFloat[1] - menu_height;
          modeFix = true;
          modeMove = false;
        }
        if (event.pageX <= originX + menu_width) {
            if (event.pageY <= originY + 2 * menu_height) {
                if (event.pageX < originX) {
                    point = [originX, originY + 2 * menu_height];
                } else {
                    point = [event.pageX, originY + 2 * menu_height];
                }
                isActiveSubMenu11 = true;
                isActiveSubMenu12 = false;
                return point;
            }
            if (event.pageY > originY + 2 * menu_height && event.pageY <= originY + 3 * menu_height) {
                if (event.pageX < originX) {
                    point = [originX, event.pageY];
                } else {
                    point = [event.pageX, event.pageY];
                }
                isActiveSubMenu11 = true;
                isActiveSubMenu12 = false;
                return point;
            }
            if (event.pageY > originY + 3 * menu_height && event.pageY <= originY + 8 * menu_height + 16 &&
                (event.pageY - originY - 3 * menu_height) <= (originY + 8 * menu_height + 16 - event.pageY)) {
                if (event.pageX < originX) {
                    point = [originX, originY + 3 * menu_height];
                } else {
                    point = [event.pageX, originY + 3 * menu_height];
                }
                isActiveSubMenu11 = true;
                isActiveSubMenu12 = false;
                return point;
            }
            if (event.pageY > originY + 3 * menu_height && event.pageY <= originY + 8 * menu_height + 16 &&
                (event.pageY - originY - 3 * menu_height) > (originY + 8 * menu_height + 16 - event.pageY)) {
                if (event.pageX < originX) {
                    point = [originX, originY + 8 * menu_height + 16];
                } else {
                    point = [event.pageX, originY + 8 * menu_height + 16];
                }
                isActiveSubMenu11 = false;
                isActiveSubMenu12 = true;
                return point;
            }
            if (event.pageY > originY + 8 * menu_height + 16 && event.pageY <= originY + 9 * menu_height + 18) {
                if (event.pageX < originX) {
                    point = [originX, event.pageY];
                } else {
                    point = [event.pageX, event.pageY];
                }
                isActiveSubMenu11 = false;
                isActiveSubMenu12 = true;
                return point;
            }
            if (event.pageY > originY + 9 * menu_height + 18) {
                if (event.pageX < originX) {
                    point = [originX, originY + 9 * menu_height + 18];
                } else {
                    point = [event.pageX, originY + 9 * menu_height + 18];
                }
                isActiveSubMenu11 = false;
                isActiveSubMenu12 = true;
                return point;
            }
        }
        if (event.pageX > originX + menu_width && event.pageX <= originX + 2 * menu_width) {
            if (event.pageY <= originY + 8 * menu_height + 16) {
                point = [event.pageX, originY + 8 * menu_height + 16];
                isActiveSubDeep11 = true;
                isActiveSubDeep12 = false;
                return point;
            }
            if (event.pageY > originY + 8 * menu_height + 16 && event.pageY <= originY + 9 * menu_height + 18) {
                point = [event.pageX, event.pageY];
                isActiveSubDeep11 = true;
                isActiveSubDeep12 = false;
                return point;
            }
            if (event.pageY > originY + 9 * menu_height + 18 && event.pageY <= originY + 12 * menu_height + 24 &&
                (event.pageY - originY - 9 * menu_height - 18) <= (originY + 12 * menu_height + 24 - event.pageY)) {
                point = [event.pageX, originY + 9 * menu_height + 18];
                isActiveSubDeep11 = true;
                isActiveSubDeep12 = false;
                return point;
            }
            if (event.pageY > originY + 9 * menu_height + 18 && event.pageY <= originY + 12 * menu_height + 24 &&
                (event.pageY - originY - 9 * menu_height - 18) > (originY + 12 * menu_height + 24 - event.pageY)) {
                point = [event.pageX, originY + 12 * menu_height + 24];
                isActiveSubDeep11 = false;
                isActiveSubDeep12 = true;
                return point;
            }
            if (event.pageY > originY + 12 * menu_height + 24 && event.pageY <= originY + 13 * menu_height + 26) {
                point = [event.pageX, event.pageY];
                isActiveSubDeep11 = false;
                isActiveSubDeep12 = true;
                return point;
            }
            if (event.pageY > originY + 13 * menu_height + 26) {
                point = [event.pageX, originY + 13 * menu_height + 26];
                isActiveSubDeep11 = false;
                isActiveSubDeep12 = true;
                return point;
            }

        }
        if (event.pageX > originX + 2 * menu_width) {
            if (event.pageY <= originY + 8 * menu_height + 14) {
                if (event.pageX > originX + 3 * menu_width) {
                    point = [originX + 3 * menu_width, originY + 8 * menu_height + 14];
                } else {
                    point = [event.pageX, originY + 8 * menu_height + 14];
                }

                isSubDeepItem1 = true;
                isSubDeepItem2 = false;
                return point;
            }
            if (event.pageY > originY + 8 * menu_height + 14 && event.pageY <= originY + 9 * menu_height + 16) {
                if (event.pageX > originX + 3 * menu_width) {
                    point = [originX + 3 * menu_width, event.pageY];
                } else {
                    point = [event.pageX, event.pageY];
                }
                isSubDeepItem1 = true;
                isSubDeepItem2 = false;
                return point;
            }
            if (event.pageY > originY + 9 * menu_height + 16 && event.pageY <= originY + 11 * menu_height + 22 &&
                (event.pageY - originY - 9 * menu_height - 16) <= (originY + 11 * menu_height + 22 - event.pageY)) {
                if (event.pageX > originX + 3 * menu_width) {
                    point = [originX + 3 * menu_width, originY + 9 * menu_height + 16];
                } else {
                    point = [event.pageX, originY + 9 * menu_height + 16];
                }
                isSubDeepItem1 = true;
                isSubDeepItem2 = false;
                return point;
            }
            if (event.pageY > originY + 9 * menu_height + 16 && event.pageY <= originY + 11 * menu_height + 22 &&
                (event.pageY - originY - 9 * menu_height - 16) > (originY + 11 * menu_height + 22 - event.pageY)) {
                if (event.pageX > originX + 3 * menu_width) {
                    point = [originX + 3 * menu_width, originY + 11 * menu_height + 22];
                } else {
                    point = [event.pageX, originY + 11 * menu_height + 22];
                }

                isSubDeepItem1 = false;
                isSubDeepItem2 = true;
                return point;
            }
            if (event.pageY > originY + 11 * menu_height + 22 && event.pageY <= originY + 12 * menu_height + 24) {
                if (event.pageX > originX + 3 * menu_width) {
                    point = [originX + 3 * menu_width, event.pageY];
                } else {
                    point = [event.pageX, event.pageY];
                }
                isSubDeepItem1 = false;
                isSubDeepItem2 = true;
                return point;
            }
            if (event.pageY > originY + 12 * menu_height + 24) {
                if (event.pageX > originX + 3 * menu_width) {
                    point = [originX + 3 * menu_width, originY + 12 * menu_height + 24];
                } else {
                    point = [event.pageX, originY + 12 * menu_height + 24];
                }
                isSubDeepItem1 = false;
                isSubDeepItem2 = true;
                return point;
            }

        }

    }
    if (isShowedMenu4) {
        if(isActiveFloatMenu == true){
          originX = pointFloat[0] - 3 * menu_width;
          originY = pointFloat[1] - menu_height;
          modeFix = true;
          modeMove = false;
        }
        if (event.pageX <= originX + 4 * menu_width) {
            if (event.pageY <= originY + 2 * menu_height + 4) {
                if (event.pageX < originX + 3 * menu_width) {
                    point = [originX + 3 * menu_width, originY + 2 * menu_height];
                } else {
                    point = [event.pageX, originY + 2 * menu_height + 4];
                }
                isActiveSubMenu41 = true;
                return point;
            }
            if (event.pageY > originY + 2 * menu_height + 4 && event.pageY <= originY + 3 * menu_height + 6) {
                if (event.pageX < originX + 3 * menu_width) {
                    point = [originX + 3 * menu_width, event.pageY];
                } else {
                    point = [event.pageX, event.pageY];
                }
                isActiveSubMenu41 = true;
                return point;
            }
            if (event.pageY > originY + 3 * menu_height + 6) {
                if (event.pageX < originX + 3 * menu_width) {
                    point = [originX + 3 * menu_width, originY + 3 * menu_height + 6];
                } else {
                    point = [event.pageX, originY + 3 * menu_height + 6];
                }
                isActiveSubMenu41 = true;
                return point;
            }
        }
        if (event.pageX > originX + 4 * menu_width) {
            if (event.pageY <= originY + 6 * menu_height + 12) {
                if (event.pageX > originX + 5 * menu_width) {
                    point = [originX + 5 * menu_width, originY + 6 * menu_height + 12];
                } else {
                    point = [event.pageX, originY + 6 * menu_height + 12];
                }
                isActiveSubDeep41 = true;
                return point;
            }
            if (event.pageY > originY + 6 * menu_height + 12 && event.pageY <= originY + 7 * menu_height + 14) {
                if (event.pageX < originX + 5 * menu_width) {
                    point = [originX + 5 * menu_width, event.pageY];
                } else {
                    point = [event.pageX, event.pageY];
                }
                isActiveSubDeep41 = true;
                return point;
            }
            if (event.pageY > originY + 7 * menu_height + 14) {
                if (event.pageX < originX + 3 * menu_width) {
                    point = [originX + 5 * menu_width, originY + 7 * menu_height + 14];
                } else {
                    point = [event.pageX, originY + 7 * menu_height + 14];
                }
                isActiveSubDeep41 = true;
                return point;
            }
        }

    }
    if (isShowedMenu8) {
        if(isActiveFloatMenu == true){
          originX = pointFloat[0] - 7 * menu_width;
          originY = pointFloat[1] - menu_height;
          modeFix = true;
          modeMove = false;
        }
        if (event.pageY <= originY + 5 * menu_height + 10) {
            if (event.pageX < originX + 7 * menu_width) {
                point = [originX + 7 * menu_width, originY + 5 * menu_height + 10];
            } else if (event.pageX >= originX + 7 * menu_width && event.pageX < originX + 8 * menu_width) {
                point = [event.pageX, originY + 5 * menu_height + 10];
            } else {
                point = [originX + 8 * menu_width, originY + 5 * menu_height + 10];
            }
            isActiveSubMenu81 = true;
            return point;
        }
        if (event.pageY > originY + 5 * menu_height + 10 && event.pageY <= originY + 6 * menu_height + 12) {
            if (event.pageX < originX + 7 * menu_width) {
                point = [originX + 7 * menu_width, event.pageY];
            } else if (event.pageX >= originX + 7 * menu_width && event.pageX < originX + 8 * menu_width) {
                point = [event.pageX, event.pageY];
            } else {
                point = [originX + 8 * menu_width, event.pageY];
            }
            isActiveSubMenu81 = true;
            return point;
        }
        if (event.pageY > originY + 6 * menu_height + 12) {
            if (event.pageX < originX + 7 * menu_width) {
                point = [originX + 7 * menu_width, originY + 6 * menu_height + 12];
            } else if (event.pageX >= originX + 7 * menu_width && event.pageX < originX + 8 * menu_width) {
                point = [event.pageX, originY + 6 * menu_height + 12];
            } else {
                point = [originX + 8 * menu_width, originY + 6 * menu_height + 12];
            }
            isActiveSubMenu81 = true;
            return point;
        }
    }
}


// when we in the mode "modeMove", we have to find the closest point from mouse
function getPointCapturedByBubbleCursor(event) {
    var point = [];
    // mouse above menu
    if (event.pageY > originY + menu_height) {
        if (event.pageX <= originX) {
            point = [originX, originY + menu_height];
            isActiveMenu1 = true;
            isActiveMenu4 = false;
            isActiveMenu8 = false;
            return point;
        }
        if (event.pageX > originX && event.pageX <= originX + menu_width) {
            point = [event.pageX, originY + menu_height];
            isActiveMenu1 = true;
            isActiveMenu4 = false;
            isActiveMenu8 = false;
            return point;
        }
        if (event.pageX > originX + menu_width && event.pageX <= originX + 3 * menu_width) {
            if ((event.pageX - originX - menu_width) <= (originX + 3 * menu_width - event.pageX)) {
                point = [originX + menu_width, originY + menu_height];
                isActiveMenu1 = true;
                isActiveMenu4 = false;
                isActiveMenu8 = false;
                return point;
            } else {
                point = [originX + 3 * menu_width, originY + menu_height];
                isActiveMenu4 = true;
                isActiveMenu1 = false;
                isActiveMenu8 = false;
                return point;
            }
        }
        if (event.pageX > originX + 3 * menu_width && event.pageX <= originX + 4 * menu_width) {
            point = [event.pageX, originY + menu_height];
            isActiveMenu4 = true;
            isActiveMenu1 = false;
            isActiveMenu8 = false;
            return point;
        }
        if (event.pageX > originX + 4 * menu_width && event.pageX <= originX + 7 * menu_width) {
            if ((event.pageX - originX - 4 * menu_width) <= (originX + 7 * menu_width - event.pageX)) {
                point = [originX + 4 * menu_width, originY + menu_height];
                isActiveMenu4 = true;
                isActiveMenu1 = false;
                isActiveMenu8 = false;
                return point;
            } else {
                point = [originX + 7 * menu_width, originY + menu_height];
                isActiveMenu8 = true;
                isActiveMenu4 = false;
                isActiveMenu1 = false;
                return point;
            }
        }
        if (event.pageX > originX + 7 * menu_width && event.pageX <= originX + 8 * menu_width) {
            point = [event.pageX, originY + menu_height];
            isActiveMenu8 = true;
            isActiveMenu4 = false;
            isActiveMenu1 = false;
            return point;
        }
        if (event.pageX > originX + 8 * menu_width) {
            point = [originX + 8 * menu_width, originY + menu_height];
            isActiveMenu8 = true;
            isActiveMenu4 = false;
            isActiveMenu1 = false;
            return point;
        }
    }

}
