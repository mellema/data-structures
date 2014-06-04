var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
   //var someInstance = new Stack({}, 0);
  this.stackSize = 0;
  this.storage = {};
  //return someInstance;

};


/*var Stack = function(storage, size){
  this.storage = storage;
  this.stackSize = size;
};*/

Stack.prototype.push = function(value){
  this.storage[this.stackSize] = value;
  this.stackSize ++;
};

Stack.prototype.pop = function(){
  if(this.stackSize > 0){
    this.stackSize --;
  }
  var result = this.storage[this.stackSize];
  delete this.storage[this.stackSize];

  return result;
};

Stack.prototype.size = function(){
  //var size = 0;
  return this.stackSize;
};
