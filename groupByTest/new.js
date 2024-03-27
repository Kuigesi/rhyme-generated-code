inp => {
    let tmp = {}
    tmp[0] ??= {}
    tmp[0]['total'] ??= 0
    for (let KEY_star_ in inp['data']) {
        tmp[0]['total'] += inp['data'][KEY_star_]['value']
        tmp[0][inp['data'][KEY_star_]['key']] ??= 0
        tmp[0][inp['data'][KEY_star_]['key']] += inp['data'][KEY_star_]['value']
    }
    return tmp[0]
}