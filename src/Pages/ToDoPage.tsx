import ButtonLink from "../Components/ButtonLink"
import ToDoForm from "../Components/ToDoPageComponents/ToDoForm"

function ToDoPage() {
    return (
        <div className="container text-center">
            <div className="row">
                <section>
                    <ToDoForm>

                    </ToDoForm>

                </section>

            </div>
            <div className="row">
                <h1> TO DO PAGE</h1>
                <ButtonLink onClick={() => console.log("Todo Button Clicked")} page='/'> To Main-Page</ButtonLink>
            </div>
        </div>

    )
}

export default ToDoPage