inp => {
    let tmp = {}
    tmp[0] ??= {}
    tmp[1] ??= {} //
    tmp[0]['data'] ??= {} //
    tmp[0]['data']['n'] = (inp['data']['n']-1)
    tmp[1]['data'] = tmp[0]['data']
    tmp[1]['udf'] = inp['udf']
    tmp[2] = (inp['data']['n']*inp['udf']['func'](tmp[1]))
    return tmp[2]
}