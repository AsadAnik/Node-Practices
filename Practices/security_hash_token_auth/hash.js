const bcrypt = require('bcrypt');

// getting salt..
bcrypt.genSalt(10, (err, salt) => {
    if (err) return console.log(err);

    // making hash with password..
    bcrypt.hash("#@@12117321aa#", salt, (err, hash) => {
        if (err) return console.log(err);
        console.log(hash);
    });
});