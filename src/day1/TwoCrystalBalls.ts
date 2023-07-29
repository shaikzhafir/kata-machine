// given two crystal balls (assume both break at a certain point)
// you are given an array
// the ball will only break at a certain index
// array looks like this [f,f,f,f,f,f,f,f,f,t,t,t,t,t]
// find the first index that it becomes t

// Option 1 (linear search) (O(n))
// slowly find which index it breaks. but in this way, only one ball is used!
// option 2 (binary search)
// start from half, if it breaks, then start from start with linear search
// will be 1/2(n) + 1/2(n) => still O(n).
// cant be efficient like binary search cos ball breaks when it reaches above actual index
// Option 3, jump with sqrt(n)
// complexity will be sqrt(n)

export default function two_crystal_balls(breaks: boolean[]): number {
    let jumpDistance = Math.sqrt(breaks.length);
    // starting with the first ball
    let i = 0
    for (; i < breaks.length; i += jumpDistance) {
        if (breaks[i]) {
            break;
        }
    }
    // now we slowly play with the second ball
    // start from last point it didnt break
    let secondStartPoint = i - jumpDistance    

    // and we go up 1 at a time
    for (; secondStartPoint < breaks.length ; secondStartPoint ++){
        if (breaks[secondStartPoint]){
            return secondStartPoint
        }
    }
    return -1
}
