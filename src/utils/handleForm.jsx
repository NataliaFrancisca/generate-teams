export const validateInputs = (name, level) => {
    const validateName = name.length < 2 ? "Name must have 2 or more characters." : false;
    const validateLevel = level < 1 || level > 5 ? "Level must be between 1 and 5." : false;
    return [validateName,validateLevel];
}

const firstLetterUpperCase = (text) => text.charAt(0).toUpperCase() + text.slice(1);

export const formatString = (text) => text.split(" ").map(string => firstLetterUpperCase(string)).join(" ");