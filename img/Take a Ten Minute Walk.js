  function isValidWalk(walk) {
    if (walk.length !== 10) return false
    let ns = 0;
    let we = 0
    for (let i = 0; i < walk.length; i++) {
        if ( 'n' ===  walk[i]) ns++;
        else if ( 's' ===  walk[i]) ns--;
        else if ( 'w' ===  walk[i]) we--;
        else if ( 'e' ===  walk[i]) we++;
    }
    return ns === 0 && we === 0;


}