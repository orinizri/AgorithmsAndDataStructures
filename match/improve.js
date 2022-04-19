function func(s, a, b) {
    // if (s.length === 0) return -1
    // if (s.lastIndexOf(a) !== -1) return Math.max(s.lastIndexOf(a), s.lastIndexOf(b))
    // return s.lastIndexOf(b) !== -1 ? s.lastIndexOf(b) : -1

    // return s.length === 0 ? -1 : Math.max(s.lastIndexOf(a), s.lastIndexOf(b))
    
    // if (s.lastIndexOf(b) !== -1) return s.lastIndexOf(b)
    
        // var match_empty = /^$/;
    //     var i = s.length - 1 // char one before last
    //     var aIndex = -1;
    //     var bIndex = -1;
    // while ((aIndex == -1) && (bIndex == -1) && (i>=0)) {
    //     if (s.substring(i, i + 1) == a) { // last char = a
    //         // console.log(s.substring(i, i + 1))
    //         aIndex = i;
    //     }
    //     if (s.substring(i, i + 1) == b) { // // last char = b
    //         // console.log(s.substring(i, i + 1))
    //         bIndex = i;
    //         i--; // keep looking backwars
    //     }
    //     if (aIndex != -1) { // if a found 
    //         if (bIndex == -1) { // if b not found
    //             return aIndex
    //         } else { // if b found - get the highest 
    //             return Math.max(aIndex, bIndex)
    //         }
    //     } else { // if a not found
    //         if (bIndex != -1) { // if b found return b
    //             return bIndex;
    //         } else {
    //             return -1 // if a and b not found return -1
    //         }
    //     }
    // }
}


console.log(func('dogkljfsdi', 'o', 'g'))