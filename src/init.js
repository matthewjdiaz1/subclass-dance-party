$(document).ready(function() {
  window.dancers = [];
  window.backgrounds = [
    'space1.jpg',
    'underwatre.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    'floatingHouse.jpg',
    'RnM.jpg'
  ];
  window.portal = "danceGifs/portal.gif";


  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random() + 32,
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.changeDimensionButton').on('click', function(event) {
    var dimensionChangerFunction = $(this).data('dimension-changer-function-name');

    // switch background
    setTimeout(function(){$("body").css({"background-image":`url(backgrounds/${window.backgrounds[Math.floor(Math.random() * 7)]})`})}, 4000);
    $(".portal").css({"width":"400px"});

    // portal huge 3s
    setTimeout(function(){
        $(".portal").css({"width":"4000px", "top":"-1000px", "left":"-1000px"});
      }, 3000);
      
    // portal normal size 6s
    setTimeout(function(){
        $(".portal").css({"width":"400px", "top":"44%", "left":"44%"});
      }, 4000);   
    // portal normal size 6s
    setTimeout(function(){
        $(".portal").css({"width":"0px"});
      }, 7500);   

    
    for (let i = 0; i < window.dancers.length; i++) {
      // dancers center 2-4s
      setTimeout(function() {window.dancers[i].$node.css({"top":"50%", "left":"50%"})}, Math.floor((Math.random() * 1000)+1000));
      // dancers invis 0 4-6s
      setTimeout(function() {window.dancers[i].$node.css({"opacity":"0"})},2400);
      // dancers visible 4-6s
      setTimeout(function() {window.dancers[i].$node.css({"opacity":"1"})},4900);
      
      
      let top = $("body").height() * Math.random() + 32;
      let left = $("body").width() * Math.random();

      // dancers random 4-6s
      setTimeout(function(){
        window.dancers[i].$node.css({"top":top, "left":left})}, (Math.floor(Math.random() * 2000) + 4600));
      }
  });
});