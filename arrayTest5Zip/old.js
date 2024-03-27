inp => {
    let tmp = {}
    tmp[0] ??= {}
    tmp[1] ??= {}
    for (let KEY_star_ in inp['data']) {
        tmp[1][inp['data'][KEY_star_]['key']] ??= {}
        tmp[1][inp['data'][KEY_star_]['key']][KEY_star_] ??= {} //
        tmp[1][inp['data'][KEY_star_]['key']][KEY_star_]['v1'] = inp['data'][KEY_star_]['value']
        tmp[1][inp['data'][KEY_star_]['key']][KEY_star_]['v2'] = inp['data'][KEY_star_]['value']
        tmp[0][inp['data'][KEY_star_]['key']] ??= []
        for (let KEY_star_A in tmp[1][inp['data'][KEY_star_]['key']][KEY_star_]) {
            tmp[0][inp['data'][KEY_star_]['key']] .push (tmp[1][inp['data'][KEY_star_]['key']][KEY_star_][KEY_star_A])
        }
    }
    return tmp[0]
}