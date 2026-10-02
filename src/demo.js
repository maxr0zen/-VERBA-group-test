import { mapAppointmentSummaries } from "./javascriptTasks.js";

const response = {
  success: true,
  appointments: [
    {
      id: "A-101",
      doctor: "Иванов",
      time: "10:00"
    },
    {
      id: "A-102",
      doctor: "Петров",
      time: "14:30"
    }
  ]
};

const appointments = mapAppointmentSummaries(response);

console.log(appointments);
