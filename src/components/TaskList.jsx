import React from "react";
import { Button, Card, Badge } from "react-bootstrap";

const TaskList = ({ tasks, deleteTask, showEditForm }) => {
  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "High":
        return (
          <Badge
            bg="danger"
            className="px-3 py-2 rounded-pill fw-semibold"
            style={{ fontSize: "11px", letterSpacing: "0.5px" }}
          >
            High
          </Badge>
        );
      case "Medium":
        return (
          <Badge
            bg="warning"
            text="dark"
            className="px-3 py-2 rounded-pill fw-semibold"
            style={{ fontSize: "11px", letterSpacing: "0.5px" }}
          >
            Medium
          </Badge>
        );
      case "Low":
        return (
          <Badge
            bg="success"
            className="px-3 py-2 rounded-pill fw-semibold"
            style={{ fontSize: "11px", letterSpacing: "0.5px" }}
          >
            Low
          </Badge>
        );
      default:
        return (
          <Badge bg="secondary" className="px-3 py-2 rounded-pill">
            {priority}
          </Badge>
        );
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "Done":
        return (
          <Badge
            bg="success"
            className="px-3 py-2 rounded-pill fw-normal"
            style={{ fontSize: "11px" }}
          >
            Done
          </Badge>
        );
      case "In Progress":
        return (
          <Badge
            bg="info"
            text="dark"
            className="px-3 py-2 rounded-pill fw-normal"
            style={{ fontSize: "11px" }}
          >
            In Progress
          </Badge>
        );
      default:
        return (
          <Badge
            bg="secondary"
            className="px-3 py-2 rounded-pill fw-normal"
            style={{ fontSize: "11px" }}
          >
            To Do
          </Badge>
        );
    }
  };

  return (
    <div>
      {tasks.length === 0 ? (
        <div className="text-center py-5 text-muted bg-white rounded-4 shadow-sm border border-light">
          <p className="mb-0">Belum ada tugas. Yuk buat tugas barumu!</p>
        </div>
      ) : (
        tasks.map((task) => (
          <Card
            className="mb-3 border-0 shadow-sm rounded-4 position-relative overflow-hidden"
            key={task.id}
            style={{
              backgroundColor: "#ffffff",
              borderLeft: "5px solid #6366f1 !important", // Aksen garis biru soft di sisi kiri card
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            <Card.Body className="d-flex align-items-center justify-content-between py-3 px-4">
              {/* Task Name & Timestamp */}
              <div style={{ flex: "1.4" }}>
                <span
                  className="text-muted text-uppercase d-block mb-1"
                  style={{
                    fontSize: "10px",
                    fontWeight: "700",
                    letterSpacing: "0.8px",
                  }}
                >
                  Task Name
                </span>
                <h5
                  className="fw-bold text-dark mb-1"
                  style={{ fontSize: "16px" }}
                >
                  {task.name}
                </h5>
                <span className="text-muted" style={{ fontSize: "11px" }}>
                  🕒 Dibuat: {task.createdAt || "Baru saja"}
                </span>
              </div>

              {/* Priority */}
              <div style={{ flex: "0.8" }} className="text-center">
                <span
                  className="text-muted text-uppercase d-block mb-1"
                  style={{
                    fontSize: "10px",
                    fontWeight: "700",
                    letterSpacing: "0.8px",
                  }}
                >
                  Priority
                </span>
                {getPriorityBadge(task.priority)}
              </div>

              {/* Status */}
              <div style={{ flex: "0.9" }} className="text-center">
                <span
                  className="text-muted text-uppercase d-block mb-1"
                  style={{
                    fontSize: "10px",
                    fontWeight: "700",
                    letterSpacing: "0.8px",
                  }}
                >
                  Status
                </span>
                {getStatusBadge(task.status)}
              </div>

              {/* Action Buttons */}
              <div className="d-flex align-items-center gap-2 ms-3">
                <Button
                  variant="light"
                  className="p-2 rounded-circle border-0 text-primary d-flex align-items-center justify-content-center shadow-sm"
                  style={{
                    width: "38px",
                    height: "38px",
                    backgroundColor: "#eef2ff",
                  }}
                  onClick={() => showEditForm(task)}
                  title="Edit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fillRule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                    />
                  </svg>
                </Button>

                <Button
                  variant="light"
                  className="p-2 rounded-circle border-0 text-danger d-flex align-items-center justify-content-center shadow-sm"
                  style={{
                    width: "38px",
                    height: "38px",
                    backgroundColor: "#fff1f2",
                  }}
                  onClick={() => deleteTask(task.id)}
                  title="Delete"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2.001 2.001 0 0 0 4.885 16h6.23a2.001 2.001 0 0 0 1.956-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.479 1a-.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5" />
                  </svg>
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default TaskList;
