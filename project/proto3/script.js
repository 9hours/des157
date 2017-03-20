// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var refresh = document.getElementById('refresh');
    refresh.addEventListener('click', function() {
      location.reload();
    });

    // LANDING PAGE
    var enter = document.getElementById('enter');
    var landPG = document.getElementById('landPG');
    var msg = document.getElementById('msg');
    var proceed = document.getElementById('proceed');

    enter.addEventListener('click', function(){
      msg.style.visibility = 'visible';
      msg.style.opacity = '1';
    });

    proceed.addEventListener('click', function(){
      landPG.style.visibility = 'hidden';
      landPG.style.opacity = '0';
    });

    // OTHER PAGES
    var stampRoom = document.getElementById('stampRoom');
    var artStuff = document.getElementById('artStuff');
    var memories = document.getElementById('memories');

    var wrNAV = document.getElementsByTagName('li');

    wrNAV[0].addEventListener('click', function(){
      noWR();
      yesSTMP();
      noAS();
      noMem();
    });

    wrNAV[1].addEventListener('click', function(){
      noWR();
      noSTMP();
      yesAS();
      noMem();
    });

    wrNAV[2].addEventListener('click', function(){
      noWR();
      noSTMP();
      noAS();
      yesMem();
    });

    // RETURN TO WHITE ROOM / NAV
    var back = document.getElementsByClassName('back');
    // stamp room back to WHITE ROOM
    back[0].addEventListener('click', function(){
      yesWR();
      noSTMP();
      noAS();
      noMem();
    });
    // art stuff back to WHITE ROOM
    back[1].addEventListener('click', function(){
      yesWR();
      noSTMP();
      noAS();
      noMem();
    });
    // memories back to WHITE ROOM
    back[2].addEventListener('click', function(){
      yesWR();
      noSTMP();
      noAS();
      noMem();
    });


    //ANIMATIONS
      // WHITE ROOM / NAV
    function yesWR () {
      whiteRoom.style.visibility = 'visible';
      whiteRoom.style.opacity = '1';
    }

    function noWR(){
      whiteRoom.style.visibility = 'hidden';
      whiteRoom.style.opacity = '0';
    }

      // STAMP ROM
    function yesSTMP(){
      stampRoom.style.visibility = 'visible';
      stampRoom.style.opacity = '1';
    }

    function noSTMP(){
      stampRoom.style.visibility = 'hidden';
      stampRoom.style.opacity = '0';
    }

      // ART STUFF
    function yesAS(){
      artStuff.style.visibility = 'visible';
      artStuff.style.opacity = '1';
    }

    function noAS(){
      artStuff.style.visibility = 'hidden';
      artStuff.style.opacity = '0';
    }

      // MEMORIES
    function yesMem(){
      memories.style.visibility = 'visible';
      memories.style.opacity = '1';
    }

    function noMem(){
      memories.style.visibility = 'hidden';
      memories.style.opacity = '0';
    }

});
