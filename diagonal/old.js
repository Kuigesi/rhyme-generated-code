inp => {
    let tmp = {}
    tmp[0] ??= {}
    // --- repeated generators ---
    for (let KEY_star_i in inp['A']) {
        tmp[0][KEY_star_i] = inp['A'][KEY_star_i][KEY_star_i]
    }
    return tmp[0]
}