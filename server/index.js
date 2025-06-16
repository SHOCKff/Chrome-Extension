
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Log = require('./db');
const app = express();

mongoose.connect('mongodb://localhost:27017/webtracker');

app.use(cors());
app.use(express.json());

app.post('/log', async (req, res) => {
  const { domain, timeSpent, userId } = req.body;
  const log = new Log({ domain, timeSpent, userId, timestamp: new Date() });
  await log.save();
  res.sendStatus(200);
});

app.get('/stats/:userId', async (req, res) => {
  const logs = await Log.find({ userId: req.params.userId });
  res.json(logs);
});

app.listen(3000, () => console.log('Server running on port 3000'));
