inp => {
    let tmp = {}
    tmp[0] ??= 0
    for (let KEY_star_ in inp['data']) {
        tmp[0] += inp['data'][KEY_star_]['value']
    }
    return tmp[0]
}