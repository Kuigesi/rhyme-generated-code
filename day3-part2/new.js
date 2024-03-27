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
    tmp[8] ??= {}
    tmp[9] ??= {}
    tmp[10] ??= 0
    for (let KEY_star_line in tmp[0]) {
        tmp[3][KEY_star_line] = inp['udf']['matchAll']('\\d+','g')(tmp[0][KEY_star_line])
    }
    for (let KEY_star_i in tmp[0]) {
        tmp[1][KEY_star_i] = inp['udf']['split']('')(tmp[0][KEY_star_i])
        tmp[2][KEY_star_i] ??= {}
        tmp[4][KEY_star_i] ??= {}
        tmp[5][KEY_star_i] ??= {}
        tmp[6][KEY_star_i] ??= {} //
        for (let KEY_star_j in tmp[1][KEY_star_i]) {
            tmp[2][KEY_star_i][KEY_star_j] = inp['udf']['filter'](inp['udf']['isEqual'](tmp[1][KEY_star_i][KEY_star_j],inp['udf']['int2Char'](42)))
            tmp[4][KEY_star_i][KEY_star_j] ??= {}
            tmp[5][KEY_star_i][KEY_star_j] ??= []
            for (let KEY_star_line in tmp[0]) {
                tmp[4][KEY_star_i][KEY_star_j][KEY_star_line] ??= {}
                tmp[4][KEY_star_i][KEY_star_j][KEY_star_line][KEY_star_line] ??= {}
                for (let KEY_star_match in tmp[3][KEY_star_line]) {
                    tmp[4][KEY_star_i][KEY_star_j][KEY_star_line][KEY_star_line][KEY_star_match] = inp['udf']['filter'](inp['udf']['isAdj'](KEY_star_i,KEY_star_j,KEY_star_line,tmp[3][KEY_star_line][KEY_star_match]))
                    for (let KEY_star_f1 in tmp[2][KEY_star_i][KEY_star_j]) {
                        for (let KEY_star_f0 in tmp[4][KEY_star_i][KEY_star_j][KEY_star_line][KEY_star_line][KEY_star_match]) {
                            tmp[5][KEY_star_i][KEY_star_j] .push (inp['udf']['andThen'](tmp[2][KEY_star_i][KEY_star_j][KEY_star_f1],inp['udf']['andThen'](tmp[4][KEY_star_i][KEY_star_j][KEY_star_line][KEY_star_line][KEY_star_match][KEY_star_f0],inp['udf']['toNum'](tmp[3][KEY_star_line][KEY_star_match]))))
                        }
                    }
                }
            }
            tmp[6][KEY_star_i][KEY_star_j] = tmp[5][KEY_star_i][KEY_star_j]
        }
        tmp[7][KEY_star_i] = tmp[6][KEY_star_i]
    }
    for (let KEY_star_0 in tmp[7]) {
        tmp[8][KEY_star_0] ??= {}
        tmp[9][KEY_star_0] ??= {}
        for (let KEY_star_1 in tmp[7][KEY_star_0]) {
            tmp[8][KEY_star_0][KEY_star_1] = inp['udf']['filter'](inp['udf']['isEqual'](tmp[7][KEY_star_0][KEY_star_1]['length'],2))
            tmp[9][KEY_star_0][KEY_star_1] ??= {}
            for (let KEY_star_f2 in tmp[8][KEY_star_0][KEY_star_1]) {
                tmp[9][KEY_star_0][KEY_star_1][KEY_star_f2] ??= {}
                tmp[9][KEY_star_0][KEY_star_1][KEY_star_f2][KEY_star_0] ??= {}
                tmp[9][KEY_star_0][KEY_star_1][KEY_star_f2][KEY_star_0][KEY_star_1] = inp['udf']['andThen'](tmp[8][KEY_star_0][KEY_star_1][KEY_star_f2],tmp[7][KEY_star_0][KEY_star_1])
                tmp[10] += (tmp[9][KEY_star_0][KEY_star_1][KEY_star_f2][KEY_star_0][KEY_star_1][0]*tmp[9][KEY_star_0][KEY_star_1][KEY_star_f2][KEY_star_0][KEY_star_1][1])
            }
        }
    }
    return tmp[10]
}