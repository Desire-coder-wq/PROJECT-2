    document.getElementById('downloadPdf').addEventListener('click', () => {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();

      doc.text("Furniture Company - Sales Report", 14, 20);




    //This uses the jsPDF-AutoTable plugin to:
// This uses the jsPDF-AutoTable plugin to:
// Automatically parse the HTML table with ID myTable
// Render it into the PDF


      doc.autoTable({ 
        html: '#salesReportTable',  //This tells autoTable to grab the HTML table element with ID suppliersTable.
                                //It converts the entire table — headers and rows — into a styled table in the PDF.
        startY: 30, //Sets the vertical starting position (Y-coordinate) of the table in the PDF.
        styles: { fontSize: 8 },
        headStyles: { fillColor: [0, 119, 204] },
      });

      doc.save('sales_Report.pdf');
    });

    document.getElementById('downloadExcel').addEventListener('click', () => {
      const table = document.getElementById('salesReportTable');

      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.table_to_sheet(table);

      XLSX.utils.book_append_sheet(wb, ws, 'Sales');

      XLSX.writeFile(wb, 'sales_Report.xlsx');
    });