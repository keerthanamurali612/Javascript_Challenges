

document.querySelector('#info').addEventListener('click',()=>{
    console.log("display log message")
}

)

document.querySelector('#warn').addEventListener('click',()=>{
    console.warn("this is warning log message")
}

)

document.querySelector('#error').addEventListener('click',()=>{
    console.error("this line is error")
}


)

document.querySelector('#table').addEventListener('click',()=>{
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

}
);

document.querySelector("#group").addEventListener('click',()=>{

    const label="Log msg group"
    console.group(label);
    console.info('leo');
    console.info('rudra');
    console.info('shiva');
    console.info('keerthi');
    console.groupEnd(label);

});

document.querySelector('#custom').addEventListener('click',()=>{

    const spacing='5px';
    const style=
    `padding:${spacing};
    background-color:green;
    color:white;
    font-style: italic;
    border:${spacing} solid grey;
    font-size:2em;
    `

    console.log('%c Love Yourself ',style);

})


