// EditCard.tsx
import React, { useState } from "react";
import { Task } from "../../../../../../../types/index";

interface EditCardProps {
  task: Task;
  saveEdit: (newTask: Task) => void;
  closeEdit: () => void;
}

const EditCard: React.FC<EditCardProps> = ({ task, saveEdit, closeEdit }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const handleSave = () => {
    const newTask: Task = { ...task, title, description, dueDate };
    saveEdit(newTask);
    closeEdit();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-1/3">
        <h3 className="font-bold text-lg mb-4">Edit Task</h3>
        <div className="mb-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="input input-bordered w-full mb-2"
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="input input-bordered w-full mb-2"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="input input-bordered w-full mb-2"
          />
        </div>
        <button className="btn btn-primary mr-2" onClick={handleSave}>
          Save
        </button>
        <button className="btn" onClick={closeEdit}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditCard;
