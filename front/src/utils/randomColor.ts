export const randomColor = () => {
    const red = Math.floor(Math.random() * 155 + 50);
    const green = Math.floor(Math.random() * 155 + 50);
    const blue = Math.floor(Math.random() * 155 + 50);

    return `rgb(${red}, ${green}, ${blue})`;
};
