type NotificacionEmail = {
  tipo: "email"
  correo: string
  asunto: string
}

type NotificacionSMS = {
  tipo: "sms"
  telefono: number
  mensaje: string
}

type NotificacionPush = {
  tipo: "push"
  dispositivo: string
  titulo: string
}

type Notificacion = NotificacionEmail | NotificacionSMS | NotificacionPush

function enviarNotificacion(notificacion: Notificacion): void {
  if (notificacion.tipo === "email") {
    console.log("Enviando email a " + notificacion.correo + " con asunto: " + notificacion.asunto)
  } else if (notificacion.tipo === "sms") {
    console.log("Enviando SMS al número " + notificacion.telefono + ": " + notificacion.mensaje)
  } else {
    console.log("Enviando notificación push al dispositivo " + notificacion.dispositivo + " con título: " + notificacion.titulo)
  }
}

let noti1: Notificacion = {
  tipo: "email",
  correo: "juan@gmail.com",
  asunto: "Bienvenido"
}

let noti2: Notificacion = {
  tipo: "sms",
  telefono: 3201234567,
  mensaje: "Tu código es 1234"
}

let noti3: Notificacion = {
  tipo: "push",
  dispositivo: "Android",
  titulo: "Nueva alerta"
}

enviarNotificacion(noti1)
enviarNotificacion(noti2)
enviarNotificacion(noti3)