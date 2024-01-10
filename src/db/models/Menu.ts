import { DataTypes, Model, Optional } from 'sequelize';

import sequelize from '../config.js';

export interface MenuAttributes {
  id: number;
  name: string;
  description: string;
  thumbnailUrl: string;
  featured: boolean;
  categoryId: number;
}

export interface MenuCreationAttributes extends Optional<MenuAttributes, 'id' | 'thumbnailUrl' | 'featured'> {}

export interface MenuInstance extends Model<MenuAttributes, MenuCreationAttributes>, MenuAttributes {}

export const Menu = sequelize.define<MenuInstance, MenuAttributes>('menu', {
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
  description: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  thumbnailUrl: {
    type: DataTypes.STRING,
  },
  featured: {
    defaultValue: false,
    type: DataTypes.BOOLEAN,
  },
  categoryId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'categories', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  }
});
