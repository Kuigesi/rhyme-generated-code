inp => {
    let tmp = {}
    tmp[0] ??= 0
    for (let KEY_star_ in inp['data']) {
        tmp[0] += inp['data'][KEY_star_]['value']
    }
    tmp[1] ??= 0
    tmp[1] += tmp[0]
    return tmp[1]
}