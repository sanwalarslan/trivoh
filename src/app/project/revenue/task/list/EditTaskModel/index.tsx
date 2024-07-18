import React, { useState } from 'react';

interface EditTaskModalProps {
  task: { id: string; title: string; category: string; description: string; dueDate: string };
  onSave: (id: string, title: string, category: string, description: string, dueDate: string) => void;
  onClose: () => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({ task, onSave, onClose }) => {
  const [title, setTitle] = useState(task.title);
  const [category, setCategory] = useState(task.category);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const handleSave = () => {
    onSave(task.id, title, category, description, dueDate); // Include task.id
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Edit Task</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="edit-title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="edit-title"
              name="edit-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="edit-category" className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              id="edit-category"
              name="edit-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="edit-description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="edit-description"
              name="edit-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="edit-dueDate" className="block text-sm font-medium text-gray-700">Due Date</label>
            <input
              type="date"
              id="edit-dueDate"
              name="edit-dueDate"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="flex justify-between items-center">
            <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-md">Save</button>
            <button onClick={onClose} className="text-gray-500">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
