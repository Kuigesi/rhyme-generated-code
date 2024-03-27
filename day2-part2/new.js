inp => {
    let tmp = {}
    tmp[0] = inp['udf']['split']('\n')(inp['input'])
    tmp[1] ??= {}
    tmp[2] ??= {}
    tmp[3] ??= {}
    tmp[4] ??= {}
    tmp[5] ??= {}
    tmp[6] ??= {}
    tmp[7] ??= {} //
    tmp[8] ??= 0
    for (let KEY_star_line in tmp[0]) {
        tmp[1][KEY_star_line] = inp['udf']['split'](':')(tmp[0][KEY_star_line])
        tmp[3][KEY_star_line] ??= {}
        tmp[4][KEY_star_line] ??= {}
        tmp[5][KEY_star_line] ??= {}
        tmp[6][KEY_star_line] ??= {} //
        tmp[2][KEY_star_line] = inp['udf']['split'](';')(tmp[1][KEY_star_line][1])
        for (let KEY_star_hand in tmp[2][KEY_star_line]) {
            tmp[3][KEY_star_line][KEY_star_hand] = inp['udf']['split'](',')(tmp[2][KEY_star_line][KEY_star_hand])
            tmp[4][KEY_star_line][KEY_star_hand] ??= {}
            for (let KEY_star_group in tmp[3][KEY_star_line][KEY_star_hand]) {
                tmp[4][KEY_star_line][KEY_star_hand][KEY_star_group] = inp['udf']['split'](' ')(tmp[3][KEY_star_line][KEY_star_hand][KEY_star_group])
                tmp[5][KEY_star_line][tmp[4][KEY_star_line][KEY_star_hand][KEY_star_group][2]] ??= -Infinity
                tmp[5][KEY_star_line][tmp[4][KEY_star_line][KEY_star_hand][KEY_star_group][2]] = Math.max(tmp[5][KEY_star_line][tmp[4][KEY_star_line][KEY_star_hand][KEY_star_group][2]],inp['udf']['toNum'](tmp[4][KEY_star_line][KEY_star_hand][KEY_star_group][1]))
                tmp[6][KEY_star_line][tmp[4][KEY_star_line][KEY_star_hand][KEY_star_group][2]] = tmp[5][KEY_star_line][tmp[4][KEY_star_line][KEY_star_hand][KEY_star_group][2]]
            }
        }
        tmp[7][KEY_star_line] = ((tmp[6][KEY_star_line]['red']*tmp[6][KEY_star_line]['green'])*tmp[6][KEY_star_line]['blue'])
    }
    for (let KEY_star_ in tmp[7]) {
        tmp[8] += tmp[7][KEY_star_]
    }
    return tmp[8]
}