const { Schedule } = require('../models/index.model');
const { SUCCESS, ERROR } = require('../utils/response');

const home = (req, res) => {
  res.send('Server Is Running');
}

const createSchedule = async (req, res) => {
  const { universitas, fakultas, jurusan, semester, schedule } = req.body;

  try {
    const newSchedule = new Schedule({ universitas, fakultas, jurusan, semester, schedule });
    await newSchedule.save();

    return SUCCESS(res, 201, 'Schedule created successfully', newSchedule);
  } catch (error) {
    return ERROR(res, 500, error.message) 
  }
}

module.exports = {
  home,
  createSchedule,
}