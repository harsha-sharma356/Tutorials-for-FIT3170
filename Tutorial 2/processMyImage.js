const cv = require('@techstark/opencv-js');

function processImage(image){
    src_image = cv.imread(image)

    first_transformation = new cv.Mat()
    cv.cvtColor(src_image, first_transformation, cv.COLOR_RGB2GRAY)
    second_transformation = new cv.Mat()

    cv.adaptiveThreshold(
        first_transformation, 
        second_transformation, 
        200, 
        cv.ADAPTIVE_THRESH_GAUSSIAN_C, 
        cv.THRESH_BINARY, 
        5,
        2
    )
    src_image.delete()
    first_transformation.delete()
    return second_transformation
};

module.exports = processImage;