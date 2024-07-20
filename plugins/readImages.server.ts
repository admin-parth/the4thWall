// ~/plugins/readImages.server.ts
import { defineNuxtPlugin } from '#app';
import { fileURLToPath } from 'url';
import { dirname, resolve, join } from 'path';
import fs from 'fs';

export default defineNuxtPlugin((nuxtApp) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const imagesDir = resolve(__dirname, '../public/image'); // Adjust path as needed

  const getImages = (dir) => {
    const categories = [];
    const categoryFolders = fs.readdirSync(dir);

    categoryFolders.forEach((category) => {
      const categoryPath = join(dir, category);
      if (fs.statSync(categoryPath).isDirectory()) {
        const images = fs.readdirSync(categoryPath);
        categories.push({
          name: category,
          images: images.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file))
        });
      }
    });

    return categories;
  };

  const categories = getImages(imagesDir);

  nuxtApp.provide('imageCategories', categories);
  nuxtApp.vueApp.provide('imageCategories', categories);

  const imageCategoriesState = useState('imageCategories', () => categories);
  imageCategoriesState.value = categories;
});

