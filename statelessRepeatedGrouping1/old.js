inp => {
    let tmp = {}
    tmp[0] ??= {}
    tmp[0]['foo'] ??= {}
    tmp[1] ??= {}
    tmp[1]['foo'] ??= {} //
    for (let KEY_star_A in inp['data']) {
        tmp[0]['foo'][KEY_star_A] ??= {} //
        tmp[0]['foo'][KEY_star_A][KEY_star_A] = inp['data'][KEY_star_A]
        tmp[1]['foo'][KEY_star_A] = tmp[0]['foo'][KEY_star_A]
    }
    tmp[2] ??= {} //
    tmp[2]['foo'] = tmp[1]['foo']
    tmp[3] = tmp[2]['foo']
    return tmp[3]
}