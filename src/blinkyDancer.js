var MakeRandomDancer = function(top, left, timeBetweenSteps) {
  this.randomChar = [
    'danceGifs/dancingPoop.gif',
    'danceGifs/gigglePickle.gif',
    'danceGifs/meeseeks.gif',
    'danceGifs/oooWEEE.gif',
    'danceGifs/showMeWhatYouGot.gif',
  ];
  Dancer.call(this, top, left, timeBetweenSteps, this.randomChar[Math.floor(Math.random() * 4)]);
};

MakeRandomDancer.prototype = Object.create(Dancer.prototype);
MakeRandomDancer.prototype.constructor = MakeRandomDancer;
