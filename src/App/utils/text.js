
export const firstLetterCapital = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).replace(/([A-Z])/g, ' $1').trim();
}

export const removeUnderScores = (text) => {
    return text.replace(/_/g, ' ')
}

