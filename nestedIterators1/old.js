inp => {
    let tmp = {}
    tmp[0] ??= {}
    tmp[0]['total'] ??= 0
    tmp[1] ??= {}
    for (let KEY_star_A in inp['data']) {
        tmp[0]['total'] += inp['data'][KEY_star_A]['value']
    }
    for (let KEY_star_ in inp['data']) {
        tmp[0][inp['data'][KEY_star_]['key']] ??= {}
        tmp[0][inp['data'][KEY_star_]['key']]['my_total'] ??= 0
        tmp[0][inp['data'][KEY_star_]['key']]['my_total'] += inp['data'][KEY_star_]['value']
    }
    for (let KEY_star_B in inp['data']) {
        tmp[1][inp['data'][KEY_star_B]['key']] ??= 0
        tmp[1][inp['data'][KEY_star_B]['key']] += inp['data'][KEY_star_B]['value']
    }
    // --- repeated generators ---
    for (let KEY_star_ in inp['data']) {
        for (let KEY_star_B in inp['data']) {
            tmp[0][inp['data'][KEY_star_]['key']][inp['data'][KEY_star_B]['key']] = tmp[1][inp['data'][KEY_star_B]['key']]
        }
    }
    return tmp[0]
}