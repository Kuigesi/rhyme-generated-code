inp => {
    let tmp = {}
    tmp[0] ??= {}
    for (let KEY_star_i in inp['A']) {
        tmp[0][KEY_star_i] ??= {}
        for (let KEY_star_k in inp['A'][KEY_star_i]) {
            if (inp['B'][KEY_star_k] === undefined) continue
            for (let KEY_star_j in inp['B'][KEY_star_k]) {
                tmp[0][KEY_star_i][KEY_star_j] ??= 0
                tmp[0][KEY_star_i][KEY_star_j] += (inp['A'][KEY_star_i][KEY_star_k]*inp['B'][KEY_star_k][KEY_star_j])
            }
        }
    }
    return tmp[0]
}