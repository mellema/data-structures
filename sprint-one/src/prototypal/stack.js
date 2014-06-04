var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.stackSize = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.stackSize] = value;
  this.stackSize ++;
};

stackMethods.pop = function(){
  if(this.stackSize > 0){
    this.stackSize --;
  }
  var result = this.storage[this.stackSize];
  delete this.storage[this.stackSize];

  return result;
};

stackMethods.size = function(){
  //var size = 0;
  return this.stackSize;
};


