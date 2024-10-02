function getMenuMessage(username) {
  return `Dear ${username},\nHalo, halo! semoga kamu dalam keadaan gembira selalu ya.\n\nBerikut adalah menu yang tersedia:\n\n1. /menu - Tampilkan Menu\n2. /jadwal - Tampilkan Jadwal Kuliah\n3. /ask - Tanya AI`
}

function getJadwalMessage(username, today, todaySchedule) {
  let jadwalMsg = `Ingat ${username},\nPengetahuan adalah segalanya!\nBerikut adalah jadwal kuliah anda...\n\n- Hari: ${today}\n`

  todaySchedule.items.forEach((item) => {
    jadwalMsg += `- Mata pelajaran: ${item.item}\n- Ruangan: ${item.room}\n- Pj: ${item.coordinator}\n- Pukul: ${item.time.start} - ${item.time.end}\n`
  })

  return jadwalMsg;
}

module.exports = { getMenuMessage, getJadwalMessage };