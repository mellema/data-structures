var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var _storage = {};
  var _size = 0;
  var _front = 0;
  var _back = 0;


  // Implement the methods below

  someInstance.enqueue = function(value){
    _storage[_back] = value;
    _back ++;
  };

  someInstance.dequeue = function(){
    if(_back - _front){
      var result = _storage[_front];
      delete _storage[_front];
      _front ++;
      return result;
    }
    return 0;

  };

  someInstance.size = function(){
    _size = _back - _front;
    return  _back - _front;
  };

  return someInstance;
};
