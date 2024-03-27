inp => {
    let tmp = {}
    tmp[0] ??= {}
    tmp[1] ??= {}
    tmp[2] ??= {}
    for (let KEY_star_A in inp['data']) {
        tmp[0][inp['data'][KEY_star_A]['key']] ??= {}
        tmp[1][inp['data'][KEY_star_A]['key']] ??= 0
        tmp[1][inp['data'][KEY_star_A]['key']] += inp['data'][KEY_star_A]['value']
    }
    for (let KEY_star_B in inp['data']) {
        tmp[2][inp['data'][KEY_star_B]['key']] ??= 0
        tmp[2][inp['data'][KEY_star_B]['key']] += inp['data'][KEY_star_B]['value']
        for (let KEY_star_A in inp['data']) {
            tmp[0][inp['data'][KEY_star_A]['key']][inp['data'][KEY_star_B]['key']] = (tmp[1][inp['data'][KEY_star_A]['key']]/tmp[2][inp['data'][KEY_star_B]['key']])
        }
    }
    return tmp[0]
}