var showContent = document.getElementById("myDIV");
var readMore = document.getElementById("read-more");

readMore.addEventListener('click', function(e){
    if (showContent.style.display === "block") {
    showContent.style.display = "none";
    readMore.innerHTML = 'Read More >>>';
    
    
  } else {
    showContent.style.display = "block";
    readMore.innerHTML = 'See less';
  }
});




var profile = document.getElementById("profile");
var sideBar = document.getElementById("side-bar");

profile.addEventListener('click', function(e){
    if (sideBar.style.display === "block") {
    sideBar.style.display = "none";
    // readMore.innerHTML = 'Read More >>>';
    
    
  } else {
    sideBar.style.display = "block";
    // readMore.innerHTML = 'See less';
  }
});





