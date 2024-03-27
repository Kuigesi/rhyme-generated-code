inp => {
    let tmp = {}
    tmp[0] ??= {}
    tmp[1] ??= {} //
    tmp[0]['foo'] ??= {} //
    for (let KEY_star_A in inp['data']) {
        tmp[0]['foo'][KEY_star_A] = inp['data'][KEY_star_A]
    }
    tmp[1]['foo'] = tmp[0]['foo']
    tmp[2] = tmp[1]['foo']
    return tmp[2]
}