inp => {
    let tmp = {}
    tmp[0] ??= {}
    tmp[1] ??= []
    for (let KEY_star_ in inp['data']) {
        tmp[0][KEY_star_] ??= {} //
        tmp[0][KEY_star_]['item'] = inp['data'][KEY_star_]['item']
        tmp[0][KEY_star_]['price'] = inp['udf']['formatDollar'](inp['data'][KEY_star_]['price'])
        tmp[1] .push (tmp[0][KEY_star_])
    }
    return tmp[1]
}