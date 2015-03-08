function presentation_showPage() {
  document.getElementById("zWrapper").style.opacity = 1;
}

function presentation_goMainMenu() {
  document.getElementById("xCategory").style.display = "none";
  document.getElementById("xTiles").style.display = "inline";
  document.getElementById("zHomeIcon").style.opacity = 0.1;
  presentation_themeColour("#BFBFBF");
}

function presentation_selectCategory(elem) {
  document.getElementById("xTiles").style.display = "none";
  document.getElementById("xCategory").style.display = "inline";
  document.getElementById("xCategoryOne").style.display = "none";
  document.getElementById("xCategoryTwo").style.display = "none";
  document.getElementById("xCategoryThree").style.display = "none";
  document.getElementById("xCategoryFour").style.display = "none";
  document.getElementById(elem.id.slice(0, -4)).style.display = "inline";
  presentation_themeColour("rgba"+window.getComputedStyle(document.getElementById(elem.id)).backgroundColor.slice(3,-1)+", 0.5)");
  document.getElementById("zHomeIcon").style.opacity = 1;
}

function presentation_themeColour(colour) {
	document.getElementById("zHeader").style.backgroundColor = colour;
	document.getElementById("zFooter").style.backgroundColor = colour;
}