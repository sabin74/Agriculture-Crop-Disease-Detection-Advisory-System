const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedType = /jpeg|jpg|png/;
    const ext = path.extname(file.originalname).toLowerCase()
    if (allowedType.test(ext)) {
        cb(null, true);
    } else {
        cb(new Error("Only jpeg, jpg, png files are allowed"), false);
    }
}

const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }
});

module.exports = upload;
