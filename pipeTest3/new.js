inp => {
    let tmp = {}
    tmp[0] ??= 0
    tmp[0] += inp['input']['foo']
    return tmp[0]
}