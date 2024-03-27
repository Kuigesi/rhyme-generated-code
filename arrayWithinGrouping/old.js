inp => {
    let tmp = {}
    tmp[0] ??= {}
    tmp[1] ??= {}
    for (let KEY_star_ in inp['data']) {
        tmp[1][inp['data'][KEY_star_]['region']] ??= {}
        tmp[1][inp['data'][KEY_star_]['region']][KEY_star_] ??= {} //
        tmp[1][inp['data'][KEY_star_]['region']][KEY_star_][inp['data'][KEY_star_]['name']] = inp['data'][KEY_star_]['value']
        tmp[0][inp['data'][KEY_star_]['region']] ??= []
        tmp[0][inp['data'][KEY_star_]['region']] .push (tmp[1][inp['data'][KEY_star_]['region']][KEY_star_])
    }
    return tmp[0]
}