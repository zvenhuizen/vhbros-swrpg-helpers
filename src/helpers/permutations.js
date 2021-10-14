const permutations = { //[ qty of suc/fai, qty of adv/thr , qty of tri/des] 
    one: [0,0,0],
    two: [1,0,0],
    three: [0,1,0],
    four: [1,1,0],
    five: [2,0,0],
    six: [0,2,0],
    seven: [1,0,1]
}

const permCombos = { //correlate each face to a permutation
    'yellow': [1,2,2,3,4,4,4,5,5,6,6,7],
    'green': [1,2,2,3,3,4,5,6],
    'blue': [1,1,2,3,4,6],
    'red': [1,2,2,3,3,4,4,5,5,6,6,7],
    'purple': [1,2,3,3,3,4,5,6],
    'black': [1,1,2,2,3,3]
}

exports.permCombos = permCombos;
exports.permutations = permutations;
