function presentation_showPage() {
  document.getElementById("zWrapper").style.opacity = 1;
}

function presentation_goMainMenu() {
  document.getElementById("xCategory").style.display = "none";
  document.getElementById("xTiles").style.display = "inline";
}

function presentation_selectCategory(elem) {
  document.getElementById("xTiles").style.display = "none";
  document.getElementById("xCategory").style.display = "inline";
  document.getElementById("xCategoryOne").style.display = "none";
  document.getElementById("xCategoryTwo").style.display = "none";
  document.getElementById("xCategoryThree").style.display = "none";
  document.getElementById("xCategoryFour").style.display = "none";
  document.getElementById(elem.id.slice(0, -4)).style.display = "inline";
  /*  switch (cat) {
      case 1:
        document.getElementById("xCategoryOne").style.display = "inline";
        break;
      case 2:
        document.getElementById("xCategoryTwo").style.display = "inline";
        break;
      case 3:
        document.getElementById("xCategoryThree").style.display = "inline";
        break;
      case 4:
        document.getElementById("xCategoryFour").style.display = "inline";
        break;
      default:
        break;

    }
    */
}