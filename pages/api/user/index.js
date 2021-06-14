export default async (req, res) => {
  const uri = process.env.API_URI
  const headers = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch(`${uri}/users`, headers)
  const users = await response.json()

  res.status(200).json(users.data)
}
