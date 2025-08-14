import { useEffect, useState, type ReactNode } from "react";
import type { Task } from "../../entities/task";
import { taskService } from "../../services/api";
import { TasksContext } from ".";

interface TasksContextProviderProps {
  children: ReactNode
}

export const TasksContextProvider: React.FC<TasksContextProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
    taskService.fetchTasks().then(storedTasks => {
      setTasks(storedTasks)
    })
  }, [])

  const createTask = async (attributes: Omit<Task, "id">) => {
    const newTask = await taskService.createTask(attributes)

    setTasks((currentState => [...currentState, newTask]))
  }

  const updateTask = async (id: string, attributes: Partial<Omit<Task, "id">>) => {
    await taskService.updateTask(id, attributes)

    setTasks(currentState => {
      const updatedTasks = [...currentState]
      const taskIndex = updatedTasks.findIndex(task => task.id === id)
      Object.assign(updatedTasks[taskIndex], attributes)
      return updatedTasks
    })

  }

  const deleteTask = async (id: string) => {
    await taskService.deleteTask(id)
    setTasks(currentState => currentState.filter(task => task.id !== id))
  }

  return (
    <TasksContext.Provider value={{ tasks, createTask, updateTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  )
} 