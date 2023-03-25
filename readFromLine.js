const readLine = require('readline')

const r1 = readLine.createInterface({
    input: process.stdin,
    output:process.stdout
})

function takeinp(msg){
    return(
        new Promise((callback,err)=>{
            r1.question(msg , (input)=>{
                callback(input)
            },function(){
                err()
            })
        })
    )
}

async function readFromLine(){
    const name = await takeinp('Please enter your Name::>>')
    console.log(`Name ->> ${name}`)
}
readFromLine()