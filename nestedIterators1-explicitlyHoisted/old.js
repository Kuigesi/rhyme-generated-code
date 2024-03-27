inp => {
    let tmp = {}
    tmp[1] ??= {}
    tmp[1]['my_total'] ??= {}
    tmp[2] ??= {}
    tmp[2]['my_total'] ??= {} //
    for (let KEY_star_O in inp['data']) {
        tmp[1]['my_total'][inp['data'][KEY_star_O]['key']] ??= 0
        tmp[1]['my_total'][inp['data'][KEY_star_O]['key']] += inp['data'][KEY_star_O]['value']
        tmp[2]['my_total'][inp['data'][KEY_star_O]['key']] = tmp[1]['my_total'][inp['data'][KEY_star_O]['key']]
    }
    tmp[0] ??= {}
    tmp[0]['total'] ??= 0
    tmp[3] ??= {}
    for (let KEY_star_ in inp['data']) {
        tmp[0]['total'] += inp['data'][KEY_star_]['value']
        tmp[0][inp['data'][KEY_star_]['key']] ??= {}
        tmp[0][inp['data'][KEY_star_]['key']]['my_total'] = tmp[2]['my_total'][inp['data'][KEY_star_]['key']]
    }
    for (let KEY_star_B in inp['data']) {
        tmp[3][inp['data'][KEY_star_B]['key']] = tmp[2]['my_total'][inp['data'][KEY_star_B]['key']]
    }
    // --- repeated generators ---
    for (let KEY_star_ in inp['data']) {
        for (let KEY_star_B in inp['data']) {
            tmp[0][inp['data'][KEY_star_]['key']][inp['data'][KEY_star_B]['key']] = tmp[3][inp['data'][KEY_star_B]['key']]
        }
    }
    return tmp[0]
}