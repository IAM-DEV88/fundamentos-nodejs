const bCrypt = require('bcrypt')

const password = '1234Segura!'

bCrypt.hash(password, 5, function(err, hash) {
    console.log('hash:',hash);
    bCrypt.compare('password', hash, function(err, res) {
        console.log('err:',err);
        console.log('res:',res);
    })
})