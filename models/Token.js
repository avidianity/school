const { DataTypes } = require('sequelize');
const sequelize = require('../libraries/sequelize');

const Model = sequelize.define('Token', {
	hash: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

Model.associate = ({ User }) => {
	Model.belongsTo(User);
};

Model.registerEvents = (models) => {};

module.exports = Model;
