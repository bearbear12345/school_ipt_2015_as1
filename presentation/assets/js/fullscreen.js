function FSNotice_dismiss() {
  document.getElementById("xFS_Notice_bg").style.display = "none";
  document.getElementById("xFS_Notice").style.display = "none";
  presentation_showPage();
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
  if (!(navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0)) {
    if (!window.fullScreen && sessionStorage.getItem("zFullscreenPrompt") != "never") {
      document.getElementById("xFS_Notice_bg").style.display = "inline";
      document.getElementById("xFS_Notice").style.display = "inline";
    } else {
      presentation_showPage();
    }
  } else {
    presentation_showPage();
  }
}