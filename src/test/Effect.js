import React,{useState, useEffect} from "react"

function Effect(){
    const [count, setCount] = useState(0)
    const [word, setWord] = useState("")

    useEffect(()=>
    console.log("change count", count), [count])

    useEffect(()=>
    console.log("change word",word), [word])

    function addHandler(){
        setCount(count + 1)
    }
    function textHandler(event){
        setWord(event.target.value)
       
    };

    return(
        <div>
            <h1>Num Count : {count} </h1>
            <button onClick={addHandler}>+</button>
            <input type="text" onChange={textHandler}></input>
            <div>{word}</div>
        </div>

    )
}

export default Effect;