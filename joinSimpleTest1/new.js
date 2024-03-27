inp => {
    let tmp = {}
    tmp[0] ??= {}
    tmp[1] ??= {}
    tmp[1]['region'] ??= {} //
    for (let KEY_star_O in inp['other']) {
        tmp[1]['region'][inp['other'][KEY_star_O]['country']] = inp['other'][KEY_star_O]['region']
    }
    for (let KEY_star_ in inp['data']) {
        tmp[0][inp['data'][KEY_star_]['city']] ??= {}
        tmp[0][inp['data'][KEY_star_]['city']]['country'] = inp['data'][KEY_star_]['country']
        tmp[0][inp['data'][KEY_star_]['city']]['region'] = tmp[1]['region'][inp['data'][KEY_star_]['country']]
    }
    return tmp[0]
}