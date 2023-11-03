const sharp = require('sharp')

sharp('./avatar.png')
.resize(80)
.grayscale()
.toFile('resize.png')