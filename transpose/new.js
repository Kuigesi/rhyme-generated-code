inp => {
    let tmp = {}
    tmp[0] ??= {}
    for (let KEY_star_i in inp['mat']) {
        for (let KEY_star_j in inp['mat'][KEY_star_i]) {
            tmp[0][KEY_star_j] ??= {}
            tmp[0][KEY_star_j][KEY_star_i] = inp['mat'][KEY_star_i][KEY_star_j]
        }
    }
    return tmp[0]
}