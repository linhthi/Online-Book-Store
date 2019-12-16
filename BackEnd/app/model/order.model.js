module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define('order', {
        client_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phone_number: {
            type: Sequelize.STRING,
            allowNull:false
        },
        product_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        amount: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        // order_date: {
        //     type: Sequelize.DATE,
        //     // allowNull: false
        // },
        // delivery_date: {
        //     type: Sequelize.DATE,
        //     // allowNull: false
        // },
        status: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Order;
}