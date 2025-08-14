import { Badge, Box, Button, Dialog, Flex, RadioGroup, Text, TextArea, TextField } from "@radix-ui/themes"
import { useState, type FormEventHandler, type ReactNode } from "react"
import z from "zod"
import { useTasks } from "../hooks/useTasks"
import type { Task } from "../entities/task"

const TaskSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: z.enum(["todo", "doing", "done"]),
  priority: z.enum(["low", "medium", "high"])
})

interface TaskFormProps {
  children: ReactNode
  task?: Task
}

export const TaskForm: React.FC<TaskFormProps> = ({ children, task }) => {
  const { createTask, updateTask } = useTasks()
  const [title, setTitle] = useState(task?.title)
  const [description, setDescription] = useState(task?.description)
  const [status, setStatus] = useState(task?.status ?? 'todo' as string | undefined)
  const [priority, setPriority] = useState(task?.priority ?? 'low' as string | undefined)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (ev) => {
    ev.preventDefault()

    const taskData = TaskSchema.parse({ title, description, status, priority })

    if (task) {
      await updateTask(task.id, taskData)
    } else {
      setTitle(''); setDescription(''); setStatus('todo'); setPriority('low');
      await createTask(taskData)
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        {children}
      </Dialog.Trigger>

      <Dialog.Content maxWidth='32rem'>
        <Dialog.Title>{task ? task.title : 'Nova Tarefa'}</Dialog.Title>
        <Dialog.Description size='2' mb='4'>
          {task ? `Edite a tarefa ${task.title}` : 'Adicione novas tarefas ao quadro'}
        </Dialog.Description>
        <form onSubmit={handleSubmit}>
          <Flex direction='column' gap='4'>
            <Box maxWidth='32rem'>
              <Box mb='2'>
                <Text as="label" htmlFor="title">Título</Text>
              </Box>
              <TextField.Root 
                value={title} 
                onChange={(ev) => setTitle(ev.target.value)} 
                placeholder="Defina um título" 
                name="title" 
                id="title" 
                autoFocus 
                required />
            </Box>

            <Box maxWidth='32rem'>
              <Box mb='2'>
                <Text as="label" htmlFor="description">Descrição</Text>
              </Box>
              <TextArea 
              value={description} 
              onChange={(ev) => setDescription(ev.target.value)} 
              placeholder="Descreva a tarefa" 
              name="description" 
              id="description" 
              required />
            </Box>

            <Flex gap='8'>
              <Box>
                <Text as="div" mb='2'>Situação</Text>
                <RadioGroup.Root name="status" defaultValue={status} 
                  onValueChange={(value) => setStatus(value)}>
                  <RadioGroup.Item value="todo">
                    <Badge color="gray">
                      Para Fazer
                    </Badge>
                  </RadioGroup.Item>

                  <RadioGroup.Item value="doing">
                    <Badge color="yellow">
                      Em Progresso
                    </Badge>
                  </RadioGroup.Item>

                  <RadioGroup.Item value="done">
                    <Badge color="green">
                      Concluída
                    </Badge>
                  </RadioGroup.Item>
                </RadioGroup.Root>
              </Box>

              <Box>
                <Text as="div" mb='2'>Prioridade</Text>
                <RadioGroup.Root name="priority" defaultValue={priority} 
                  onValueChange={(value) => setPriority(value)}>
                  <RadioGroup.Item value="low">
                    <Badge color="sky">
                      Baixa
                    </Badge>
                  </RadioGroup.Item>

                  <RadioGroup.Item value="medium">
                    <Badge color="amber">
                      Média
                    </Badge>
                  </RadioGroup.Item>

                  <RadioGroup.Item value="high">
                    <Badge color="tomato">
                      Alta
                    </Badge>
                  </RadioGroup.Item>
                </RadioGroup.Root>
              </Box>
            </Flex>

            <Flex gap='2' justify='end'>
              <Dialog.Close>
                <Button color="gray" variant="soft">Cancelar</Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button type="submit">Salvar</Button>
              </Dialog.Close>
            </Flex>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  )
}