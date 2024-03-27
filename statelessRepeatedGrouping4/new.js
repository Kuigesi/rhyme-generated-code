inp => {
    let tmp = {}
    tmp[0] ??= {}
    tmp[1] ??= {}
    tmp[2] ??= []
    tmp[0]['data'] ??= {} //
    for (let KEY_star_A in inp['data']) {
        tmp[0]['data'][inp['data'][KEY_star_A]['key']] = inp['data'][KEY_star_A]['value']
        tmp[1][KEY_star_A] ??= {} //
        tmp[1][KEY_star_A]['key'] = inp['data'][KEY_star_A]['key']
        tmp[1][KEY_star_A]['data'] = tmp[0]['data']
        tmp[2] .push (tmp[1][KEY_star_A])
    }
    return tmp[2]
}