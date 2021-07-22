export default async function createTicket(order) {
  const response = await fetch(`${process.env.apiUrl}/admin/v1/orders`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({order: order})
  });
  return response;
}