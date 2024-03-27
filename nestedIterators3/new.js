inp => {
    let tmp = {}
    tmp[0] ??= {}
    tmp[1] ??= {}
    tmp[2] ??= {}
    tmp[3] ??= {}
    tmp[2]['ratio'] ??= {}
    tmp[3]['ratio'] ??= {} //
    for (let KEY_star_ in inp['data']) {
        tmp[2]['ratio'][inp['data'][KEY_star_]['key']] ??= 0
        tmp[2]['ratio'][inp['data'][KEY_star_]['key']] += inp['data'][KEY_star_]['value']
        tmp[3]['ratio'][inp['data'][KEY_star_]['key']] = tmp[2]['ratio'][inp['data'][KEY_star_]['key']]
    }
    for (let KEY_star_A in inp['data']) {
        tmp[0][inp['data'][KEY_star_A]['key']] ??= {}
        tmp[0][inp['data'][KEY_star_A]['key']]['total'] ??= 0
        tmp[0][inp['data'][KEY_star_A]['key']]['total'] += inp['data'][KEY_star_A]['value']
        for (let KEY_star_B in inp['data']) {
            tmp[0][inp['data'][KEY_star_A]['key']][inp['data'][KEY_star_B]['key']] ??= {}
        }
    }
    for (let KEY_star_B in inp['data']) {
        tmp[1][inp['data'][KEY_star_B]['key']] ??= {}
        tmp[1][inp['data'][KEY_star_B]['key']]['total'] ??= 0
        tmp[1][inp['data'][KEY_star_B]['key']]['total'] += inp['data'][KEY_star_B]['value']
        for (let KEY_star_A in inp['data']) {
            tmp[0][inp['data'][KEY_star_A]['key']][inp['data'][KEY_star_B]['key']]['total'] = tmp[1][inp['data'][KEY_star_B]['key']]['total']
            tmp[0][inp['data'][KEY_star_A]['key']][inp['data'][KEY_star_B]['key']]['ratio'] = (tmp[3]['ratio'][inp['data'][KEY_star_A]['key']]/tmp[3]['ratio'][inp['data'][KEY_star_B]['key']])
        }
    }
    return tmp[0]
}