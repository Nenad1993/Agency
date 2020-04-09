function showNav(){
    if(document.getElementById("links").classList.contains("open")){
    document.getElementById("links").classList.remove("open");
} else{
    document.getElementById("links").classList.add("open");
}
}