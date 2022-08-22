const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    const type = file.mimetype.split('/')[1];
    cb(null, `${uuidv4()}.${type}`);
  },
});

const upload = multer({ storage });
module.exports = upload;
