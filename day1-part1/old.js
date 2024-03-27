inp => {
    let tmp = {}
    tmp[0] = inp['udf']['split']('\n')(inp['input'])
    tmp[1] ??= {}
    tmp[2] ??= {}
    tmp[3] ??= {}
    for (let KEY_star_line in tmp[0]) {
        tmp[1][KEY_star_line] = inp['udf']['split']('')(tmp[0][KEY_star_line])
        for (let KEY_star_char in tmp[1][KEY_star_line]) {
            tmp[2][KEY_star_line] ??= inp['udf']['toNum'](tmp[1][KEY_star_line][KEY_star_char])
            tmp[3][KEY_star_line] = inp['udf']['toNum'](tmp[1][KEY_star_line][KEY_star_char]) ?? tmp[3][KEY_star_line]
        }
        tmp[4] ??= {} //
        tmp[4][KEY_star_line] = ((tmp[2][KEY_star_line]*10)+tmp[3][KEY_star_line])
    }
    tmp[5] ??= 0
    for (let KEY_star_ in tmp[4]) {
        tmp[5] += tmp[4][KEY_star_]
    }
    return tmp[5]
}