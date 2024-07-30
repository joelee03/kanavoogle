const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

userSchema.statics.login = async function(email, password) {
    if (!email || !password) {
        throw Error('All fields must be filled')
    }
    //check email
    const user = await this.findOne({emaill});

    if (!user) {
        throw Error('A ser with the email does not exist');
    }
    //check password
    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error('Invalid Password');
    }

    return user;
}

userSchema.statics.signup = async function(username, email, password) {
    if (!username || !email || !password) {
      throw Error('All fields must be filled');
    }
  
    // Check if email already exists
    const existingUser = await this.findOne({
      $or: [{ email }, { username }]
    });
  
    if (existingUser) {
      switch (true) {
        case existingUser.email === email:
          throw Error('Email already in use');
        case existingUser.username === username:
          throw Error('Username already in use');
      }
    }
  
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
  
    const user = await this.create({ username, email, password: hash });
  
    return user;
  };

module.exports = mongoose.model('User', userSchema)