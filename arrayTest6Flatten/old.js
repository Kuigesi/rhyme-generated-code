inp => {
    let tmp = {}
    tmp[1] ??= {}
    tmp[2] ??= {}
    tmp[3] ??= {}
    tmp[4] ??= {} //
    for (let KEY_star_ in inp['data']) {
        tmp[1][inp['data'][KEY_star_]['key']] ??= {}
        tmp[1][inp['data'][KEY_star_]['key']]['v1'] ??= []
        tmp[1][inp['data'][KEY_star_]['key']]['v1'] .push (inp['data'][KEY_star_]['value'])
        tmp[2][inp['data'][KEY_star_]['key']] ??= {}
        tmp[2][inp['data'][KEY_star_]['key']]['v2'] ??= []
        tmp[2][inp['data'][KEY_star_]['key']]['v2'] .push (inp['data'][KEY_star_]['value'])
        tmp[3][inp['data'][KEY_star_]['key']] ??= {}
        tmp[3][inp['data'][KEY_star_]['key']][KEY_star_] ??= {} //
        tmp[3][inp['data'][KEY_star_]['key']][KEY_star_]['v1'] = tmp[1][inp['data'][KEY_star_]['key']]['v1']
        tmp[3][inp['data'][KEY_star_]['key']][KEY_star_]['v2'] = tmp[2][inp['data'][KEY_star_]['key']]['v2']
        tmp[4][inp['data'][KEY_star_]['key']] = tmp[3][inp['data'][KEY_star_]['key']][KEY_star_]
    }
    tmp[0] ??= {}
    for (let KEY_star_k in tmp[4]) {
        tmp[0][KEY_star_k] ??= []
        for (let KEY_star_A in tmp[4][KEY_star_k]) {
            for (let KEY_star_B in tmp[4][KEY_star_k][KEY_star_A]) {
                tmp[0][KEY_star_k] .push (tmp[4][KEY_star_k][KEY_star_A][KEY_star_B])
            }
        }
    }
    return tmp[0]
}