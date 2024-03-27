inp => {
    let tmp = {}
    tmp[0] ??= {}
    tmp[0]['total'] ??= 0
    for (let KEY_star_ in inp['data']) {
        tmp[0]['total'] += inp['data'][KEY_star_]['population']
        tmp[0][inp['data'][KEY_star_]['region']] ??= {}
        tmp[0][inp['data'][KEY_star_]['region']]['total'] ??= 0
        tmp[0][inp['data'][KEY_star_]['region']]['total'] += inp['data'][KEY_star_]['population']
        tmp[0][inp['data'][KEY_star_]['region']][inp['data'][KEY_star_]['city']] ??= 0
        tmp[0][inp['data'][KEY_star_]['region']][inp['data'][KEY_star_]['city']] += inp['data'][KEY_star_]['population']
    }
    return tmp[0]
}