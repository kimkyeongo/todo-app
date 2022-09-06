import "./Todo.css";
import {useState, useEffect} from "react";

    const Todo = () => {
        const [content, setContent] = useState({});
        const [contCurrent, setContCurrent] = useState(0);
        const [dataList, setDataList] = useState([]);
        const [input, setInput] = useState("");

        const onChange = (e) => {
            setInput(e.target.value)
            setContent({id:contCurrent, cont:input});
        }

        // useEffect(() => {
        //     onChange();
        // }, [input]);

        const imgHandle = (e) => {
            e.target.src = e.target.src.indexOf("unchecked") < 0 ? "/unchecked.png" : "checked.png";
        }

        const addFunc = e => {
            e.preventDefault();
            // setContCurrent(Math.floor(Math.random() * 10000));
            setContCurrent(contCurrent + 1);
            setDataList((dataList) => {
                    return input === '' ? [...dataList] : [...dataList,content];
                });

            setInput('');

        }

        return (
            <div className="Todo-body">
                <input className="todo-input" placeholder="Add a todo" onChange={onChange} value={input} />
                <button className="todo-button" onClick={addFunc}>Add todo</button>
                <ul>
                    {dataList.map(info => <li key={info.id.toString()}><img src="/unchecked.png" onClick={imgHandle}/> {info.cont}</li> )}
                </ul>
            </div>
        );
    }

export default Todo;