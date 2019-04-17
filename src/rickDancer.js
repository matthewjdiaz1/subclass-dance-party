var MakeRickDancer = function(top, left, timeBetweenSteps) {
  this.rickDancers = [
    'danceGifs/danceFromBehind.gif',
    'danceGifs/8bitAsShit.gif',
    'danceGifs/drunkFloaterRick.gif',
    'danceGifs/fingerRick.gif',
    'danceGifs/fistDanceRick.gif',
  ]; 
  Dancer.call(this, top, left, timeBetweenSteps, this.rickDancers[Math.floor(Math.random() * 5)]);
};

MakeRickDancer.prototype = Object.create(Dancer.prototype);
MakeRickDancer.prototype.constructor = MakeRickDancer;
