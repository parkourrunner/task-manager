import "./App.scss";
import { TaskList } from "./components/task-list/TaskList";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { tasksMock } from "./data/Mock";

function App() {
  
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <TaskList tasksList={tasksMock} />
      </DndProvider>
    </div>
  );
}

export default App;
