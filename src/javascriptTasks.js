export function mapAppointmentSummaries(response) {
  return response.appointments.map(
    ({ doctor, time }) => `${doctor} — ${time}`
  );
}
