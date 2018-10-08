/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    preferences.unshift('');
    for (let i = 0; i < preferences.length; i++) {
        if (preferences[preferences[preferences[i + 1]]] === i + 1) {
            count++;
        }
    }
    return Math.floor(count / 3);
};
