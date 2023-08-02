export const makeArray = (size: number): number[] => {
    return Array.from(new Array(size)).map((_, index) => index);
}

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);

    const day = date.toLocaleString('en-US', { day: '2-digit' });
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.toLocaleString('en-US', { year: 'numeric' });

    return `${day} ${month} ${year}`;
}

export const truncateText = (text: string, maxLength: number, showEllipsis = true) => {
    if (!text || text.length <= maxLength) {
        return text;
    }

    const truncatedText = text.substring(0, maxLength);
    return showEllipsis ? `${truncatedText}...` : truncatedText;
}

export const classNames = (classes: { [key: string]: boolean }) => {
    return Object.keys(classes)
        .map(key => (classes[key] ? key : null))
        .filter(Boolean)
        .join(' ');
};
