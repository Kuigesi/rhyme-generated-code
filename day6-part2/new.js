inp => {
    let tmp = {}
    tmp[0] = inp['udf']['split']('\n')(inp['input'])
    tmp[2] ??= 0
    tmp[3] ??= 0
    tmp[4] ??= 0
    tmp[6] ??= 0
    tmp[7] ??= 0
    tmp[8] ??= 0
    tmp[9] ??= 0
    tmp[10] ??= 0
    tmp[11] ??= 0
    tmp[12] ??= 0
    tmp[13] ??= 0
    tmp[14] ??= 0
    tmp[15] ??= 0
    tmp[16] ??= 0
    tmp[17] ??= 0
    tmp[18] ??= 0
    tmp[1] = inp['udf']['matchAll']('\\d+','g')(tmp[0][0])
    tmp[5] = inp['udf']['matchAll']('\\d+','g')(tmp[0][1])
    for (let KEY_star_pair in tmp[1]) {
        if (tmp[5][KEY_star_pair] === undefined) continue
        tmp[2] += tmp[1][KEY_star_pair]
        tmp[3] += tmp[1][KEY_star_pair]
        tmp[4] += tmp[1][KEY_star_pair]
        tmp[6] += tmp[5][KEY_star_pair]
        tmp[7] += tmp[1][KEY_star_pair]
        tmp[8] += tmp[1][KEY_star_pair]
        tmp[9] += tmp[1][KEY_star_pair]
        tmp[10] += tmp[5][KEY_star_pair]
        tmp[11] += tmp[1][KEY_star_pair]
        tmp[12] += tmp[1][KEY_star_pair]
        tmp[13] += tmp[1][KEY_star_pair]
        tmp[14] += tmp[5][KEY_star_pair]
        tmp[15] += tmp[1][KEY_star_pair]
        tmp[16] += tmp[1][KEY_star_pair]
        tmp[17] += tmp[1][KEY_star_pair]
        tmp[18] += tmp[5][KEY_star_pair]
    }
    tmp[19] = (((inp['udf']['floor'](((inp['udf']['toNum'](tmp[2])/2)+(inp['udf']['sqrt'](((inp['udf']['toNum'](tmp[3])*inp['udf']['toNum'](tmp[4]))-(4*inp['udf']['toNum'](tmp[6]))))/2)))-inp['udf']['isInteger'](((inp['udf']['toNum'](tmp[7])/2)+(inp['udf']['sqrt'](((inp['udf']['toNum'](tmp[8])*inp['udf']['toNum'](tmp[9]))-(4*inp['udf']['toNum'](tmp[10]))))/2))))-(inp['udf']['ceil'](((inp['udf']['toNum'](tmp[11])/2)-(inp['udf']['sqrt'](((inp['udf']['toNum'](tmp[12])*inp['udf']['toNum'](tmp[13]))-(4*inp['udf']['toNum'](tmp[14]))))/2)))+inp['udf']['isInteger'](((inp['udf']['toNum'](tmp[15])/2)-(inp['udf']['sqrt'](((inp['udf']['toNum'](tmp[16])*inp['udf']['toNum'](tmp[17]))-(4*inp['udf']['toNum'](tmp[18]))))/2)))))+1)
    return tmp[19]
}