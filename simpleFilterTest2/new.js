inp => {
    let tmp = {}
    tmp[0] ??= {}
    tmp[1] ??= {} //
    for (let KEY_star_ in inp['data']) {
        tmp[0][inp['udf']['ne'](inp['data'][KEY_star_]['key'],'B')] ??= 0
        tmp[0][inp['udf']['ne'](inp['data'][KEY_star_]['key'],'B')] += inp['data'][KEY_star_]['value']
        tmp[1][inp['udf']['ne'](inp['data'][KEY_star_]['key'],'B')] = tmp[0][inp['udf']['ne'](inp['data'][KEY_star_]['key'],'B')]
    }
    tmp[2] = tmp[1]['true']
    return tmp[2]
}