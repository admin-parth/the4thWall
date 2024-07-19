// ~/plugins/readImages.server.ts
import { defineNuxtPlugin } from '#app';
import fs from 'fs';
import path from 'path';

interface Category {
  name: string;
  images: string[];
}

export default defineNuxtPlugin((nuxtApp) => {
  const imagesDir = path.resolve(__dirname, '../public/image'); // Adjust path as needed

  const getImages = (dir: string): Category[] => {
    const categories: Category[] = [];
    const categoryFolders = fs.readdirSync(dir);

    categoryFolders.forEach((category) => {
      const categoryPath = path.join(dir, category);
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
  console.log(categories, 'hello from plugins');

  nuxtApp.provide('imageCategories', categories);
  nuxtApp.vueApp.provide('imageCategories', categories)

  const imageCategoriesState = useState('imageCategories', () => categories);
  imageCategoriesState.value = categories;

});
