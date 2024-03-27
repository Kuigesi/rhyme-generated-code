inp => {
    let tmp = {}
    tmp[1] ??= {}
    tmp[1]['query1'] ??= []
    tmp[2] ??= {}
    tmp[2]['query2'] ??= 0
    tmp[3] ??= {}
    tmp[3]['query2A'] ??= {}
    tmp[3]['query2A']['v'] ??= 0
    tmp[5] ??= {}
    tmp[5]['query3'] ??= []
    tmp[6] ??= {}
    tmp[6]['query4'] ??= 0
    for (let KEY_star_ in inp['data']) {
        tmp[1]['query1'] .push (inp['data'][KEY_star_]['value'])
        tmp[2]['query2'] += inp['data'][KEY_star_]['value']
        tmp[3]['query2A']['v'] += inp['data'][KEY_star_]['value']
        tmp[5]['query3'] .push (inp['data'][KEY_star_]['value'])
        tmp[6]['query4'] += inp['data'][KEY_star_]['value']
    }
    tmp[0] ??= {}
    tmp[0]['query1'] ??= []
    tmp[0]['query1'] .push (tmp[1]['query1'])
    tmp[0]['query2'] ??= []
    tmp[0]['query2'] .push (tmp[2]['query2'])
    tmp[4] ??= {}
    tmp[4]['query2A'] ??= {} //
    tmp[4]['query2A']['v'] = tmp[3]['query2A']['v']
    tmp[0]['query2A'] ??= []
    tmp[0]['query3'] ??= ''
    tmp[0]['query3'] += tmp[5]['query3']
    tmp[0]['query4'] ??= 0
    tmp[0]['query4'] += tmp[6]['query4']
    tmp[0]['query2A'] .push (tmp[4]['query2A'])
    return tmp[0]
}