import { DataTypes, Model, Optional } from 'sequelize';

import sequelize from '../config.ts';

export interface CategoryAttributes {
  id: number;
  name: string;
}

export interface CategoryCreationAttributes extends Optional<CategoryAttributes, 'id'> {}

export interface CategoryInstance extends Model<CategoryAttributes, CategoryCreationAttributes>, CategoryAttributes {}

export const Category = sequelize.define<CategoryInstance, CategoryAttributes>('categories', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
});
