inp => {
    let tmp = {}
    tmp[0] ??= {}
    tmp[1] ??= {}
    tmp[2] ??= []
    tmp[2] .push ('Extra1')
    tmp[3] ??= {}
    tmp[4] ??= []
    tmp[4] .push ('Extra2')
    for (let KEY_star_ in inp['data']) {
        tmp[1][inp['data'][KEY_star_]['key']] ??= {}
        tmp[1][inp['data'][KEY_star_]['key']][KEY_star_] ??= {} //
        tmp[1][inp['data'][KEY_star_]['key']][KEY_star_]['foo'] = inp['data'][KEY_star_]['value']
        tmp[3][inp['data'][KEY_star_]['key']] ??= []
        tmp[3][inp['data'][KEY_star_]['key']] .push (tmp[1][inp['data'][KEY_star_]['key']][KEY_star_])
        tmp[0][inp['data'][KEY_star_]['key']] = [tmp[2],tmp[3][inp['data'][KEY_star_]['key']],tmp[4]].flat()
    }
    return tmp[0]
}