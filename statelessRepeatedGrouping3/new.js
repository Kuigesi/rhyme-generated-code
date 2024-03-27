inp => {
    let tmp = {}
    tmp[0] ??= {}
    tmp[1] ??= {}
    tmp[2] ??= {} //
    tmp[0]['foo'] ??= {}
    tmp[1]['foo'] ??= {} //
    for (let KEY_star_ in inp['data']) {
        tmp[0]['foo'][inp['data'][KEY_star_]['key']] ??= {} //
        tmp[0]['foo'][inp['data'][KEY_star_]['key']][inp['data'][KEY_star_]['key']] = 7
        tmp[1]['foo'][inp['data'][KEY_star_]['key']] = tmp[0]['foo'][inp['data'][KEY_star_]['key']]
    }
    tmp[2]['foo'] = tmp[1]['foo']
    tmp[3] = tmp[2]['foo']
    return tmp[3]
}