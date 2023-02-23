export const loadImageBeforeUsing = (images: string[]) => {
  images.forEach((img) => {
    const image = new Image();
    image.src = img;
  });
};
