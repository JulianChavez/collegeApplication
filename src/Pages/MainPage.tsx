import ButtonLink from "../Components/ButtonLink"

function MainPage() {
    return (
        <div>
            <h1> MAIN PAGE</h1>
            <ButtonLink onClick={() => console.log("Button Link Clicked")} page='/ToDoPage'> To To-Do-Page</ButtonLink>
        </div>
    )
}

export default MainPage

