import "./Todo.css";
import {useState} from "react";

    const Todo = () => {
        const [content, setContent] = useState({
            idx: 0,
            content:""
        });

        const onChange = (e) => {
            setContent({
                ...content,
                {content : e.target.value, idx : 1}
            });
        };

        // let [inputs, setInputs] = useState();
        //
        // let {item,setItem} = useState();
        let addFunc = () => {
            // const {value} = e.target;

        }

        return (
            <div className="Todo-body">
                <input name="todo-input" onChange={onChange}/>
                <button onClick={addFunc}>추가</button>
            </div>
        );
    }

export default Todo;