const Image = require('../models/Images.js');

const getImages = async (req, res) => {
    res.json({ message: "Hello world" });
}

const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const farmerId = req.user.id;
        if (!farmer) return res.json({ message: "Farmer Id is required" });

        //Store data in DB 
        const image = await Images.create({
            farmer: farmerId,
            imageUrl: req.file.path,
            diseaseDetected: "pending"
        });

        return res.status(200).json({ message: 'Image uploaded successfully', image});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteImage = async (req, res) => {

}

module.exports = { getImages, uploadImage, deleteImage };
