import test from "node:test";
import assert from "node:assert/strict";

import { mapAppointmentSummaries } from "../src/javascriptTasks.js";

test("создаёт требуемый массив строк", () => {
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

  assert.deepEqual(mapAppointmentSummaries(response), [
    "Иванов — 10:00",
    "Петров — 14:30"
  ]);
});
