inp => {
    let tmp = {}
    tmp[0] = inp['udf']['split']('\n')(inp['input'])
    tmp[1] ??= {}
    tmp[2] ??= {}
    tmp[3] ??= {}
    tmp[4] ??= {}
    tmp[5] ??= {}
    tmp[6] ??= {}
    tmp[7] ??= {}
    tmp[8] ??= {}
    tmp[9] ??= {}
    tmp[10] ??= {}
    tmp[11] ??= {} //
    tmp[12] ??= 0
    for (let KEY_star_line in tmp[0]) {
        tmp[1][KEY_star_line] = inp['udf']['split'](':')(tmp[0][KEY_star_line])
        tmp[6][KEY_star_line] ??= []
        tmp[7][KEY_star_line] ??= []
        tmp[8][KEY_star_line] ??= {}
        tmp[9][KEY_star_line] ??= {} //
        tmp[10][KEY_star_line] ??= 0
        tmp[2][KEY_star_line] = inp['udf']['split']('|')(tmp[1][KEY_star_line][1])
        tmp[3][KEY_star_line] = inp['udf']['getNums'](tmp[2][KEY_star_line][0])
        tmp[4][KEY_star_line] = inp['udf']['getNums'](tmp[2][KEY_star_line][1])
        for (let KEY_star_winNum in tmp[3][KEY_star_line]) {
            tmp[6][KEY_star_line] .push (tmp[3][KEY_star_line][KEY_star_winNum])
        }
        for (let KEY_star_numYouHave in tmp[4][KEY_star_line]) {
            tmp[7][KEY_star_line] .push (tmp[4][KEY_star_line][KEY_star_numYouHave])
        }
        tmp[5][KEY_star_line] = [tmp[6][KEY_star_line],tmp[7][KEY_star_line]].flat()
        for (let KEY_star_num in tmp[5][KEY_star_line]) {
            tmp[8][KEY_star_line][tmp[5][KEY_star_line][KEY_star_num]] ??= 0
            tmp[8][KEY_star_line][tmp[5][KEY_star_line][KEY_star_num]] += 1
            tmp[9][KEY_star_line][tmp[5][KEY_star_line][KEY_star_num]] = tmp[8][KEY_star_line][tmp[5][KEY_star_line][KEY_star_num]]
        }
        for (let KEY_star_freq in tmp[9][KEY_star_line]) {
            tmp[10][KEY_star_line] += inp['udf']['isEqual'](tmp[9][KEY_star_line][KEY_star_freq],2)
        }
        tmp[11][KEY_star_line] = inp['udf']['floor'](inp['udf']['exp'](2)((tmp[10][KEY_star_line]-1)))
    }
    for (let KEY_star_ in tmp[11]) {
        tmp[12] += tmp[11][KEY_star_]
    }
    return tmp[12]
}