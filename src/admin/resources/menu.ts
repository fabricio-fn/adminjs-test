import path from 'path';

import uploadFeature from '@adminjs/upload';
import { FeatureType, ResourceOptions } from 'adminjs';

import componentLoader from '../component-loader.js';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

export const menuResourceOptions: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: ['name', 'description', 'uploadThumbnail', 'featured', 'categoryId'],
  filterProperties: ['name', 'description', 'featured', 'categoryId', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'name', 'featured', 'categoryId'],
  showProperties: ['id', 'name', 'description', 'featured', 'thumbnailUrl', 'categoryId', 'createdAt', 'updatedAt'],
};

export const menuResourceFeatures: FeatureType[] = [
  uploadFeature({
    provider: {
      local: {
        bucket: path.join(__dirname, '../../../public'),
        opts: {
          baseUrl: 'thumbnails/menu',
        },
      },
    },
    properties: {
      key: 'thumbnailUrl',
      file: 'uploadThumbnail',
    },
    uploadPath: (record, filename) => `thumbnails/menu-${record.get('id')}/${filename}`,
    componentLoader,
  }),
];
