inp => {
    let tmp = {}
    tmp[0] ??= {}
    tmp[1] ??= {} //
    tmp[2] ??= 0
    tmp[3] ??= 0
    for (let KEY_star_1 in inp['data']) {
        tmp[0][inp['data'][KEY_star_1]['A']] ??= 0
        tmp[2] += inp['data'][KEY_star_1]['B']
        tmp[0][inp['data'][KEY_star_1]['A']] += inp['data'][KEY_star_1]['B']
        tmp[1][inp['data'][KEY_star_1]['A']] = tmp[0][inp['data'][KEY_star_1]['A']]
    }
    for (let KEY_star_r in inp['data']) {
        tmp[3] += ((inp['data'][KEY_star_r]['A']*inp['data'][KEY_star_r]['B'])*inp['udf']['isGE'](tmp[1][inp['data'][KEY_star_r]['A']],((1/2)*tmp[2])))
    }
    return tmp[3]
}