inp => {
    let tmp = {}
    tmp[0] = inp['udf']['splitN'](inp['input'])
    tmp[1] ??= {}
    tmp[2] ??= {}
    tmp[3] ??= {}
    tmp[4] ??= {} //
    tmp[5] ??= {}
    tmp[6] ??= {}
    tmp[7] ??= {}
    tmp[8] ??= {}
    tmp[9] ??= {} //
    tmp[10] ??= 0
    for (let KEY_star_i in tmp[0]) {
        tmp[2][KEY_star_i] = inp['udf']['splitB'](tmp[0][KEY_star_i])
        tmp[3][KEY_star_i] ??= {} //
        for (let KEY_star_j in tmp[2][KEY_star_i]) {
            tmp[3][KEY_star_i][KEY_star_j] = tmp[2][KEY_star_i][KEY_star_j]
        }
        tmp[4][KEY_star_i] = tmp[3][KEY_star_i]
    }
    for (let KEY_star_row in tmp[0]) {
        tmp[1][KEY_star_row] = inp['udf']['match'](tmp[0][KEY_star_row])
        tmp[5][KEY_star_row] ??= {}
        tmp[6][KEY_star_row] ??= {}
        tmp[7][KEY_star_row] ??= {}
        tmp[8][KEY_star_row] ??= {} //
        tmp[5][KEY_star_row][KEY_star_row] ??= {}
        tmp[6][KEY_star_row][KEY_star_row] ??= {}
        for (let KEY_star_match in tmp[1][KEY_star_row]) {
            tmp[5][KEY_star_row][KEY_star_row][KEY_star_match] = inp['udf']['getCords'](KEY_star_row)(tmp[1][KEY_star_row][KEY_star_match])
            tmp[6][KEY_star_row][KEY_star_row][KEY_star_match] ??= {}
            tmp[7][KEY_star_row][KEY_star_match] ??= -Infinity
            for (let KEY_star_coord in tmp[5][KEY_star_row][KEY_star_row][KEY_star_match]) {
                tmp[6][KEY_star_row][KEY_star_row][KEY_star_match][KEY_star_coord] = inp['udf']['getAdj'](tmp[5][KEY_star_row][KEY_star_row][KEY_star_match][KEY_star_coord])
                for (let KEY_star_adj in tmp[6][KEY_star_row][KEY_star_row][KEY_star_match][KEY_star_coord]) {
                    tmp[7][KEY_star_row][KEY_star_match] = Math.max(tmp[7][KEY_star_row][KEY_star_match],inp['udf']['isSym'](inp['udf']['optionalChaining'](tmp[4][tmp[6][KEY_star_row][KEY_star_row][KEY_star_match][KEY_star_coord][KEY_star_adj][0]])(tmp[6][KEY_star_row][KEY_star_row][KEY_star_match][KEY_star_coord][KEY_star_adj][1])))
                }
            }
            tmp[8][KEY_star_row][KEY_star_match] = (inp['udf']['toNum'](tmp[1][KEY_star_row][KEY_star_match])*tmp[7][KEY_star_row][KEY_star_match])
        }
        tmp[9][KEY_star_row] = tmp[8][KEY_star_row]
    }
    for (let KEY_star_0 in tmp[9]) {
        for (let KEY_star_1 in tmp[9][KEY_star_0]) {
            tmp[10] += tmp[9][KEY_star_0][KEY_star_1]
        }
    }
    return tmp[10]
}