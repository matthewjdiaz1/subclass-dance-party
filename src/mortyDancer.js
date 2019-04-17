var MakeMortyDancer = function(top, left, timeBetweenSteps) {
  this.mortyDancers = [
    'danceGifs/moneyMorty.gif',
    'danceGifs/tweekyMorty.gif',
    'danceGifs/8bitAsShit.gif',
  ]; 
  Dancer.call(this, top, left, timeBetweenSteps, this.mortyDancers[Math.floor(Math.random() * 3)]);
};

MakeMortyDancer.prototype = Object.create(Dancer.prototype);
MakeMortyDancer.prototype.constructor = MakeMortyDancer;
