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


var menu = document.getElementById("menu");
var mobileNavs = document.getElementById("mobile-navs");
menu.addEventListener('click', function(e){
    if (mobileNavs.style.display === "block") {
    mobileNavs.style.display = "none";
  } else {
    mobileNavs.style.display = "block";
  }
});


var home = document.getElementById("home-nav");
var mobileNavs = document.getElementById("mobile-navs");
home.addEventListener('click', function(e){
    if (mobileNavs.style.display === "block") {
    mobileNavs.style.display = "none";
  } else {
    mobileNavs.style.display = "block";
  }
});

var about = document.getElementById("about-nav");
var mobileNavs = document.getElementById("mobile-navs");
about.addEventListener('click', function(e){
    if (mobileNavs.style.display === "block") {
    mobileNavs.style.display = "none";
  } else {
    mobileNavs.style.display = "block";
  }
});

var resume = document.getElementById("resume-nav");
var mobileNavs = document.getElementById("mobile-navs");
resume.addEventListener('click', function(e){
    if (mobileNavs.style.display === "block") {
    mobileNavs.style.display = "none";
  } else {
    mobileNavs.style.display = "block";
  }
});

var project = document.getElementById("project-nav");
var mobileNavs = document.getElementById("mobile-navs");
project.addEventListener('click', function(e){
    if (mobileNavs.style.display === "block") {
    mobileNavs.style.display = "none";
  } else {
    mobileNavs.style.display = "block";
  }
});


var test = document.getElementById("test-nav");
var mobileNavs = document.getElementById("mobile-navs");
test.addEventListener('click', function(e){
    if (mobileNavs.style.display === "block") {
    mobileNavs.style.display = "none";
  } else {
    mobileNavs.style.display = "block";
  }
});


var contact = document.getElementById("contact-nav");
var mobileNavs = document.getElementById("mobile-navs");

contact.addEventListener('click', function(e){
    if (mobileNavs.style.display === "block") {
    mobileNavs.style.display = "none";
  } else {
    mobileNavs.style.display = "block";
  }
});


