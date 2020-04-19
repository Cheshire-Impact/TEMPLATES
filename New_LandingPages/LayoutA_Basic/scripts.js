// Display Demo Form - true, false

var display_form = true;
var form_content = "";

switch (display_form) {
  case true:
    form_content = "[[[https://codepen.io/team/cheshireimpact/pen/OJVVGBx]]]";
    break;
  case false:
    form_content = "%%content%%";
    break;
}

var form_container = document.getElementById("form-outer");
