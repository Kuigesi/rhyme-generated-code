inp => {
    let tmp = {}
    tmp[0] ??= {}
    tmp[1] ??= {}
    for (let KEY_star_ in inp['index']) {
        tmp[1][inp['index'][KEY_star_]['key']] ??= 0
        tmp[1][inp['index'][KEY_star_]['key']] += 1
        tmp[0][inp['index'][KEY_star_]['key']] = tmp[1][inp['index'][KEY_star_]['key']]
    }
    return tmp[0]
}