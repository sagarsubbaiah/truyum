// Include truYum form validation functions here

function formfill(){
var name=document.forms.foodname.title.value;
var price=document.forms.foodname.price.value;
var active=document.forms.foodname.instock.value;

var category=document.forms.gitform.category.value;
if(name.length<2 || name.length>65) {
alert("Title Should have 2 to 65 characters.");
return false;
} else if(isNaN(price)) {
alert("Price should be a number");
return false;
} else if(active =="") {
alert("Select Active");
return false;
} else if(category=="") {
alert("Select Category");
 return false;
} else {
return true;
}
}
