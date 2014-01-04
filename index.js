

function intersect(p1, p2, cmp) {
    
    var out = [],
        i1  = 0,
        i2  = 0,
        l1  = p1.length,
        l2  = p2.length;

    while (i1 < l1 && i2 < l2) {
        if (cmp(p1[i1], p2[i2]) === 0) {
            out.push(p1[i1]);
        }
        i1++;
        i2++;
    }

    return out;

}