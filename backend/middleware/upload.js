const mutler = require('multer');
const path = require('path');

const storage = mutler.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../upload");
    },
    filename: (req, fild, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedType = /jpeg|pg|png/;
    const ext = path.extname(file.originalname).toLowerCase()
    if (allowedType.test(ext)) {
        cb(null, true);
    } else {
        cb("Error, Only [jpge, jpg, png] files", false);
    }
}

const upload = mutler({
    storage
    , fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }
});

module.exports = upload;
