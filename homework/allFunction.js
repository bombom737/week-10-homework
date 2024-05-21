const ExcelJS = require('exceljs');
const fs = require('fs')

function readTextFile(file){
    fs.readFile(file, (err,data)=>{
        if(err)
            throw "Could not read file."
        console.log(data.toString().split(" "))
    })
}

async function readExcelFile(filePath) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);

    const worksheet = workbook.getWorksheet(1); // Get the first worksheet
    const data = [];

    worksheet.eachRow((row, rowNumber) => {
        if (rowNumber === 1) return; // Skip the header row
        const rowData = {};
        rowData['Name'] = row.getCell(1).value;
        rowData['Grade'] = row.getCell(2).value;
        data.push(rowData);
    });

    console.log(data);
}


module.exports = {
    readTextFile,
    readExcelFile
}