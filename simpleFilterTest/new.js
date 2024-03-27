inp => {
    let tmp = {}
    tmp[0] ??= {}
    tmp[1] ??= {} //
    for (let KEY_star_ in inp['data']) {
        tmp[0][inp['data'][KEY_star_]['key']] ??= 0
        tmp[0][inp['data'][KEY_star_]['key']] += inp['data'][KEY_star_]['value']
        tmp[1][inp['data'][KEY_star_]['key']] = tmp[0][inp['data'][KEY_star_]['key']]
    }
    tmp[2] = tmp[1]['A']
    return tmp[2]
}