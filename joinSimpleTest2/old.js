inp => {
    let tmp = {}
    tmp[1] ??= {} //
    for (let KEY_star_O in inp['other']) {
        tmp[1][inp['other'][KEY_star_O]['country']] = inp['other'][KEY_star_O]['region']
    }
    tmp[0] ??= {}
    for (let KEY_star_ in inp['data']) {
        tmp[0][tmp[1][inp['data'][KEY_star_]['country']]] ??= {}
        tmp[0][tmp[1][inp['data'][KEY_star_]['country']]][inp['data'][KEY_star_]['city']] ??= 0
        tmp[0][tmp[1][inp['data'][KEY_star_]['country']]][inp['data'][KEY_star_]['city']] += inp['data'][KEY_star_]['population']
    }
    return tmp[0]
}