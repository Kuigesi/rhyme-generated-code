inp => {
    let tmp = {}
    tmp[0] ??= {}
    for (let KEY_star_i in inp['A']) {
        if (inp['B'][KEY_star_i] === undefined) continue
        tmp[0][KEY_star_i] ??= {}
        for (let KEY_star_j in inp['A'][KEY_star_i]) {
            if (inp['B'][KEY_star_i][KEY_star_j] === undefined) continue
            tmp[0][KEY_star_i][KEY_star_j] = (inp['A'][KEY_star_i][KEY_star_j]*inp['B'][KEY_star_i][KEY_star_j])
        }
    }
    return tmp[0]
}