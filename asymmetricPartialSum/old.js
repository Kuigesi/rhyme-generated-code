inp => {
    let tmp = {}
    tmp[0] ??= 0
    tmp[1] ??= []
    for (let KEY_star_A in inp['data']) {
        if (inp['other'][KEY_star_A] === undefined) continue
        tmp[0] += inp['data'][KEY_star_A]['value']
        tmp[1] .push ((tmp[0]+inp['other'][KEY_star_A]['value']))
    }
    return tmp[1]
}