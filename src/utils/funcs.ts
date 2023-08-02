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

