'use strict';
import { Model } from 'sequelize';
import { User } from '../interfaces';

module.exports = (sequelize: any, DataTypes: any) => {
    class users extends Model<User> implements User {
        id!: number;
        name!: string;
        email!: string;
        password!: string;
        static associate(models: any) {
            users.hasMany(models.blogs, {
                as: 'blogs',
                foreignKey: 'user_id',
                sourceKey: 'id',
                onDelete: 'CASCADE',
            });
        }
    }
    users.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                type: DataTypes.BIGINT,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'users',
            timestamps: false,
        }
    );
    return users;
};
