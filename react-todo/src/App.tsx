import { useEffect, useState } from "react";

import { ListItemType } from "./types/ListItem.type";

import Header from "./components/Header";
import InputArea from "./components/InputArea";
import ListArea from "./components/ListArea";
import InfoArea from "./components/InfoArea";

import { getAllTasks, markTaskAsDone, deleteTaskById, createTask } from "./services/TaskService";

function App() {
  const [taskList, setTaskList] = useState<ListItemType[]>([]);

  useEffect(() => {
    fetchTaskList();
  }, []);

  const fetchTaskList = async () => {
    try {
      const response = await getAllTasks();
      setTaskList(response.data);
    } catch (error) {
      console.error('Erro ao buscar lista de tarefas:', error);
    }
  };

  const handleAddTask = async (task: { name: string }) => {
    try {
      const response = await createTask(task);
      if (isListItemType(response.data)) {
        setTaskList(prevList => [...prevList, response.data]);
      } else {
        console.error('Response data is not of type ListItemType');
      }
    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error);
    }
  };

  function isListItemType(obj: any): obj is ListItemType {
    return obj && typeof obj.id === 'number' && typeof obj.name === 'string' && typeof obj.done === 'boolean';
  }

  const handleChangeTask = async (id: number, done: boolean) => {
    try {
      await markTaskAsDone(id, done);
      fetchTaskList();
    } catch (error) {
      console.error('Erro ao marcar tarefa como concluída:', error);
    }
  };

  const handleRemoveTask = async (id: number) => {
    try {
      await deleteTaskById(id);
      fetchTaskList();
    } catch (error) {
      console.error('Erro ao remover tarefa:', error);
    }
  };

  const sortTaskList = (list: ListItemType[]) => {
    const undoneTasks = list.filter(task => !task.done);
    const doneTasks = list.filter(task => task.done);
    return [...undoneTasks, ...doneTasks];
  };

  return (
    <>
      <Header />
      <InputArea onAddTask={handleAddTask} />
      <InfoArea taskList={taskList} />
      <ListArea
        onTaskRemove={handleRemoveTask}
        onTaskChange={handleChangeTask}
        taskList={sortTaskList(taskList)}
      />
    </>
  );
}

export default App;
