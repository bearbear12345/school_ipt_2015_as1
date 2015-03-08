function zContextMenu_createElement() {
  util_addCSS("#zContextMenu {background-color: gainsboro; border: 3px solid darkgray; border-radius: 5px; display: none; position: absolute; z-index:1000;}", "#zContextMenu ul {cursor: pointer; list-style: none; list-style-type: none; margin: 0; padding: 0;}", "#zContextMenu ul li {padding: 0 5px;}", "#zContextMenu ul li:hover {background-color: darkgray}", ".zContextMenu_category {background-color: darkgray; cursor: default; font-size: 24px; font-weight: 700;}");
  zContextMenu = document.createElement("div");
  zContextMenu.id = "zContextMenu";
  zContextMenu.innerHTML = "<ul><li class=\"zContextMenu_category\">Navigation</li><li><a onclick=\"presentation_goMainMenu()\">Main Menu</a></li><li><a onclick=\"zContextMenu_selectCategory(\'xCategoryOne_tip')\">Cat1</a></li><li><a onclick=\"zContextMenu_selectCategory(\'xCategoryTwo_tip')\">Cat2</a></li><li><a onclick=\"zContextMenu_selectCategory(\'xCategoryThree_tip')\">Cat3</a></li><li><a onclick=\"zContextMenu_selectCategory(\'xCategoryFour_tip')\">Cat4</a></li></ul>";
  document.getElementsByTagName('body')[0].appendChild(zContextMenu);
}

function zContextMenu_selectCategory(cat) {presentation_selectCategory({id: cat});}
document.oncontextmenu = function(e) {
  e.preventDefault();
  if (document.getElementById("zWrapper").style.opacity == 1) {
    document.getElementById("zContextMenu").style.top = (e.clientY || e.pageY).toString() + "px";
    document.getElementById("zContextMenu").style.left = (e.clientX || e.pageX).toString() + "px";
    document.getElementById("zContextMenu").style.display = "block";

    function zContextMenu_close() {
      document.getElementById("zContextMenu").style.display = "none";
      document.removeEventListener("click", zContextMenu_close);
    }
    document.addEventListener("click", zContextMenu_close);
  }
}