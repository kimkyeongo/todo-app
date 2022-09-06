import "./Todo.css";
import {useState} from "react";

    const Todo = () => {
        const [content, setContent] = useState({});
        const [contCurrent, setContCurrent] = useState(0);
        const [dataList, setDataList] = useState([]);
        const onChange = (e) => {
            setContent({id:contCurrent, content:e.target.value});
        };

        // let [inputs, setInputs] = useState();
        //
        // let {item,setItem} = useState();
        const addFunc = () => {
            console.info(content);
            setContCurrent(contCurrent + 1);
            setDataList({
                ...dataList,
                content
            })
        }

        return (
            <div className="Todo-body">
                <input name="todo-input" onChange={onChange}/>
                <button onClick={addFunc}>추가</button>
                <ul>
                    {dataList.map(info => (<li key={info.id}>info.content</li>))}
                </ul>
            </div>
        );
    }

export default Todo;