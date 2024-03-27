inp => {
    let tmp = {}
    tmp[0] ??= []
    tmp[2] ??= []
    for (let KEY_star_ in inp['countryData']) {
        tmp[0] .push (inp['countryData'][KEY_star_]['population'])
    }
    tmp[1] = inp['udf']['order'](tmp[0])
    for (let KEY_star_S in tmp[1]) {
        tmp[2] .push (inp['countryData'][tmp[1][KEY_star_S]]['city'])
    }
    return tmp[2]
}