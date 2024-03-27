inp => {
    let tmp = {}
    tmp[0] ??= {}
    tmp[0]['$display'] = 'select'
    tmp[1] ??= {}
    tmp[1]['data'] ??= {} //
    tmp[1]['data']['x'] = 20
    tmp[1]['data']['y'] = 70
    tmp[2] ??= {}
    tmp[2]['data'] ??= {} //
    tmp[2]['data']['x'] = 40
    tmp[2]['data']['y'] = 30
    tmp[3] ??= {}
    tmp[3]['data'] ??= {} //
    tmp[3]['data']['x'] = 60
    tmp[3]['data']['y'] = 50
    tmp[4] ??= {}
    tmp[4]['data'] ??= {} //
    tmp[4]['data']['x'] = 80
    tmp[4]['data']['y'] = 60
    tmp[5] ??= {}
    tmp[5]['data'] ??= {} //
    tmp[5]['data']['x'] = 100
    tmp[5]['data']['y'] = 40
    tmp[6] ??= {}
    tmp[6]['data'] ??= []
    tmp[7] ??= {}
    tmp[7]['data'] ??= []
    tmp[8] ??= {}
    tmp[8]['data'] ??= []
    tmp[9] ??= {}
    tmp[9]['data'] ??= []
    tmp[10] ??= {}
    tmp[10]['data'] ??= []
    tmp[6]['data'] .push (tmp[1]['data'])
    tmp[7]['data'] .push (tmp[2]['data'])
    tmp[8]['data'] .push (tmp[3]['data'])
    tmp[9]['data'] .push (tmp[4]['data'])
    tmp[10]['data'] .push (tmp[5]['data'])
    tmp[0]['data'] = [tmp[6]['data'],tmp[7]['data'],tmp[8]['data'],tmp[9]['data'],tmp[10]['data']].flat()
    return tmp[0]
}