inp => {
    let tmp = {}
    tmp[0] ??= {}
    for (let KEY_star_ in inp['index']) {
        tmp[0][inp['index'][KEY_star_]] = inp['data'][inp['index'][KEY_star_]]
    }
    return tmp[0]
}