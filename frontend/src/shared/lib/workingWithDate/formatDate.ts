export const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('ru', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }).format(date);
};
