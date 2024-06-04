export const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const getTitle = (title) => {
    if (title.length > 50) {
        return title.slice(0, 50) + '...';
    }
    return title;
}

export const getTransformedValues = (value) => {
    if (value > 1000000) {
        return (value / 1000000).toFixed(1) + 'M';
    } else if (value > 1000) {
        return (value / 1000).toFixed(1) + 'K';
    }
    return value;
}

