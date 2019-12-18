module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define('book', {
      title: {
      	type: Sequelize.STRING
      },
      author: {
      	type: Sequelize.STRING
      },
      translator: {
        type: Sequelize.STRING
      },
      publisher: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      page_number: {
        type: Sequelize.INTEGER,
      },
      size: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      cover: {
        type: Sequelize.STRING
      },
      category_id :{
        type: Sequelize.INTEGER
      },
      day_release: {
        type: Sequelize.DATEONLY
      }
    });
    
    return Book;
  }