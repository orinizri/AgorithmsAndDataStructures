
// You are given two integers, x and y, which represent your current location on a Cartesian grid: (x, y). You are also
//  given an array points where each points[i] = [ai, bi] represents that a point exists at (ai, bi). 
// A point is valid if  it shares the same x-coordinate or the same y-coordinate as your location.
// Return the index (0-indexed) of the valid point with the smallest Manhattan distance from your current location.
// If there are multiple, return the valid point with the smallest index. If there are no valid points, return -1.

function nearestValidPoint(x, y, points) {
    // get valid points array
    validPoints = points.filter((([a, b]) => a === x || b === y));
    // set dict for validPoints index and distances
    const distances = {};
    // for each valid point calculate the distance
    for (let [ index, [ a, b ]] of validPoints.entries()) {
        distances[index] = (Math.abs(a - x) + Math.abs(b - y));
    }
    // get first index of the point with the smallest distance
    let minDistance = Math.min(...Object.values(distances));
    indexOfMinDistance = Object.keys(distances).find(key => distances[key] === minDistance);
    return points.indexOf(validPoints[+indexOfMinDistance]);
};