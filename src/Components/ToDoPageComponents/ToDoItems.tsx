
interface Props {
    name: string;
}

function ToDoItems({ name }: Props) {
    return (
        <li>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p> {name} </p>
                    </div>
                    <div className="col">
                        <p> DELETE </p>
                    </div>
                </div>

            </div>
        </li>
    )
}

export default ToDoItems