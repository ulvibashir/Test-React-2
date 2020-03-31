import React, { useState } from 'react'

function ToDoTask() {
    const [inputValue, setInputValue] = useState('');
    const [toDoData, setToDoData] = useState([]);
    const [doneData, setDoneData] = useState([]);



    const OnChangeHandler = (e) => {
        setInputValue(e.target.value);
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        setToDoData([...toDoData, inputValue])
    }



    const toDoClickHandler = (e) => {
        console.log(e.target.textContent);
        setDoneData([...doneData, e.target.textContent])
        setToDoData(toDoData.filter(item => item !== e.target.textContent))
    }


    const onAnyDataClick = (e) => {
        setToDoData([...toDoData, e.target.textContent])
        setDoneData(doneData.filter(item => item !== e.target.textContent))
        
    }

    const onClearHandler = () => {
        setDoneData([]);
        setToDoData([]);
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input value={inputValue} onChange={OnChangeHandler}></input>
                <button>Add</button>
            </form>
                <button onClick={onClearHandler}>Clear</button>

            {!!toDoData.length &&

                <div>
                    <h2>To do</h2>

                    {toDoData.map((item, index) => (
                        <li onClick={toDoClickHandler} key={index}>{item}</li>
                    ))}
                </div>

            }



            {!!doneData.length &&

                <div>
                    <h2>Done</h2>

                    {doneData.map((item, index) => (
                        <li style={{
                            textDecoration: "line-through"
                        }} onClick={onAnyDataClick} key={index}>{item}</li>
                    ))}
                </div>

            }

        </div>
    )
}
export default ToDoTask;
