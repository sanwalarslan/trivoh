'use client'
import React, { useState } from "react";
import Image from "next/image";
import plusicon from "../../../../../../public/assest/icon/plusicon.svg";
import dot from "../../../../../../public/assest/icon/dots.svg";
import TaskCard from "./ListCard";
import EditTaskModal from "./EditTaskModel";
import { DragDropContext, Droppable, Draggable, DropResult, DroppableProvided, DraggableProvided } from "react-beautiful-dnd";

// Define a type for sections
type Section = "todo" | "inprogress";

const List = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [section, setSection] = useState<Section>("todo");
  const [tasks, setTasks] = useState<{
    todo: Array<{ id: string; title: string; category: string; description: string; dueDate: string }>;
    inprogress: Array<{ id: string; title: string; category: string; description: string; dueDate: string }>;
  }>({
    todo: [],
    inprogress: []
  });
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    dueDate: "",
  });

  const [taskToEdit, setTaskToEdit] = useState<{ id: string; title: string; category: string; description: string; dueDate: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.category || !form.description || !form.dueDate) {
      alert("Please fill in all fields.");
      return;
    }

    setTasks((prevTasks) => ({
      ...prevTasks,
      [section]: [
        ...prevTasks[section],
        {
          id: `task-${prevTasks[section].length + 1}`,
          title: form.title,
          category: form.category,
          description: form.description,
          dueDate: form.dueDate,
        },
      ],
    }));

    setForm({
      title: "",
      category: "",
      description: "",
      dueDate: "",
    });
    setIsModalOpen(false);
  };

  const handleDelete = (id: string, section: Section) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [section]: prevTasks[section].filter((task) => task.id !== id),
    }));
  };

  const handleEdit = (id: string, section: Section) => {
    const task = tasks[section].find((task) => task.id === id);
    if (task) {
      setTaskToEdit(task);
      setIsEditModalOpen(true);
    }
  };

  const handleSave = (id: string, title: string, category: string, description: string, dueDate: string) => {
    setTasks((prevTasks) => ({
      todo: prevTasks.todo.map((task) =>
        task.id === id ? { id, title, category, description, dueDate } : task
      ),
      inprogress: prevTasks.inprogress.map((task) =>
        task.id === id ? { id, title, category, description, dueDate } : task
      ),
    }));
    setTaskToEdit(null);
    setIsEditModalOpen(false);
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const sourceSection = result.source.droppableId as Section;
    const destinationSection = result.destination.droppableId as Section;

    const reorderedTasks = Array.from(tasks[sourceSection]);
    const [removed] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, removed);

    if (sourceSection === destinationSection) {
      setTasks((prevTasks) => ({
        ...prevTasks,
        [sourceSection]: reorderedTasks,
      }));
    } else {
      setTasks((prevTasks) => ({
        ...prevTasks,
        [sourceSection]: reorderedTasks,
        [destinationSection]: [removed, ...tasks[destinationSection]],
      }));
    }
  };

  return (
    <div>
      {(["todo", "inprogress"] as Section[]).map((section) => (
        <div key={section}>
          <div className="flex justify-between py-4">
            <div className="text-base text-black font-bold font-[inter]">
              {section === "todo" ? "ToDo" : "In Progress"} <span className="text-[#64748B]">({tasks[section].length})</span>
            </div>
            <div className="flex flex-row gap-x-2">
              <div className="text-base text-black font-bold font-[inter]">Add Task</div>
              <div className="text-[#94A3B8] cursor-pointer" onClick={() => { setSection(section); setIsModalOpen(true); }}>
                <Image
                  src={plusicon}
                  className="text-[#94A3B8] invert brightness-50 saturate-200"
                  alt=""
                />
              </div>
              <div>
                <Image src={dot} alt="" />
              </div>
            </div>
          </div>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId={section}>
              {(provided: DroppableProvided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {tasks[section].map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided: DraggableProvided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TaskCard
                            key={task.id}
                            title={task.title}
                            category={task.category}
                            description={task.description}
                            dueDate={task.dueDate}
                            onDelete={() => handleDelete(task.id, section)}
                            onEdit={() => handleEdit(task.id, section)}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      ))}
      
      {/* Add Task Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add New Task</h2>
            <form onSubmit={handleAddTask} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div>
                <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">Due Date</label>
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  value={form.dueDate}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="flex justify-between items-center">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Task</button>
                <button type="button" onClick={() => setIsModalOpen(false)} className="bg-red-500 text-white px-4 py-2 rounded-md">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Edit Task Modal */}
      {isEditModalOpen && taskToEdit && (
        <EditTaskModal
          task={taskToEdit}
          onSave={handleSave}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}
    </div>
  );
};

export default List;
