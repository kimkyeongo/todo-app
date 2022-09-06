import "./Todo.css";
import {useState} from "react";

    const Todo = () => {
        const [content, setContent] = useState({});
        const [contCurrent, setContCurrent] = useState(0);
        const [dataList, setDataList] = useState([]);
        const [input, setInput] = useState("");

        const onChange = (e) => {
            setInput(e.target.value);
            setContent({id:contCurrent, cont:e.target.value, checkStat : false});
        }

        const imgHandle = (info,e) => {
            e.target.src = e.target.src.indexOf("unchecked") < 0 ? "/unchecked.png" : "checked.png";
            dataList[dataList.findIndex(todo => todo.id === info.id)].checkStat = e.target.src.indexOf("unchecked") < 0 ? true : false;
            //TODO why this code alert to error??
            // setDataList(dataList.map(todo => todo.id === info.id ? todo.checkStat = true : todo.checkStat = false ));
            setDataList(dataList);
        }


        const delHandle = (id) => {
            setDataList(dataList.filter(todo => todo.id.toString() !== id.toString()));

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
                    {dataList.map(info =>
                        <li key={info.id.toString()} className={info.checkStat?"todo-check":"todo-uncheck"}>
                            <img src="/unchecked.png" onClick={e => {imgHandle(info,e)}}/>
                            {info.cont}
                            <img src="/trash-can.png" onClick={() => delHandle(info.id.toString())}/>
                        </li> )}
                </ul>
            </div>
        );
    }

export default Todo;