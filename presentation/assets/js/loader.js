window.onload = function() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    for (i = 0; i < document.getElementsByClassName("xCategory_tip").length; i++) {
      document.getElementsByClassName("xCategory_tip")[i].style.opacity = "1";
    }
    presentation_showPage();
  } else {
    document.getElementById('zContextMenuTip').style.opacity = "1";
    FSNotice_checkFullscreen_and_Load();
    zContextMenu_createElement();
  }
}