import { ResourceOptions } from 'adminjs';

export const categoryResourceOptions: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: ['name'],
  filterProperties: ['name', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'name', 'createdAt', 'updatedAt'],
  showProperties: ['id', 'name', 'createdAt', 'updatedAt'],
};
