import Card from "../UI/Card";
import classes from './ToDoForm.module.css'

function ToDoForm() {
    return (
        <Card>
            <form className={classes.form}>
                <div>
                    <label htmlFor="title"> To Do List</label>
                    <input type="text" required id="title" />
                </div>

            </form>

        </Card>
    )


}

export default ToDoForm;