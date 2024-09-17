const number_of_star = 150;

const random_number = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createStars = () => {
    for (let i = 0; i < number_of_star; i++) {
        const starRotation = i % 2 === 0 ? "move_right" : "move_left";
        const starTop = random_number(0, window.innerHeight);
        const starLeft = random_number(0, window.innerWidth);
        const starRadius = random_number(0, 4);
        const starDuration = random_number(6, 16);

        document.body.innerHTML +=
            "<div class='star' style='top: " +
            starTop +
            "px; left: " +
            starLeft +
            "px; width: " +
            starRadius +
            "px; height: " +
            starRadius +
            "px; " +
            "animation-name:" +
            starRotation +
            "; animation-duration: " +
            starDuration +
            "s;'></div>";
    }
};

export default createStars;
