const pdf = require('pdf-creator-node');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

module.exports = async (order) => {
  const date = new Date();
  const options = {
    format: 'A3',
    orientation: 'portrait',
    border: '10mm',
  };
  const html = fs.readFileSync(`${__dirname}/../views/template.html`, 'utf8');
  const fileName = `${uuidv4()}.pdf`;
  const document = {
    html,
    data: {
      order: order.toJSON(),
      date,
    },
    path: `./public/files/${fileName}`,
    type: '',
  };
  await pdf.create(document, options);
  return fileName;
};
