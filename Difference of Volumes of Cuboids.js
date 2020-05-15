function find (a,b){
    s1 = 1;
    s2 = 1;
    for (let i = 0; i < a.length; i++){
        s1 *= a[i]
        s2 *= b[i]
    }

    return Math.abs(s2 - s1)

}
console.log(find([9,7,2], [5,2,2]));