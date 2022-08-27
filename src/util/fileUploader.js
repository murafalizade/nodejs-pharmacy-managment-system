const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

var fs = require("fs");

var dir = "../../public/uploads";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    console.log(file)
    const type = file.mimetype.split('/')[1];
    cb(null, `${uuidv4()}.${type}`);
  },
});

const upload = multer({ storage });
module.exports = upload;
