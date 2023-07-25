$(document).ready(function() {
  
    var physics_started = false;
    
    var randomX = function(){
      return Math.floor(Math.random()*($(document).width()-100))
    }
    
    var randomY = function(){
      return 160 + Math.floor(Math.random()*100)
    }
    
    window.myAddCircle = function(){
      if (physics_started) {
        return;
      }
      addCircle();
       $(".circle:not(.ready)")
        .css("left",randomX()+"px")
        .css("top",randomY()+"px")
        .addClass('ready')
    }
    
    window.myAddSquare = function(){
      if (physics_started) {
        return;
      }
      addSquare();
      $(".square:not(.ready)")
        .css("left",randomX()+"px")
        .css("top",randomY()+"px")
        .addClass('ready')
    }
  
    
    $('body').on('click', '#add_square', function() {
      myAddSquare();
    })
  
    $('body').on('click', '#add_circle', function() {
      myAddCircle();
    })
    $('body').on('click', '#relaunch', function() {
      document.location.reload();
    })
    
    $('body').on('click', '#launch', function() {
      if (physics_started) {
        return;
      } else {
        $("#add_square,#add_circle").addClass("disabled")
        $("#launch").addClass("disabled").text("Started...")
        //$("h1, #intro").box2d({'y-velocity':10, 'density':2});
        $(".square").box2d({'y-velocity':10,'density':2})
        $(".circle").box2d({'y-velocity':10,'shape':'circle','density':0.1, 'restitution':0.8, 'friction':0.2})
        physics_started=true;
      }
      
    })
  
  
    
  });