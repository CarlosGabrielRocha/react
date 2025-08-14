import { Badge, Button, Card, Flex, Heading, IconButton, Text } from "@radix-ui/themes"
import type { Task, TaskPriority, TaskStatus } from "../entities/task"
import { useTasks } from "../hooks/useTasks"
import { Pencil1Icon } from "@radix-ui/react-icons"
import { TaskForm } from "./TaskForm"

interface TaskCardProps {
  task: Task
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { deleteTask, updateTask } = useTasks()

  const getActionText = (status: TaskStatus) => {
    const actionsText = {
      "todo": "Iniciar",
      "doing": "Concluir",
      "done": "Arquivar"
    }

    return actionsText[status]
  }

  const getActionColor = (status: TaskStatus) => {
    const actionColors: {[key: string]: "indigo" | "green" | "bronze"} = {
      "todo": "indigo",
      "doing": "green",
      "done": "bronze"
    }

    return actionColors[status]
  }

  const getPriorityColor = (priority: TaskPriority) => {
    const priorityColor: { [key: string]: 'sky' | 'amber' | 'tomato'} = {
      "low": "sky",
      "medium": "amber",
      "high": "tomato"
    }
    return priorityColor[priority]
  }

  const handleDelete = (id: string) => {
    const confirmation = confirm("Tem certeza que deseja excluir essa tarefa?")
    if (confirmation) deleteTask(id)
  }

  const handleUpdate = () => {
    if (task.status === 'todo') {
      updateTask(task.id, { status: 'doing' })
    } else if (task.status === 'doing') {
      updateTask(task.id, { status: 'done' })
    }
  }

  return (
    <Card>
      <Flex align='center' gap='4' justify='between'>
        <Flex gap='4'>
          <Heading as="h3" size='3'>{task.title}</Heading>
          <Badge color={getPriorityColor(task.priority)}>{task.priority}</Badge>
        </Flex>
        <TaskForm task={task}>
          <IconButton size='1'>
            <Pencil1Icon />
          </IconButton>
        </TaskForm>
      </Flex>

      <Text as='p' my='4'>{task.description}</Text>
      
      <Flex gap='2'>
        {task.status !== 'done' && (
            <Button color={getActionColor(task.status)} onClick={handleUpdate}>
              {getActionText(task.status)}
            </Button>     
        )}

        <Button color="red" onClick={() => handleDelete(task.id)}>Excluir</Button>
      </Flex>

    </Card>
  )
}