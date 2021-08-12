function scrolltofunc(id) {
    var scrollDiv = document.getElementById(id).offsetTop;
    window.scrollTo({ top: scrollDiv-100, behavior: 'smooth'});
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
    
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}