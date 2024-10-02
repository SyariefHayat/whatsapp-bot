const mongoose = require('mongoose');

const ScheduleSchema = mongoose.Schema({
  universitas: {
    type: String,
    required: true,
  },
  fakultas: {
    type: String,
    required: true,
  },
  jurusan: {
    type: String,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
  schedule: [{
    day: {
      type: String,
      required: true,
    },
    items: [{
      item: {
        type: String,
        required: true,
      },
      room: {
        type: String,
        required: true,
      },
      coordinator: {
        type: String,
        required: true,
      },
      time: {
        start: {
          type: String,
          required: true,
        },
        end: {
          type: String,
          required: true,
        }
      }
    }]
  }]
});

module.exports = {
  Schedule: mongoose.model('Schedule', ScheduleSchema),
}
