function util_enterFullscreen() {
  var element = document.documentElement;
  try {
    element.mozRequestFullScreen();
    element.webkitRequestFullScreen();
    element.requestFullscreen();
    element.msRequestFullscreen();
  } catch (e) {}
}

function util_exitFullscreen() {
  var element = document.documentElement;
  try {
    element.mozCancelFullScreen();
    element.webkitExitFullScreen();
    element.exitFullscreen();
    element.msExitFullscreen();
  } catch (e) {}
}

function FSNotice_dismiss() {
  document.getElementById("xFS_Notice_bg").style.display = "none";
  document.getElementById("xFS_Notice").style.display = "none";
  showPage();
}

function FSNotice_accept() {
  util_enterFullscreen();
  FSNotice_dismiss();
}

function FSNotice_deny() {
  sessionStorage.setItem("zFullscreenPrompt", "never");
  FSNotice_dismiss();
}

function FSNotice_checkFullscreen_and_Load() {
  if (!window.fullScreen && sessionStorage.getItem("zFullscreenPrompt") != "never") {
    document.getElementById("xFS_Notice_bg").style.display = "inline";
    document.getElementById("xFS_Notice").style.display = "inline";
  } else {
    showPage();
  }
}