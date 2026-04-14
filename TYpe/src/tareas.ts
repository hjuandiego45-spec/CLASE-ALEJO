type TaskStatus = "pendiente" | "en_progreso" | "finalizada"

interface Task {
  id: number
  description: string
  isComplete: boolean
  status: TaskStatus
}

function getPendingAndProgressTasks(tasks: Task[]): Task[] {
  return tasks.filter((task) => task.status !== "finalizada")
}

// Ejemplo
let tareas: Task[] = [
  { id: 1, description: "Estudiar", isComplete: false, status: "pendiente" },
  { id: 2, description: "Dormir", isComplete: true, status: "finalizada" },
  { id: 3, description: "Trabajar", isComplete: false, status: "en_progreso" }
]

let resultado = getPendingAndProgressTasks(tareas)
console.log(resultado)