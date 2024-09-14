export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    const imageCategories = [
      { name: 'bedroom', path: '/image/bedroom' },
      { name: '360-bedroom', path: '/image/360-bedroom' },
      { name: 'kitchen', path: '/image/kitchen' },
      { name: '360-kitchen', path: '/image/360-kitchen' },
      { name: 'livingroom', path: '/image/livingroom' },
      { name: '360-livingroom', path: '/image/360-livingroom' },
      { name: 'office', path: '/image/office' },
      { name: '360-office', path: '/image/360-office' },
    ];

    const checkImageExists = async (url) => {
      try {
        const response = await fetch(url);
        return response.ok;
      } catch (err) {
        return false;
      }
    };

    const fetchImages = async (category) => {
      const imagePath = category.path;
      const fileName = category.name;
      const imageUrls = [];
      let i = 1;

      // Loop to check if images exist and stop when they no longer exist
      while (true) {
        const finalFileName = fileName.includes('360') ? fileName.split('-').pop() : fileName;
        const imageUrl = `${imagePath}/${finalFileName}-${i}.jpg`; 
        const exists = await checkImageExists(imageUrl);

        if (exists) {
          imageUrls.push(imageUrl);
        } else {
          break; 
        }
        i++;
      }

      return { name: category.name, images: imageUrls };
    };

    const loadImages = async () => {
      const categoriesWithImages = await Promise.all(
        imageCategories.map(fetchImages)
      );
      return categoriesWithImages;
    };

    loadImages().then((categories) => {
      nuxtApp.provide('imageCategories', categories);
      nuxtApp.vueApp.provide('imageCategories', categories);
    }).catch((error) => {
      console.error(`Error fetching images: ${error.message}`);
    });
  }
});
