var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  //extra credit
  this._count = 0;
};

HashTable.prototype.insert = function(k, v){
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  if(!bucket){
   	bucket = [];
   	this._storage.set(index, bucket);
  }

  var found = false;

  for(var j = 0; j < bucket.length; j++){
  	var tuple = bucket[j];
  	if(tuple[0] === k){
  	  tuple[1] = v;
  	  found = true;
  	}
  }   

  if(!found){
  	bucket.push([k,v]);
  	this._count++;
  	if(this._count > 0.75 * this._limit){
   	  this.resize(this._limit*2);
  	}
  }
  /*
    if storage[i] has no bucket
    var bucket = this._storage.get(i);
      insert bucket

    else
      iterate over bucket
        if key found
          replace value
        else
          add key/value to bucket
  */
};

HashTable.prototype.retrieve = function(k){
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  if(!bucket){
   	return null;
  }
  for(var j = 0; j < bucket.length; j++){
  	var tuple = bucket[j];
  	if(tuple[0] === k){
  	  return tuple[1];
  	}
  }   
  return null;
};

HashTable.prototype.remove = function(k){
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if(!bucket){
   	return null;
  }
  for(var j = 0; j < bucket.length; j++){
  	var tuple = bucket[j];
  	if(tuple[0] === k){
  	  bucket.splice(j, 1);
  	  this._count--;
  	  if(this._count < 0.25 * this._limit){
  	  	this.resize(this._limit/2);
  	  }
  	  return tuple[1];
  	}
  }   
  return null;
};

HashTable.prototype.resize = function(newSize) {
	// body...
  var oldStorage = this._storage;
  this._storage = makeLimitedArray(newSize);
  this._limit = newSize;
  this._count = 0;

  var context = this;

  oldStorage.each(function(bucket){
  	if(bucket === undefined){return;}
    for(var j = 0; j < bucket.length; j++){
  	  var tuple = bucket[j];
  	  context.insert(tuple[0], tuple[1]);
  	}
  }/*.bind(this) would work too with this replacing context */);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
