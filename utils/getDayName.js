function getDayName() {
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const today = new Date().getDay();
  return days[today];
}

module.exports = { getDayName };