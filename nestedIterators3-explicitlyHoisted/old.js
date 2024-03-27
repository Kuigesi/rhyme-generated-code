inp => {
    let tmp = {}
    tmp[1] ??= {}
    tmp[1]['total'] ??= {}
    tmp[2] ??= {}
    tmp[2]['total'] ??= {} //
    for (let KEY_star_ in inp['data']) {
        tmp[1]['total'][inp['data'][KEY_star_]['key']] ??= 0
        tmp[1]['total'][inp['data'][KEY_star_]['key']] += inp['data'][KEY_star_]['value']
        tmp[2]['total'][inp['data'][KEY_star_]['key']] = tmp[1]['total'][inp['data'][KEY_star_]['key']]
    }
    tmp[0] ??= {}
    tmp[3] ??= {}
    for (let KEY_star_A in inp['data']) {
        tmp[0][inp['data'][KEY_star_A]['key']] ??= {}
        tmp[0][inp['data'][KEY_star_A]['key']]['total'] = tmp[2]['total'][inp['data'][KEY_star_A]['key']]
    }
    for (let KEY_star_B in inp['data']) {
        tmp[3][inp['data'][KEY_star_B]['key']] ??= {}
        tmp[3][inp['data'][KEY_star_B]['key']]['total'] = tmp[2]['total'][inp['data'][KEY_star_B]['key']]
    }
    // --- repeated generators ---
    for (let KEY_star_A in inp['data']) {
        for (let KEY_star_B in inp['data']) {
            tmp[0][inp['data'][KEY_star_A]['key']][inp['data'][KEY_star_B]['key']] ??= {}
        }
    }
    for (let KEY_star_A in inp['data']) {
        for (let KEY_star_B in inp['data']) {
            tmp[0][inp['data'][KEY_star_A]['key']][inp['data'][KEY_star_B]['key']]['total'] = tmp[3][inp['data'][KEY_star_B]['key']]['total']
        }
    }
    for (let KEY_star_A in inp['data']) {
        for (let KEY_star_B in inp['data']) {
            tmp[0][inp['data'][KEY_star_A]['key']][inp['data'][KEY_star_B]['key']]['ratio'] = (tmp[2]['total'][inp['data'][KEY_star_A]['key']]/tmp[2]['total'][inp['data'][KEY_star_B]['key']])
        }
    }
    return tmp[0]
}