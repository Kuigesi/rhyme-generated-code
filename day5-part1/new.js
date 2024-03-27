inp => {
    let tmp = {}
    tmp[0] = inp['udf']['split']('\n\n')(inp['input'])
    tmp[3] ??= {} //
    tmp[4] = inp['udf']['slice'](1)(inp['udf']['split']('\n\n')(inp['input']))
    tmp[5] ??= {}
    tmp[6] ??= {}
    tmp[7] ??= {}
    tmp[8] ??= {}
    tmp[9] ??= {} //
    tmp[10] ??= {}
    tmp[11] ??= {}
    tmp[12] ??= {} //
    tmp[13] ??= {}
    tmp[14] ??= {}
    tmp[15] ??= {} //
    tmp[16] ??= {}
    tmp[17] ??= {}
    tmp[18] ??= {} //
    tmp[19] ??= {}
    tmp[20] ??= {}
    tmp[21] ??= {} //
    tmp[22] ??= {}
    tmp[23] ??= {}
    tmp[24] ??= {} //
    tmp[25] ??= {}
    tmp[26] ??= {}
    tmp[27] ??= {} //
    tmp[28] ??= {}
    tmp[29] ??= {}
    tmp[30] ??= {} //
    tmp[31] ??= Infinity
    tmp[1] = inp['udf']['split'](':')(tmp[0][0])
    tmp[2] = inp['udf']['matchAll']('\\d+','g')(tmp[1][1])
    for (let KEY_star_map in tmp[4]) {
        tmp[5][KEY_star_map] = inp['udf']['slice'](1)(inp['udf']['split']('\n')(tmp[4][KEY_star_map]))
        tmp[6][KEY_star_map] ??= {}
        tmp[7][KEY_star_map] ??= {}
        tmp[8][KEY_star_map] ??= {} //
        for (let KEY_star_range in tmp[5][KEY_star_map]) {
            tmp[6][KEY_star_map][KEY_star_range] = inp['udf']['matchAll']('\\d+','g')(tmp[5][KEY_star_map][KEY_star_range])
            tmp[7][KEY_star_map][KEY_star_range] ??= []
            for (let KEY_star_t0 in tmp[6][KEY_star_map][KEY_star_range]) {
                tmp[7][KEY_star_map][KEY_star_range] .push (inp['udf']['toNum'](tmp[6][KEY_star_map][KEY_star_range][KEY_star_t0]))
            }
            tmp[8][KEY_star_map][KEY_star_range] = tmp[7][KEY_star_map][KEY_star_range]
        }
        tmp[9][KEY_star_map] = tmp[8][KEY_star_map]
    }
    for (let KEY_star_seed in tmp[2]) {
        tmp[3][KEY_star_seed] = inp['udf']['toNum'](tmp[2][KEY_star_seed])
    }
    for (let KEY_star_src0 in tmp[3]) {
        tmp[10][KEY_star_src0] ??= {}
        for (let KEY_star_range0 in tmp[9][0]) {
            tmp[10][KEY_star_src0][KEY_star_range0] ??= {}
            tmp[10][KEY_star_src0][KEY_star_range0][KEY_star_range0] = inp['udf']['filter'](inp['udf']['inRange'](tmp[3][KEY_star_src0],tmp[9][0][KEY_star_range0][1],tmp[9][0][KEY_star_range0][2]))
            for (let KEY_star_f0 in tmp[10][KEY_star_src0][KEY_star_range0][KEY_star_range0]) {
                tmp[11][KEY_star_src0] ??= inp['udf']['andThen'](tmp[10][KEY_star_src0][KEY_star_range0][KEY_star_range0][KEY_star_f0],((tmp[9][0][KEY_star_range0][0]+tmp[3][KEY_star_src0])-tmp[9][0][KEY_star_range0][1]))
            }
        }
        tmp[12][KEY_star_src0] = inp['udf']['orElse'](tmp[11][KEY_star_src0],tmp[3][KEY_star_src0])
    }
    for (let KEY_star_src1 in tmp[12]) {
        tmp[13][KEY_star_src1] ??= {}
        for (let KEY_star_range1 in tmp[9][1]) {
            tmp[13][KEY_star_src1][KEY_star_range1] ??= {}
            tmp[13][KEY_star_src1][KEY_star_range1][KEY_star_range1] = inp['udf']['filter'](inp['udf']['inRange'](tmp[12][KEY_star_src1],tmp[9][1][KEY_star_range1][1],tmp[9][1][KEY_star_range1][2]))
            for (let KEY_star_f1 in tmp[13][KEY_star_src1][KEY_star_range1][KEY_star_range1]) {
                tmp[14][KEY_star_src1] ??= inp['udf']['andThen'](tmp[13][KEY_star_src1][KEY_star_range1][KEY_star_range1][KEY_star_f1],((tmp[9][1][KEY_star_range1][0]+tmp[12][KEY_star_src1])-tmp[9][1][KEY_star_range1][1]))
            }
        }
        tmp[15][KEY_star_src1] = inp['udf']['orElse'](tmp[14][KEY_star_src1],tmp[12][KEY_star_src1])
    }
    for (let KEY_star_src2 in tmp[15]) {
        tmp[16][KEY_star_src2] ??= {}
        for (let KEY_star_range2 in tmp[9][2]) {
            tmp[16][KEY_star_src2][KEY_star_range2] ??= {}
            tmp[16][KEY_star_src2][KEY_star_range2][KEY_star_range2] = inp['udf']['filter'](inp['udf']['inRange'](tmp[15][KEY_star_src2],tmp[9][2][KEY_star_range2][1],tmp[9][2][KEY_star_range2][2]))
            for (let KEY_star_f2 in tmp[16][KEY_star_src2][KEY_star_range2][KEY_star_range2]) {
                tmp[17][KEY_star_src2] ??= inp['udf']['andThen'](tmp[16][KEY_star_src2][KEY_star_range2][KEY_star_range2][KEY_star_f2],((tmp[9][2][KEY_star_range2][0]+tmp[15][KEY_star_src2])-tmp[9][2][KEY_star_range2][1]))
            }
        }
        tmp[18][KEY_star_src2] = inp['udf']['orElse'](tmp[17][KEY_star_src2],tmp[15][KEY_star_src2])
    }
    for (let KEY_star_src3 in tmp[18]) {
        tmp[19][KEY_star_src3] ??= {}
        for (let KEY_star_range3 in tmp[9][3]) {
            tmp[19][KEY_star_src3][KEY_star_range3] ??= {}
            tmp[19][KEY_star_src3][KEY_star_range3][KEY_star_range3] = inp['udf']['filter'](inp['udf']['inRange'](tmp[18][KEY_star_src3],tmp[9][3][KEY_star_range3][1],tmp[9][3][KEY_star_range3][2]))
            for (let KEY_star_f3 in tmp[19][KEY_star_src3][KEY_star_range3][KEY_star_range3]) {
                tmp[20][KEY_star_src3] ??= inp['udf']['andThen'](tmp[19][KEY_star_src3][KEY_star_range3][KEY_star_range3][KEY_star_f3],((tmp[9][3][KEY_star_range3][0]+tmp[18][KEY_star_src3])-tmp[9][3][KEY_star_range3][1]))
            }
        }
        tmp[21][KEY_star_src3] = inp['udf']['orElse'](tmp[20][KEY_star_src3],tmp[18][KEY_star_src3])
    }
    for (let KEY_star_src4 in tmp[21]) {
        tmp[22][KEY_star_src4] ??= {}
        for (let KEY_star_range4 in tmp[9][4]) {
            tmp[22][KEY_star_src4][KEY_star_range4] ??= {}
            tmp[22][KEY_star_src4][KEY_star_range4][KEY_star_range4] = inp['udf']['filter'](inp['udf']['inRange'](tmp[21][KEY_star_src4],tmp[9][4][KEY_star_range4][1],tmp[9][4][KEY_star_range4][2]))
            for (let KEY_star_f4 in tmp[22][KEY_star_src4][KEY_star_range4][KEY_star_range4]) {
                tmp[23][KEY_star_src4] ??= inp['udf']['andThen'](tmp[22][KEY_star_src4][KEY_star_range4][KEY_star_range4][KEY_star_f4],((tmp[9][4][KEY_star_range4][0]+tmp[21][KEY_star_src4])-tmp[9][4][KEY_star_range4][1]))
            }
        }
        tmp[24][KEY_star_src4] = inp['udf']['orElse'](tmp[23][KEY_star_src4],tmp[21][KEY_star_src4])
    }
    for (let KEY_star_src5 in tmp[24]) {
        tmp[25][KEY_star_src5] ??= {}
        for (let KEY_star_range5 in tmp[9][5]) {
            tmp[25][KEY_star_src5][KEY_star_range5] ??= {}
            tmp[25][KEY_star_src5][KEY_star_range5][KEY_star_range5] = inp['udf']['filter'](inp['udf']['inRange'](tmp[24][KEY_star_src5],tmp[9][5][KEY_star_range5][1],tmp[9][5][KEY_star_range5][2]))
            for (let KEY_star_f5 in tmp[25][KEY_star_src5][KEY_star_range5][KEY_star_range5]) {
                tmp[26][KEY_star_src5] ??= inp['udf']['andThen'](tmp[25][KEY_star_src5][KEY_star_range5][KEY_star_range5][KEY_star_f5],((tmp[9][5][KEY_star_range5][0]+tmp[24][KEY_star_src5])-tmp[9][5][KEY_star_range5][1]))
            }
        }
        tmp[27][KEY_star_src5] = inp['udf']['orElse'](tmp[26][KEY_star_src5],tmp[24][KEY_star_src5])
    }
    for (let KEY_star_src6 in tmp[27]) {
        tmp[28][KEY_star_src6] ??= {}
        for (let KEY_star_range6 in tmp[9][6]) {
            tmp[28][KEY_star_src6][KEY_star_range6] ??= {}
            tmp[28][KEY_star_src6][KEY_star_range6][KEY_star_range6] = inp['udf']['filter'](inp['udf']['inRange'](tmp[27][KEY_star_src6],tmp[9][6][KEY_star_range6][1],tmp[9][6][KEY_star_range6][2]))
            for (let KEY_star_f6 in tmp[28][KEY_star_src6][KEY_star_range6][KEY_star_range6]) {
                tmp[29][KEY_star_src6] ??= inp['udf']['andThen'](tmp[28][KEY_star_src6][KEY_star_range6][KEY_star_range6][KEY_star_f6],((tmp[9][6][KEY_star_range6][0]+tmp[27][KEY_star_src6])-tmp[9][6][KEY_star_range6][1]))
            }
        }
        tmp[30][KEY_star_src6] = inp['udf']['orElse'](tmp[29][KEY_star_src6],tmp[27][KEY_star_src6])
    }
    for (let KEY_star_final in tmp[30]) {
        tmp[31] = Math.min(tmp[31],tmp[30][KEY_star_final])
    }
    return tmp[31]
}