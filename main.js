var circle = document.getElementById('circleBase');
var menu1 = document.getElementById('menu1');
var subMenu1 = menu1.childNodes[2];
var menu4 = document.getElementById('menu4');
var subMenu4 = menu4.childNodes[2];
var menu8 = document.getElementById('menu8');
var subMenu8 = menu8.childNodes[2];
var originX = 20;
var originY = 20;
var menu_width = 102;
var menu_height = 30;
var isMouseDown = false;
var isActiveMenu1 = false;
var isActiveMenu4 = false;
var isActiveMenu8 = false;

var isShowedMenu1 = false;
var isShowedMenu4 = false;
var isShowedMenu8 = false;

var modeFix = false;
var modeMove = false;

var isInmenu1 = false;
var isInmenu4 = false;
var isInmenu8 = false;

menu1.onmouseenter = function() {
    //subMenu1.style.display = "none";
    if (subMenu1.style.left == "") {
        console.log("null");
    }
    //console.log(subMenu1.style.left, subMenu1.style.top);
    isInmenu1 = true;
}
menu1.onmouseleave = function() {
    isInmenu1 = false;
}

menu4.onmouseenter = function() {
    //subMenu1.style.display = "none";
    if (subMenu4.style.left == "") {
        console.log("null");
    }
    //console.log(subMenu1.style.left, subMenu1.style.top);
    isInmenu4 = true;
}
menu4.onmouseleave = function() {
    isInmenu4 = false;
}

menu8.onmouseenter = function() {
    //subMenu1.style.display = "none";
    if (subMenu8.style.left == "") {
        console.log("null");
    }
    //console.log(subMenu1.style.left, subMenu1.style.top);
    isInmenu8 = true;
}
menu8.onmouseleave = function() {
    isInmenu8 = false;
}









document.addEventListener("mousedown", handleMouseDown);
document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("mouseup", handleMouseUp);

function handleMouseDown(event) {

    console.log(event.pageX, event.pageY);
    isMouseDown = true;
    subMenu1.style.display = "none";
    subMenu4.style.display = "none";
    subMenu8.style.display = "none";


    if((isInmenu1 || isInmenu4 || isInmenu8) && modeMove == false) {
        modeFix = true;
        return;
    }
    if(!(isInmenu1 || isInmenu4 || isInmenu8) && modeFix == false){
        modeMove = true;
        handleMouseMove(event);
        circle.style.visibility = "visible";

        return;
    }
    //   if(isInmenu1){
    //     subMenu1.style.display = "block";
    //     isShowedMenu1 = true;
    //   }
    //   if(isInmenu4){
    //     subMenu4.style.display = "block";
    //     isShowedMenu4 = true;
    //   }
    //   if(isInmenu8){
    //     subMenu8.style.display = "block";
    //     isShowedMenu8 = true;
    //   }
    //   modeFix = true;
    //   return;
    // }
    // if(!isInmenu1 && !isInmenu4 && !isInmenu8 && modeFix == false){
    //   modeMove = true;
    //   handleMouseMove(event);
    //   circle.style.visibility = "visible";
    //   return;
    // }
    //
    // if(isInmenu1 && modeFix == true){
    //   if(isShowedMenu1){
    //      isShowedMenu1 = false;
    //      modeFix = false;
    //    }
    //   else{
    //      isShowedMenu4 = false;
    //      isShowedMenu8 = false;
    //      subMenu1.style.display = "block";
    //    }
    //   return;
    // }
    // if(isInmenu4 && modeFix == true){
    //   if(isShowedMenu4){
    //      isShowedMenu4 = false;
    //      modeFix = false;
    //    }
    //   else{
    //      isShowedMenu1 = false;
    //      isShowedMenu8 = false;
    //      subMenu4.style.display = "block";
    //    }
    //   return;
    // }
    // if(isInmenu8 && modeFix == true){
    //   if(isShowedMenu8){
    //      isShowedMenu8 = false;
    //      modeFix = false;
    //    }
    //   else{
    //      isShowedMenu4 = false;
    //      isShowedMenu1 = false;
    //      subMenu8.style.display = "block";
    //    }
    //   return;
    // }
    //   //click in the blank space
    // else{
    //   isShowedMenu8 = false;
    //   isShowedMenu4 = false;
    //   isShowedMenu1 = false;
    //   modeFix = false;
    //   return;
    // }

}

function handleMouseUp(event) {
    isMouseDown = false;

      modeMove = false;
      modeFix = false;

    circle.style.visibility = "hidden";
    menu1.style.background = "#DDA0DD";
    if (isActiveMenu1) {
        disactiveSubMenu(subMenu1);
        menu1.style.background = "#DDA0DD";
        isActiveMenu1 = false;
    }
    if (isActiveMenu4) {
        disactiveSubMenu(subMenu4);
        menu4.style.background = "#DDA0DD";
        isActiveMenu4 = false;
    }
    if (isActiveMenu8) {
        disactiveSubMenu(subMenu8);
        menu8.style.background = "#DDA0DD";
        isActiveMenu8 = false;
    }
}

function handleMouseMove(event) {
    if (isMouseDown == true && modeMove == true) {
        var capturedPoint = getPointCapturedByBubbleCursor(event);
        var currentPoint = [event.pageX, event.pageY];
        var radius = distance(capturedPoint, currentPoint);
        circle.style.width = (2 * radius) + "px";
        circle.style.height = (2 * radius) + "px";
        circle.style.left = (event.pageX - radius) + "px";
        circle.style.top = (event.pageY - radius) + "px";
        if (isActiveMenu1) {
            activeSubMenu(subMenu1);
            menu1.style.background = "#9400D3";
            subMenu4.style.display = "none";
            subMenu8.style.display = "none";
        }
        if (isActiveMenu4) {
            activeSubMenu(subMenu4);
            menu4.style.background = "#9400D3";
            subMenu1.style.display = "none";
            subMenu8.style.display = "none";
        }
        if (isActiveMenu8) {
            activeSubMenu(subMenu8);
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

}




//tool functions
function distance(ptA, ptB) {
    var diff = [ptB[0] - ptA[0], ptB[1] - ptA[1]];
    return Math.sqrt(diff[0] * diff[0] + diff[1] * diff[1]);
}





function activeSubMenu(submenu) {
    submenu.style.display = "block";
    if (submenu === subMenu1) {
        submenu.style.left = (event.pageX - originX) + "px";
        submenu.style.top = (event.pageY - originY) + "px";
    }
    if (submenu === subMenu4) {
        submenu.style.left = (event.pageX - originX - 3 * menu_width) + "px";
        submenu.style.top = (event.pageY - originY) + "px";
    }
    if (submenu === subMenu8) {
        submenu.style.left = (event.pageX - originX - 7 * menu_width) + "px";
        submenu.style.top = (event.pageY - originY) + "px";
    }

}

function disactiveSubMenu(submenu) {
    submenu.style.display = "none";
    submenu.style.left = "";
    submenu.style.top = "";
}

function getLineCapturedByBubbleCursor(event){
  
}

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
