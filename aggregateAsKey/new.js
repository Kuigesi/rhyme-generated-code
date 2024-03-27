inp => {
    let tmp = {}
    tmp[0] ??= {}
    tmp[1] ??= 0
    tmp[2] = 'true'
    for (let KEY_star_ in inp['data']) {
        tmp[1] += inp['data'][KEY_star_]['B']
    }
    tmp[0][tmp[1]] ??= {}
    for (let KEY_star_ in inp['data']) {
        tmp[0][tmp[1]][inp['data'][KEY_star_]['A']] = tmp[2]
    }
    return tmp[0]
}