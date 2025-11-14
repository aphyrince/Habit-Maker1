export const randomColor = () => {
    const red = Math.floor(Math.random() * 155 + 50);
    const green = Math.floor(Math.random() * 155 + 50);
    const blue = Math.floor(Math.random() * 155 + 50);

    const toHex = (value: number) => value.toString(16).padStart(2, "0");

    return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
};
