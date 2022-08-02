export const firstLetterUpperCase = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export const formatString = (text) => {
    return text.split(" ").map(string => firstLetterUpperCase(string)).join(" ");
}