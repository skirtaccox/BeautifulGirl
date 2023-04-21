/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function(s, k) {
    let str = ''
    for(let i = 0; i < s.length; i ++){
        if (isNaN(Number(s[i], 10))){
            str += s[i]
            // console.log(str);
        }
        else{
            let strCopy = str
            for (let j = 1; j < +s[i]; j++){
                str += strCopy
                // console.log(str);
            }
        }
    }
    console.log(str[k-1]);
    // return str[k-1]
};

decodeAtIndex('a2345678999999999999999', 1)