const COLORS = {
    green: {
        open: "\u001b[32m",
        close: "\u001b[39m"
    },
    blue: {
        open: "\u001b[34m",
        close: "\u001b[39m"
    },
    red: {
        open: "\u001b[31m",
        close: "\u001b[39m"
    }
};

module.exports = (color, text) => {
    if (!COLORS.hasOwnProperty(color)) {
        console.error(`Undefined color: ${color}`);
    }
    return `${COLORS[color].open}${text}${COLORS[color].close}`;
};
