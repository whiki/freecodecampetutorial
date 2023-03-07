const {readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf8',(err,result) =>{
    if (err) throw err
    const first = result
    readFile('./content/second.txt','utf8',(err,result) =>{
        if (err) throw err
        const second = result
        writeFile(
        './content/result-async.txt',
        `Here is the result: ${first} , ${second}`, (err,result) => {
            if (err) throw err
            console.log('Done')
        })
    })
})