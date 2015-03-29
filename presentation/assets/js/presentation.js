function presentation_showPage() {
  document.getElementById("zWrapper").style.opacity = 1;
}

function presentation_goMainMenu() {
  document.getElementById("xCategory").style.opacity = "0";
  document.getElementById("zHomeIcon").style.opacity = 0.05;
  document.getElementById("xCategory_name").style.opacity = "0";
  presentation_themeColour("#BFBFBF");
  window.setTimeout(function() {
    document.getElementById("xCategory").style.display = "none";
    document.getElementById("xTiles").style.display = "block";
    document.getElementById("xTiles").style.opacity = "1"
  }, 400)
}

function presentation_selectCategory(elem) {
  document.getElementById("xTiles").style.opacity = "0";
  for (i = 0; i < (elems = ["xCategoryOne", "xCategoryTwo", "xCategoryThree", "xCategoryFour"]).length; i++) {
    if (elems[i] != elem.id.slice(0, -4)) {
      document.getElementById(elems[i]).style.opacity = "0";
      document.getElementById(elems[i]).style.display = "none";
    }
  }
  presentation_themeColour("rgba" + window.getComputedStyle(document.getElementById(elem.id)).backgroundColor.slice(3, -1) + ", 0.5)");
  document.getElementById("zHomeIcon").style.opacity = 1;
  document.getElementById("xCategory_name").innerHTML = document.getElementById(elem.id).innerHTML;
  document.getElementById("xCategory_name").style.backgroundColor = window.getComputedStyle(document.getElementById(elem.id)).backgroundColor;
  window.setTimeout(function() {
    document.getElementById("xTiles").style.display = "none";
    document.getElementById("xCategory").style.display = "inline";
    document.getElementById(elem.id.slice(0, -4)).style.display = "inline";
    window.setTimeout(function() {
      document.getElementById("xCategory").style.opacity = "1";
      document.getElementById(elem.id.slice(0, -4)).style.opacity = "1";
      document.getElementById("xCategory_name").style.opacity = "1"
    }, 200)
  }, 400);
}

function presentation_themeColour(colour) {
  document.getElementById("zHeader").style.backgroundColor = colour;
  document.getElementById("zFooter").style.backgroundColor = colour;
}