const User = require('./User');
const Post = require("./Post");

// create associations
// User.hasMany(post, {
//   foreignKey: 'user_id'
// });

module.exports = { User, Post };
