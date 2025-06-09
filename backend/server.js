const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
