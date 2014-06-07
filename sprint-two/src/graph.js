var Graph = function(){
  this.storage = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  this.storage[newNode] = newNode;
  if(toNode){
  	this.storage[newNode][toNode] = toNode;
  }
  if(Object.keys(this.storage).length === 2){
    this.storage[newNode][toNode] = Object.keys(this.storage)[0];
    this.storage[Object.keys(this.storage)[1]];
  }
};

Graph.prototype.contains = function(node){
	if(this.storage[node]){
		return true;
	}
	return false;
};

Graph.prototype.removeNode = function(node){
  if(this.storage[node]){
  	delete this.storage[node];
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){

};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
