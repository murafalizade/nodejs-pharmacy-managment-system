const OrderService = require('../service/orderService');
var PdfPrinter = require('pdfmake/src/printer');//
const fs = require('fs');
const orderService = new OrderService();

var fonts = {
  Roboto: {
    normal: "public/fonts/TT Firs Neue Trial Black.ttf",
  },
};

var printer = new PdfPrinter(fonts);//kalpurush


module.exports.downloadPDF = async (req, res) => {
    const { id } = req.params;
    const order = await orderService.getById(id);
    const medicine = order.medicine;
    // const total = medicines.reduce((acc, medicine) => acc + medicine.price * medicine.count, 0);
    const date = new Date();
    console.log(order)
    const options = {
      content: [
        "First paragraph",
        "Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines",
      ],
    };
    const pdfDoc = printer.createPdfKitDocument(options);
    pdfDoc.pipe(fs.createWriteStream(`files/order-${order.id}.pdf`));
    pdfDoc.end();
    res.send(`./files/order-${order.id}.pdf`);
}