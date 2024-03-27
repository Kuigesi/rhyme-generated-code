inp => {
    let tmp = {}
    tmp[0] ??= {}
    tmp[1] ??= []
    for (let KEY_star_D in inp['countryData']) {
        tmp[1] .push (inp['countryData'][KEY_star_D]['population'])
    }
    tmp[2] = inp['udf']['order'](tmp[1])
    for (let KEY_star_S in tmp[2]) {
        tmp[0][inp['countryData'][tmp[2][KEY_star_S]]['city']] = inp['countryData'][tmp[2][KEY_star_S]]['population']
    }
    return tmp[0]
}