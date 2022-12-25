const XLSX = require("xlsx");

const workbook = XLSX.readFile("data.xlsx");
const worksheet = workbook.Sheets["Sheet1"];

const arrStudents = XLSX.utils.sheet_to_json(worksheet);
console.log(arrStudents)