export default function handler(req, res) {
    const {
      query: { id },
      method,
    } = req;
  
    switch (method) {
      case 'GET':
        // Get a single property by ID
        res.json({"METHOD":"GET"})
        break;
      case 'PUT':
        // Update a property by ID
        res.json({"METHOD":"PUT"})
        break;
      case 'DELETE':
        // Delete a property by ID
        res.json({"METHOD":"DELETE"})

        break;
      default:
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  }