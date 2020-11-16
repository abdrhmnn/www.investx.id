const helper = {
    idr : (value) => {
        if (value !== undefined) {
            var h = []
            var val = value.toString().split('').reverse()
            val.unshift('n')
            for (var i = 1; i < val.length; i++) {
                h.push(val[i])

                if (i % 3 === 0) {
                    // // ////console.log(i)
                    h.push('.')
                }
            }
            var has = h.reverse().join('')
            if (has.startsWith('.')) {
                var x = has.split('')
                x.shift()
                return x.join('')
            } else {
                return has
            }
        }
    }
    
}


export default helper

