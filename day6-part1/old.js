inp => {
    let tmp = {}
    tmp[0] = inp['udf']['split']('\n')(inp['input'])
    tmp[3] ??= {} //
    tmp[1] = inp['udf']['matchAll']('\\d+','g')(tmp[0][0])
    tmp[2] = inp['udf']['matchAll']('\\d+','g')(tmp[0][1])
    for (let KEY_star_pair in tmp[1]) {
        if (tmp[2][KEY_star_pair] === undefined) continue
        tmp[3][KEY_star_pair] = (((inp['udf']['floor'](((inp['udf']['toNum'](tmp[1][KEY_star_pair])/2)+(inp['udf']['sqrt'](((inp['udf']['toNum'](tmp[1][KEY_star_pair])*inp['udf']['toNum'](tmp[1][KEY_star_pair]))-(4*inp['udf']['toNum'](tmp[2][KEY_star_pair]))))/2)))-inp['udf']['isInteger'](((inp['udf']['toNum'](tmp[1][KEY_star_pair])/2)+(inp['udf']['sqrt'](((inp['udf']['toNum'](tmp[1][KEY_star_pair])*inp['udf']['toNum'](tmp[1][KEY_star_pair]))-(4*inp['udf']['toNum'](tmp[2][KEY_star_pair]))))/2))))-(inp['udf']['ceil'](((inp['udf']['toNum'](tmp[1][KEY_star_pair])/2)-(inp['udf']['sqrt'](((inp['udf']['toNum'](tmp[1][KEY_star_pair])*inp['udf']['toNum'](tmp[1][KEY_star_pair]))-(4*inp['udf']['toNum'](tmp[2][KEY_star_pair]))))/2)))+inp['udf']['isInteger'](((inp['udf']['toNum'](tmp[1][KEY_star_pair])/2)-(inp['udf']['sqrt'](((inp['udf']['toNum'](tmp[1][KEY_star_pair])*inp['udf']['toNum'](tmp[1][KEY_star_pair]))-(4*inp['udf']['toNum'](tmp[2][KEY_star_pair]))))/2)))))+1)
    }
    tmp[4] ??= 1
    for (let KEY_star_ in tmp[3]) {
        tmp[4] *= tmp[3][KEY_star_]
    }
    return tmp[4]
}