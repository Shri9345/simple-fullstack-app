const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from backend! 🚀 CD is working! finally here we go" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
