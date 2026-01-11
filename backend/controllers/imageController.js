const getImages = async (req, res) => {
    res.json({ message: "Hello world" });
}

const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // req.file.path -> saved path
        console.log(req.file);

        res.json({ message: 'Image uploaded successfully', file: req.file });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteImage = async (req, res) => {

}

module.exports = { getImages, uploadImage, deleteImage };
