inp => {
    let tmp = {}
    tmp[0] ??= {}
    for (let KEY_star_i in inp['A']) {
        if (inp['B'][KEY_star_i] === undefined) continue
        tmp[0][KEY_star_i] ??= {}
        for (let KEY_star_j in inp['A'][KEY_star_i]) {
            tmp[0][KEY_star_i][KEY_star_j] ??= {}
            for (let KEY_star_k in inp['A'][KEY_star_i][KEY_star_j]) {
                if (inp['B'][KEY_star_i][KEY_star_k] === undefined) continue
                for (let KEY_star_l in inp['B'][KEY_star_i][KEY_star_k]) {
                    tmp[0][KEY_star_i][KEY_star_j][KEY_star_l] ??= 0
                    tmp[0][KEY_star_i][KEY_star_j][KEY_star_l] += (inp['A'][KEY_star_i][KEY_star_j][KEY_star_k]*inp['B'][KEY_star_i][KEY_star_k][KEY_star_l])
                }
            }
        }
    }
    return tmp[0]
}