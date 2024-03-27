inp => {
    let tmp = {}
    tmp[1] = inp['udf']['split']('\n\n')(inp['input'])
    tmp[3] ??= {}
    tmp[4] ??= {}
    tmp[4]['state'] ??= {}
    tmp[5] ??= {}
    tmp[5]['state'] ??= {} //
    tmp[7] ??= {}
    tmp[7]['state'] ??= 0
    tmp[2] = inp['udf']['split']('\n')(tmp[1][1])
    tmp[6] = inp['udf']['split']('')(tmp[1][0])
    for (let KEY_star_line in tmp[2]) {
        tmp[3][KEY_star_line] = inp['udf']['matchAll']('[A-Z]{3}','g')(tmp[2][KEY_star_line])
        tmp[4]['state'][tmp[3][KEY_star_line][0][0]] ??= {}
        tmp[4]['state'][tmp[3][KEY_star_line][0][0]][KEY_star_line] ??= {} //
        tmp[4]['state'][tmp[3][KEY_star_line][0][0]][KEY_star_line]['L'] = tmp[3][KEY_star_line][1][0]
        tmp[4]['state'][tmp[3][KEY_star_line][0][0]][KEY_star_line]['R'] = tmp[3][KEY_star_line][2][0]
        tmp[5]['state'][tmp[3][KEY_star_line][0][0]] = tmp[4]['state'][tmp[3][KEY_star_line][0][0]][KEY_star_line]
    }
    for (let KEY_star_I in tmp[6]) {
        tmp[7]['state'] += 1
    }
    tmp[0] ??= {}
    tmp[0]['state'] = tmp[5]['state'][inp['state']['state']][tmp[6][Math.trunc((inp['state']['steps']%tmp[7]['state']))]]
    tmp[0]['steps'] = (inp['state']['steps']+1)
    return tmp[0]
}