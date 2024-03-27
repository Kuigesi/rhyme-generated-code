inp => {
    let tmp = {}
    tmp[0] = inp['udf']['splitNN'](inp['input'])
    tmp[1] ??= {}
    tmp[2] ??= {}
    tmp[3] ??= {} //
    tmp[4] ??= -Infinity
    for (let KEY_star_chunk in tmp[0]) {
        tmp[1][KEY_star_chunk] = inp['udf']['splitN'](tmp[0][KEY_star_chunk])
        tmp[2][KEY_star_chunk] ??= 0
        for (let KEY_star_line in tmp[1][KEY_star_chunk]) {
            tmp[2][KEY_star_chunk] += inp['udf']['toNum'](tmp[1][KEY_star_chunk][KEY_star_line])
        }
        tmp[3][KEY_star_chunk] = tmp[2][KEY_star_chunk]
    }
    for (let KEY_star_ in tmp[3]) {
        tmp[4] = Math.max(tmp[4],tmp[3][KEY_star_])
    }
    return tmp[4]
}