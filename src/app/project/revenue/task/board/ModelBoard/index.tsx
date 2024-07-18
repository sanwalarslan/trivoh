import React, { useState, useEffect } from "react";

interface TaskModalProps {
  onSave: (title: string, description: string, dueDate: string, position: string) => void;
  onClose: () => void;
  resetFields: boolean;
}

const TaskModal: React.FC<TaskModalProps> = ({ onSave, onClose, resetFields }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [position, setPosition] = useState("");
  const [dueDate, setDueDate] = useState("");
  
  useEffect(() => {
    if (resetFields) {
      setTitle("");
      setDescription("");
      setPosition("");
      setDueDate("");
    }
  }, [resetFields]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(title, description, dueDate, position);
    onClose();
  };

  return (
    <dialog id="task_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Add New Task</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 mb-2 w-full"
            required
          />
          <input
            type="text"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="border p-2 mb-2 w-full"
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 mb-2 w-full"
            required
          />
          <input
            type="date"
            placeholder="Due Date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="border p-2 mb-2 w-full"
            required
          />
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default TaskModal;
