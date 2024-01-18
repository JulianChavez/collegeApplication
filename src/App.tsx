import Task from "./Components/Task";
import { Route, Routes } from "react-router-dom";


//Pages
import ToDoPage from "./Pages/ToDoPage"
import MainPage from "./Pages/MainPage"

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/ToDoPage' element={<ToDoPage />} />
      </Routes>
    </div>
  )
}

export default App