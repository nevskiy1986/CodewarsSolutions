function cutCube(volume,n){
    if(Math.cbrt( n ) % 1 !== 0) return false
    else return (Math.cbrt(volume / n ) % 1 === 0) ? true : false;
}