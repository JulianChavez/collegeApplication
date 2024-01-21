import { useRef } from 'react';

import Card from "../UI/Card";
import classes from './ToDoForm.module.css'
import React from "react";

function ToDoForm() {
    const toDoInputRef = useRef<HTMLInputElement>(null);


    function submitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        //The ! tells typescript to say that during the time of operation current would not be NULL
        const enteredToDo = toDoInputRef.current!.value;
        const ToDoFormData = {
            task: enteredToDo
        }

        console.log(ToDoFormData)


    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div>
                    <label htmlFor="title"> To Do List</label>
                    <input type="text" required id="title" ref={toDoInputRef} />
                </div>
                <div >
                    <button>Add</button>
                </div>
            </form>
        </Card>
    )


}

export default ToDoForm;