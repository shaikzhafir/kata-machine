// binary search assumes array is sorted
// it works by cutting the array in half every iteration
// and taking the lower or upper half, depending on the element
// if cant find, or the upper and higher isnt equal, repeat

export default function bs_list(haystack: number[], needle: number): boolean {
    return search(haystack,0, haystack.length,needle)
}



function search(haystack : number[], low : number, high : number, needle : number) : boolean {
    let middleElement = Math.floor((low + high)/2)

    // check if its equal to needle 
    if (needle == haystack[middleElement]){
        return true
    }

    // make sure lower isnt equal to higher means the element doesnt exist 
    if (low == high){
        return false
    }

    if (needle > haystack[middleElement]){
        low = middleElement + 1
    } else {
        high = middleElement
    }

    return search(haystack, low, high, needle)
}
