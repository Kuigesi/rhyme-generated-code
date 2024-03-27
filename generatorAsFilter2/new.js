inp => {
    let tmp = {}
    tmp[0] ??= {}
    tmp[1] ??= {}
    for (let KEY_star_ in inp['data']) {
        tmp[1][KEY_star_] = inp['udf']['filter'](inp['udf']['eq2']('A',inp['data'][KEY_star_]['key']))
        tmp[0][inp['data'][KEY_star_]['key']] ??= 0
        for (let KEY_star_F in tmp[1][KEY_star_]) {
            tmp[0][inp['data'][KEY_star_]['key']] += inp['udf']['andThen'](tmp[1][KEY_star_][KEY_star_F],inp['data'][KEY_star_]['value'])
        }
    }
    return tmp[0]
}