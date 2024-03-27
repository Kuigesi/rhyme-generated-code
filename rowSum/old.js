inp => {
    let tmp = {}
    tmp[0] ??= {}
    for (let KEY_star_i in inp['mat']) {
        tmp[0][KEY_star_i] ??= 0
        for (let KEY_star_j in inp['mat'][KEY_star_i]) {
            tmp[0][KEY_star_i] += inp['mat'][KEY_star_i][KEY_star_j]
        }
    }
    return tmp[0]
}