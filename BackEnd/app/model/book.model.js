module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define('book', {
      title: {
      	type: Sequelize.STRING
      },
      author: {
      	type: Sequelize.STRING
      },
      	price: {
        type: Sequelize.INTEGER
      },
      book_code: {
        type: Sequelize.STRING
      }
    });
    
    return Book;
  }