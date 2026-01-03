export const formatDate = (
    date: Date,
    options?: Intl.DateTimeFormatOptions,
) => {
    const dateFormatOptions: Intl.DateTimeFormatOptions = options || {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    };
    return new Intl.DateTimeFormat('ru', dateFormatOptions).format(date);
};
