import { defineNuxtPlugin } from '#app';
import { fileURLToPath } from 'url';
import { dirname, resolve, join } from 'path';
import fs from 'fs';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const imagesDir = resolve(__dirname, '../public/image');
    const imagesDir1 = resolve(__dirname, '/image');
    const imagesDir2 = resolve(__dirname, '/public/image');
    const imagesDir3 = resolve(__dirname, '../image');

    const getImages = (dir) => {
      const categories = [];
      console.log(imagesDir, dir, 'imagesDir');
      console.log(imagesDir1, dir, 'imagesDir1');
      console.log(imagesDir2, dir, 'imagesDir2');
      console.log(imagesDir3, dir, 'imagesDir3');
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
      // const categories = getImages(imagesDir);
      // const categories1 = getImages(imagesDir1);
      // const categories2 = getImages(imagesDir2);
      const categories3 = getImages(imagesDir3);
      console.log(categories1, categories2, categories3, 'try block');
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
