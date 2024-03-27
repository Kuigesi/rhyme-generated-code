inp => {
    let tmp = {}
    tmp[0] ??= 0
    tmp[1] ??= 0
    for (let KEY_star_A in inp['data']) {
        tmp[0] += inp['data'][KEY_star_A]['value']
    }
    for (let KEY_star_B in inp['data']) {
        tmp[1] += 1
    }
    tmp[2] = Math.trunc((tmp[0]/tmp[1]))
    return tmp[2]
}