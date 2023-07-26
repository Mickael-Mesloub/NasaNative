// returns date strings at DD-MM-YYYY format
export const formatDate = date => {
  let tempDate = date;
  const day = ('0' + tempDate.getDate()).slice(-2);
  const month = ('0' + (tempDate.getMonth() + 1)).slice(-2);
  const year = tempDate.getFullYear();
  const fullDate = `${year}-${month}-${day}`;
  console.log(`LA FULLDATE DE LA FONCTION = ${fullDate}`);
  return fullDate;
};
