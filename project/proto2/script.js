// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    alert("Hi there! Let me save you the trouble of figuring out what this is by telling you that this website is unfinished!");

    var refresh = document.getElementById('refresh');
    refresh.addEventListener('click', function() {
      location.reload();
    });

    var landPG = document.getElementById('landPG');
    var enter = document.getElementById('enter');
    var whiteRoom = document.getElementById('whiteRoom')

    enter.addEventListener('click', function(){
      whiteRoom.style.display = 'block';
      landPG.style.display = "none";
    });

    //whiteRoom NAVIGATION LINKS
    var artStuff = document.getElementById('artStuff');
    var memories = document.getElementById('memories');
    var div = document.getElementsByTagName('div');

    //from whiteRoom
    div[0].addEventListener('click', function() {
      artStuff.style.display = 'block';
    });
    div[1].addEventListener('click', function() {
      memories.style.display = 'block';
    });

    var artPop = document.getElementById('artPop');
    var memPop = document.getElementById('memPop');
    div[3].addEventListener('click', function() {
      artPop.style.display = 'block';
    });
    div[7].addEventListener('click', function() {
      memPop.style.display = 'block';
    });


});
