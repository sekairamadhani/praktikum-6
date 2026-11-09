import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Kelas Ideopolitor",
      priority: "High",
      status: "In Progress",
      createdAt: "10 Nov 2026, 14:00",
    },
    {
      id: 2,
      name: "Undangan Pemateri",
      priority: "Medium",
      status: "In Progress",
      createdAt: "10 Nov 2026, 15:30",
    },
    {
      id: 3,
      name: "Responsi Pfs",
      priority: "High",
      status: "To Do",
      createdAt: "10 Nov 2026, 16:00",
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleShowForm = () => setShowForm(true);

  const handleCloseForm = () => {
    setShowForm(false);
    setTaskToEdit(null);
  };

  const addTask = (task) => {
    const now = new Date();
    const formattedDate = `${now.getDate()} ${now.toLocaleString("default", { month: "short" })} ${now.getFullYear()}, ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    setTasks([...tasks, { ...task, id: Date.now(), createdAt: formattedDate }]);
  };

  const editTask = (updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === updatedTask.id
          ? { ...updatedTask, createdAt: task.createdAt }
          : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const showEditForm = (task) => {
    setTaskToEdit(task);
    handleShowForm();
  };

  return (
    <div
      style={{
        backgroundColor: "#eef2ff",
        minHeight: "100vh",
        padding: "50px 0",
      }}
    >
      <Container style={{ maxWidth: "750px" }}>
        {/* Header dengan Nuansa Biru Soft */}
        <div className="d-flex justify-content-between align-items-center mb-4 bg-white p-4 rounded-4 shadow-sm border border-light">
          <div>
            <h2
              className="fw-bold text-dark m-0"
              style={{ letterSpacing: "-0.5px" }}
            >
              Task List
            </h2>
            <p className="text-muted small m-0 mt-1">
              Kelola daftar kegiatan harianmu dengan lebih terstruktur.
            </p>
          </div>
          <Button
            onClick={handleShowForm}
            className="shadow-sm"
            style={{
              backgroundColor: "#4f46e5",
              borderColor: "#4f46e5",
              borderRadius: "30px",
              padding: "10px 22px",
              fontWeight: "600",
              fontSize: "14px",
              transition: "all 0.3s",
            }}
          >
            + Add Task
          </Button>
        </div>

        {/* Task List Component */}
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          showEditForm={showEditForm}
        />

        {/* Task Form Modal */}
        <TaskForm
          show={showForm}
          handleClose={handleCloseForm}
          addTask={addTask}
          editTask={editTask}
          taskToEdit={taskToEdit}
        />
      </Container>
    </div>
  );
}

export default App;
