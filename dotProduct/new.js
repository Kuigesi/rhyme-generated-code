inp => {
    let tmp = {}
    tmp[0] ??= 0
    for (let KEY_star_i in inp['A']) {
        if (inp['B'][KEY_star_i] === undefined) continue
        tmp[0] += (inp['A'][KEY_star_i]*inp['B'][KEY_star_i])
    }
    return tmp[0]
}