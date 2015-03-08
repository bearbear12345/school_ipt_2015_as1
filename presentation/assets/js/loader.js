window.onload = function() {
  FSNotice_checkFullscreen_and_Load();
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById("zContextMenuTip").innerHTML = "";
	for (i=0;i<document.getElementsByClassName("xCategory_tip").length;i++){
	  document.getElementsByClassName("xCategory_tip")[i].style.opacity=1;
	}
  } else {
    zContextMenu_createElement();
  }
}