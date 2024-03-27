inp => {
    let tmp = {}
    tmp[0] ??= {}
    tmp[1] ??= {}
    tmp[2] ??= {}
    tmp[3] ??= {} //
    for (let KEY_star_i in inp['data']) {
        tmp[1][KEY_star_i] ??= {}
        tmp[2][KEY_star_i] ??= {} //
        for (let KEY_star_j in inp['data'][KEY_star_i]) {
            tmp[1][KEY_star_i][inp['data'][KEY_star_i][KEY_star_j]['key']] ??= 0
            tmp[1][KEY_star_i][inp['data'][KEY_star_i][KEY_star_j]['key']] += inp['data'][KEY_star_i][KEY_star_j]['val']
            tmp[2][KEY_star_i][inp['data'][KEY_star_i][KEY_star_j]['key']] = tmp[1][KEY_star_i][inp['data'][KEY_star_i][KEY_star_j]['key']]
        }
        tmp[3][KEY_star_i] = tmp[2][KEY_star_i]
    }
    for (let KEY_star_q in tmp[3]) {
        tmp[0][KEY_star_q] = tmp[3][KEY_star_q]
    }
    return tmp[0]
}