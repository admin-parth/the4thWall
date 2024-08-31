import { defineNuxtPlugin } from '#app';
import { fileURLToPath } from 'url';
import { dirname, resolve, join } from 'path';
import fs from 'fs';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const imagesDir = resolve(__dirname, '../public/image'); 

    const getImages = (dir) => {
      const categories = [];
      console.log(imagesDir, dir, 'dir');
      const categoryFolders = fs.readdirSync(dir);
      console.log(categoryFolders,'categoryFolders');

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

    try {
      const categories = getImages(imagesDir);
      nuxtApp.provide('imageCategories', categories);
      nuxtApp.vueApp.provide('imageCategories', categories);

      const imageCategoriesState = useState('imageCategories', () => categories);
      imageCategoriesState.value = categories;
    } catch (error) {
      console.error(`Error reading images directory: ${error.message}`);
    }
  }else{
    console.log('only running on client side');
  }
});
