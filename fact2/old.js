inp => {
    let tmp = {}
    tmp[0] ??= {}
    tmp[0]['data'] ??= {} //
    tmp[0]['data']['n'] = (inp['data']['n']-1)
    tmp[1] ??= {} //
    tmp[1]['udf'] = inp['udf']
    tmp[1]['data'] = tmp[0]['data']
    tmp[2] = inp['udf']['orElse']((inp['data']['n']*inp['udf']['func'](inp['udf']['andAlso'](inp['udf']['ne'](inp['data']['n'],0),tmp[1]))),1)
    return tmp[2]
}