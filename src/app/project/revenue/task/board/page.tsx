// components/Board/Board.tsx
import React, { useState, useEffect } from "react";
import doticon from "../../../../../../public/assest/icon/dots.svg";
import Plusicon from "../../../../../../public/assest/icon/plusicon.svg";
import Image from "next/image";
import BoardCard from "./BoardCard/board";
import TaskModal from "./ModelBoard";

interface Task {
  title: string;
  description: string;
  dueDate: string;
  position: string;
}

interface TaskState {
  todo: Task[];
  inProgress: Task[];
  inReview: Task[];
  done: Task[];
}

const Board: React.FC = () => {
  const [tasks, setTasks] = useState<TaskState>({
    todo: [],
    inProgress: [],
    inReview: [],
    done: [],
  });
  const [currentCategory, setCurrentCategory] = useState<
    keyof TaskState | null
  >(null);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const addTask = (category: keyof TaskState, task: Task) => {
    const updatedTasks = {
      ...tasks,
      [category]: [...tasks[category], task],
    };
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const openModal = (category: keyof TaskState) => {
    setCurrentCategory(category);
    const modal = document.getElementById("task_modal") as HTMLDialogElement;
    modal?.showModal();
  };

  const closeModal = () => {
    const modal = document.getElementById("task_modal") as HTMLDialogElement;
    modal?.close();
  };

  const handleSave = (title: string, description: string, dueDate: string , position:string) => {
    if (currentCategory) {
      addTask(currentCategory, {
        title,
        description,
        dueDate,
        position,
      });
    }
  };

  return (
<div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {(
          ["todo", "inProgress", "inReview", "done"] as Array<keyof TaskState>
        ).map((category) => (
          <div key={category} className="flex flex-col pt-6">
            <div className="flex justify-between">
              <div
                className={`font-bold text-base ${getCategoryColorClass(
                  category
                )}`}
              >
                {capitalize(category)}{" "}
                <span className="text-[#94A3B8] font-semibold font-[inter]">
                  ({tasks[category].length})
                </span>
              </div>
              <div className="flex gap-x-2">
                <div>
                  <button
                    className="text-[#94A3B8] invert brightness-50 saturate-200"
                    onClick={() => openModal(category)}
                  >
                    <Image src={Plusicon} alt="plus icon" />
                  </button>
                </div>
                <Image src={doticon} alt="dots icon" />
              </div>
            </div>
            <div>
              {tasks[category].map((task, index) => (
                <BoardCard key={index} task={task} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {currentCategory && (
        <TaskModal
          onSave={handleSave}
          onClose={closeModal} resetFields={false}         />
      )}
    </div>
  );
};

const getCategoryColorClass = (category: keyof TaskState): string => {
  switch (category) {
    case "todo":
      return "text-black";
    case "inProgress":
      return "text-teal-500";
    case "inReview":
      return "text-yellow-500";
    case "done":
      return "text-green-500";
    default:
      return "text-black";
  }
};

const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export default Board;

