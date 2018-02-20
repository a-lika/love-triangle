/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var cont=0;
  preferences.unshift('');
  for(var i=1; i<preferences.length; i++){
  if (preferences[preferences[preferences[i]]] == i){
  cont++;
  }
  }
  return Math.floor(cont/3);
};
