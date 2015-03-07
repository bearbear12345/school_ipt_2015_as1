function zContextMenu_createElement() {

  zContextMenu = document.createElement("div");

  zContextMenu.id = "zContextMenu";
  zContextMenu.innerHTML = "HIBOIS";
  zContextMenu.style.display = "none";
  document.getElementsByTagName('body')[0].appendChild(zContextMenu);
}

function zContextMenu_getMouseX(evt) {
  if (evt.pageX) {
    return evt.pageX;
  } else if (evt.clientX) {
    return evt.clientX + (document.documentElement.scrollLeft ?
      document.documentElement.scrollLeft :
      document.body.scrollLeft);
  } else {
    return null;
  }
}

function zContextMenu_getMouseY(evt) {
  if (evt.pageY) {
    return evt.pageY;
  } else if (evt.clientY) {
    return evt.clientY + (document.documentElement.scrollTop ?
      document.documentElement.scrollTop :
      document.body.scrollTop);
  } else {
    return null;
  }
}

document.oncontextmenu = function(e) {
  e.preventDefault();
  document.getElementById("zContextMenu").style.top = zContextMenu_getMouseY(e)
  document.getElementById("zContextMenu").style.left = zContextMenu_getMouseX(e);
  document.getElementById("zContextMenu").style.display = "inline";
}
document.onclick = function() {
  document.getElementById("zContextMenu").style.display = "none";
}