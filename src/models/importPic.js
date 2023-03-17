export const importAll = (r) => {
    const images = {};
    r.keys().forEach((key) => {
        images[key] = r(key);
    });
    return images;
};

export const images = importAll(
    require.context('../assets/img', false, /\.(png|jpe?g|svg)$/)
);

export const images2 = importAll(
    require.context('../assets/img/ImgProject', false, /\.(png|jpe?g|svg)$/)
);