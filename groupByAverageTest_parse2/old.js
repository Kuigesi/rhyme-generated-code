inp => {
    let tmp = {}
    tmp[0] ??= {}
    tmp[1] ??= {}
    tmp[1]['total'] ??= 0
    tmp[2] ??= {}
    tmp[3] ??= {}
    for (let KEY_star_ in inp['data']) {
        tmp[1]['total'] += inp['data'][KEY_star_]['value']
        tmp[2][inp['data'][KEY_star_]['key']] ??= 0
        tmp[2][inp['data'][KEY_star_]['key']] += inp['data'][KEY_star_]['value']
        tmp[3][inp['data'][KEY_star_]['key']] ??= 0
        tmp[3][inp['data'][KEY_star_]['key']] += 1
        tmp[0]['total'] = tmp[1]['total']
        tmp[0][inp['data'][KEY_star_]['key']] = (tmp[2][inp['data'][KEY_star_]['key']]/tmp[3][inp['data'][KEY_star_]['key']])
    }
    return tmp[0]
}