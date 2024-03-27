inp => {
    let tmp = {}
    tmp[0] ??= {}
    tmp[1] ??= {}
    tmp[2] ??= {} //
    for (let KEY_star_ in inp['data']) {
        tmp[1][inp['data'][KEY_star_]['key']] ??= []
        tmp[1][inp['data'][KEY_star_]['key']] .push (inp['data'][KEY_star_]['value'])
        tmp[2][inp['data'][KEY_star_]['key']] = tmp[1][inp['data'][KEY_star_]['key']]
    }
    for (let KEY_star_k in tmp[2]) {
        tmp[0][KEY_star_k] = tmp[2][KEY_star_k]
    }
    return tmp[0]
}