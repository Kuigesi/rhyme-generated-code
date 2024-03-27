inp => {
    let tmp = {}
    tmp[1] ??= {}
    tmp[1]['full_total'] ??= 0
    for (let KEY_star_B in inp['data']) {
        tmp[1]['full_total'] += inp['data'][KEY_star_B]['value']
    }
    tmp[0] ??= {}
    tmp[0]['total'] ??= 0
    for (let KEY_star_A in inp['data']) {
        tmp[0]['total'] += inp['data'][KEY_star_A]['value']
    }
    for (let KEY_star_ in inp['data']) {
        tmp[0][inp['data'][KEY_star_]['key']] ??= {}
        tmp[0][inp['data'][KEY_star_]['key']]['my_total'] ??= 0
        tmp[0][inp['data'][KEY_star_]['key']]['my_total'] += inp['data'][KEY_star_]['value']
        tmp[0][inp['data'][KEY_star_]['key']]['full_total'] = tmp[1]['full_total']
    }
    return tmp[0]
}