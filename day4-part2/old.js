inp => {
    let tmp = {}
    tmp[0] = inp['udf']['split']('\n')(inp['input'])
    tmp[1] ??= {}
    tmp[2] ??= {}
    tmp[3] ??= {}
    tmp[4] ??= {}
    tmp[5] ??= {}
    tmp[7] ??= {}
    tmp[8] ??= {}
    tmp[9] ??= {}
    tmp[10] ??= {}
    tmp[13] ??= {} //
    for (let KEY_star_line in tmp[0]) {
        tmp[1][KEY_star_line] = inp['udf']['split'](':')(tmp[0][KEY_star_line])
        tmp[2][KEY_star_line] = inp['udf']['matchAll']('\\d+','g')(tmp[1][KEY_star_line][0])
        tmp[3][KEY_star_line] = inp['udf']['split']('|')(tmp[1][KEY_star_line][1])
        tmp[4][KEY_star_line] = inp['udf']['matchAll']('\\d+','g')(tmp[3][KEY_star_line][0])
        tmp[5][KEY_star_line] = inp['udf']['matchAll']('\\d+','g')(tmp[3][KEY_star_line][1])
        tmp[7][inp['udf']['toNum'](tmp[2][KEY_star_line][0])] ??= {}
        tmp[7][inp['udf']['toNum'](tmp[2][KEY_star_line][0])]['match'] ??= []
        tmp[8][inp['udf']['toNum'](tmp[2][KEY_star_line][0])] ??= {}
        tmp[8][inp['udf']['toNum'](tmp[2][KEY_star_line][0])]['match'] ??= []
        tmp[9][inp['udf']['toNum'](tmp[2][KEY_star_line][0])] ??= {}
        tmp[9][inp['udf']['toNum'](tmp[2][KEY_star_line][0])]['match'] ??= {}
        tmp[10][inp['udf']['toNum'](tmp[2][KEY_star_line][0])] ??= {}
        tmp[10][inp['udf']['toNum'](tmp[2][KEY_star_line][0])]['match'] ??= {}
        tmp[10][inp['udf']['toNum'](tmp[2][KEY_star_line][0])]['match'][KEY_star_line] ??= {} //
        for (let KEY_star_winNum in tmp[4][KEY_star_line]) {
            tmp[7][inp['udf']['toNum'](tmp[2][KEY_star_line][0])]['match'] .push (inp['udf']['toNum'](tmp[4][KEY_star_line][KEY_star_winNum]))
        }
        for (let KEY_star_numYouHave in tmp[5][KEY_star_line]) {
            tmp[8][inp['udf']['toNum'](tmp[2][KEY_star_line][0])]['match'] .push (inp['udf']['toNum'](tmp[5][KEY_star_line][KEY_star_numYouHave]))
        }
        tmp[6] ??= {}
        tmp[6][inp['udf']['toNum'](tmp[2][KEY_star_line][0])] ??= {}
        tmp[6][inp['udf']['toNum'](tmp[2][KEY_star_line][0])]['match'] = [tmp[7][inp['udf']['toNum'](tmp[2][KEY_star_line][0])]['match'],tmp[8][inp['udf']['toNum'](tmp[2][KEY_star_line][0])]['match']].flat()
        for (let KEY_star_num in tmp[6][inp['udf']['toNum'](tmp[2][KEY_star_line][0])]['match']) {
            tmp[9][inp['udf']['toNum'](tmp[2][KEY_star_line][0])]['match'][tmp[6][inp['udf']['toNum'](tmp[2][KEY_star_line][0])]['match'][KEY_star_num]] ??= 0
            tmp[9][inp['udf']['toNum'](tmp[2][KEY_star_line][0])]['match'][tmp[6][inp['udf']['toNum'](tmp[2][KEY_star_line][0])]['match'][KEY_star_num]] += 1
            tmp[10][inp['udf']['toNum'](tmp[2][KEY_star_line][0])]['match'][KEY_star_line][tmp[6][inp['udf']['toNum'](tmp[2][KEY_star_line][0])]['match'][KEY_star_num]] = tmp[9][inp['udf']['toNum'](tmp[2][KEY_star_line][0])]['match'][tmp[6][inp['udf']['toNum'](tmp[2][KEY_star_line][0])]['match'][KEY_star_num]]
        }
        tmp[11] ??= {}
        tmp[11][inp['udf']['toNum'](tmp[2][KEY_star_line][0])] ??= {}
        tmp[11][inp['udf']['toNum'](tmp[2][KEY_star_line][0])]['match'] ??= 0
        for (let KEY_star_freq in tmp[10][inp['udf']['toNum'](tmp[2][KEY_star_line][0])]['match'][KEY_star_line]) {
            tmp[11][inp['udf']['toNum'](tmp[2][KEY_star_line][0])]['match'] += inp['udf']['isEqual'](tmp[10][inp['udf']['toNum'](tmp[2][KEY_star_line][0])]['match'][KEY_star_line][KEY_star_freq],2)
        }
        tmp[12] ??= {}
        tmp[12][inp['udf']['toNum'](tmp[2][KEY_star_line][0])] ??= {}
        tmp[12][inp['udf']['toNum'](tmp[2][KEY_star_line][0])][KEY_star_line] ??= {} //
        tmp[12][inp['udf']['toNum'](tmp[2][KEY_star_line][0])][KEY_star_line]['id'] = inp['udf']['toNum'](tmp[2][KEY_star_line][0])
        tmp[12][inp['udf']['toNum'](tmp[2][KEY_star_line][0])][KEY_star_line]['match'] = tmp[11][inp['udf']['toNum'](tmp[2][KEY_star_line][0])]['match']
        tmp[12][inp['udf']['toNum'](tmp[2][KEY_star_line][0])][KEY_star_line]['count'] = 1
        tmp[13][inp['udf']['toNum'](tmp[2][KEY_star_line][0])] = tmp[12][inp['udf']['toNum'](tmp[2][KEY_star_line][0])][KEY_star_line]
    }
    tmp[14] ??= {}
    for (let KEY_star_j in tmp[13]) {
    }
    tmp[15] ??= {} //
    for (let KEY_star_lineRes in tmp[13]) {
    }
    tmp[16] ??= 0
    // --- repeated generators ---
    for (let KEY_star_lineRes in tmp[13]) {
        for (let KEY_star_j in tmp[13]) {
            tmp[14][KEY_star_lineRes] = inp['udf']['andThen'](inp['udf']['incCard'](tmp[13][tmp[13][KEY_star_j]['id']],(inp['udf']['logicalAnd'](inp['udf']['isGreaterThan'](tmp[13][KEY_star_j]['id'],tmp[13][KEY_star_lineRes]['id']),inp['udf']['isLessOrEqual'](tmp[13][KEY_star_j]['id'],(tmp[13][KEY_star_lineRes]['id']+tmp[13][KEY_star_lineRes]['match'])))*tmp[13][KEY_star_lineRes]['count'])),tmp[13][KEY_star_lineRes]['count']) ?? tmp[14][KEY_star_lineRes]
        }
    }
    for (let KEY_star_lineRes in tmp[13]) {
        tmp[15][KEY_star_lineRes] = tmp[14][KEY_star_lineRes]
    }
    for (let KEY_star_ in tmp[15]) {
        tmp[16] += tmp[15][KEY_star_]
    }
    return tmp[16]
}