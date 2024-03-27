inp => {
    let tmp = {}
    tmp[1] ??= {}
    tmp[2] ??= 0
    for (let KEY_star_B in inp['data']) {
        tmp[2] += inp['data'][KEY_star_B]['value']
    }
    tmp[0] ??= {}
    tmp[0]['total'] ??= 0
    for (let KEY_star_ in inp['data']) {
        tmp[0]['total'] += inp['data'][KEY_star_]['value']
        tmp[1][inp['data'][KEY_star_]['key']] ??= 0
        tmp[1][inp['data'][KEY_star_]['key']] += inp['data'][KEY_star_]['value']
        tmp[0][inp['data'][KEY_star_]['key']] = (tmp[1][inp['data'][KEY_star_]['key']]/tmp[2])
    }
    return tmp[0]
}