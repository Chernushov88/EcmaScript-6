// http://date.jsontest.com/

/*function oldDelay(ms, func) {
    setTimeout(function() {
        func()
    }, ms)
}

oldDelay(3000, function(){
    console.log('Old delay passed!')
})*/

/*function deley(ms = 1000) {
    return new Promise((resolve, reject) => [
        setTimeout( () =>{
            reject()
        }, ms)
    ])
}
deley(2000)
    .then(() => {
        console.log('new deley passed!')
    })
    .catch(() => {
        console.info('error')
    })
    .then(() => {
        console.log('new deley test!')
    })*/


import $ from 'jquery'
let promise = new Promise((resolve, reject) => {
    $.ajax({
        url: 'http://date.jsontest.com/',
        dataType: 'json',
        success: function(response){
            resolve(response)
        },
        error: function(error){
            reject(error)
        }
    })
})

promise
    .then((data) => {
        console.log('success - ', data)
        return data.date
    })
    .then((date) => {
        console.log('Date', date)
    })
    .catch((error) =>{
        console.info(error)
    })