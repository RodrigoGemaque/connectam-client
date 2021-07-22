export default async function createTicket(ticket) {
  const response = await fetch(`${process.env.apiUrl}/admin/v1/tickets`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ticket: ticket})
  });
  return response;
}