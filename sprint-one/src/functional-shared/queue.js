var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance._storage = 0;
  instance._back = 0;
  instance._front = 0;
  _(instance).extend(queueMethods);

  return instance;

};


var queueMethods = {};


queueMethods.enqueue = function(value){
  this._storage[this._back] = value;
  this._back ++;
};

queueMethods.dequeue = function(){
  if(this._back - this._front){
    var result = this._storage[this._front];
    delete this._storage[this._front];
    _front ++;
    return result;
  }
  return 0;

};

queueMethods.size = function(){
  return  this._back - this._front;
};

  //return someInstance;

