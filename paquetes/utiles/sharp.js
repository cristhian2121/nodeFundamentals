// Manage images from node, Sharp is wrotte in c++
const sharp = require('sharp');

sharp('original.png')
    .resize(80)
    .grayscale()
    .toFile('resized.png');