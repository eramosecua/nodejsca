'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Permissions', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
      },
      operationId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        onCreate: 'CASCADE',
        references: {
          model: 'Operations',
          key: 'id'
        }
      },
      profileId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        onCreate: 'CASCADE',
        references: {
          model: 'Profiles',
          key: 'id'
        }
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Permissions');
  }
};