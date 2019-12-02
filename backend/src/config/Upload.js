const multer = require('multer');
const path = require('path');


module.exports = {
        Storage: multer.diskStorage({
            destination: path.resolve(__dirname, '..', '..', 'uploads'),
            filename: (req, file, callback) =>{
                callback(null, `${file.filename}-${Date.now()}${path.extname(file.originalname)}`)
            }
    })
};

/*module.exports{
    storage: multer.diskStorage({
        destination: path.resolve(__dirname,'..','..', 'Uploads'),
        filename: (req, file, callback) =>{
            callback(null, `${file.filename}-${Date.now()}${path.extname(file.originalname)}`);
        }
    })
};