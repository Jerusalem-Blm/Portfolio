//alert("Hello");
function closeNav() {
    var media2 = window.matchMedia('(max-width:768px)');
media2.addListener(closeNav);
if(media2.matches){
    //alert("match")
    document.getElementById("mySidenav").style.display = "none";
  }else{
    //alert("failed");
    document.getElementById("mySidenav").style.display = "block";
  }
}  
function openNav(media){
var media = window.matchMedia('(max-width:768px)');
media.addListener(openNav);
//alert("xup");
if(media.matches){
//alert("match")
document.getElementById("mySidenav").style.display="block";
document.getElementById("mySidenav").style.width="180px";
}else{
//alert("failed");
document.getElementById("mySidenav").style.width = "100%";
}
}