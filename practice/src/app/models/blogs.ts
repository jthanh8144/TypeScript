'use strict';
import { Model } from 'sequelize';
import { Blog } from '../interfaces';

module.exports = (sequelize: any, DataTypes: any) => {
    class blogs extends Model<Blog> implements Blog {
        id!: number;
        title!: string;
        content!: string;
        user_id!: number;
        static associate = (models: any) => {
            blogs.belongsTo(models.users, {
                as: 'user',
                foreignKey: 'user_id',
                targetKey: 'id',
                onDelete: 'CASCADE',
            });
        };
    }
    blogs.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                type: DataTypes.BIGINT,
                primaryKey: true,
            },
            title: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            content: {
                allowNull: false,
                type: DataTypes.TEXT,
            },
            user_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'blogs',
            timestamps: false,
        }
    );
    return blogs;
};
