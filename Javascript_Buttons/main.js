

document.querySelector('#info').addEventListener('click',()=>
console.log("display log message")
)

document.querySelector('#warn').addEventListener('click',()=>
console.warn("this is warning log message")
)

document.querySelector('#error').addEventListener('click',()=>
console.error("this line is error")

)

document.querySelector('#table').addEventListener('click',()=>

console.table([
    {
        first:'rudra',
        last:'murali',
    },
    {
        first:'shiva',
        last:'murali',
        dob:'01022024'
    },
    {
        first:'rudra',
        last:'murali',
    },
    

])


)
