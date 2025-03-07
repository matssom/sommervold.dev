export const cleanPath = (path: string) => {
    return path.replace(/^\/+|\/+$/g, '');
};

export const pathEqual = (path?: string, path2?: string) => {
    if (!path || !path2) return;
    return cleanPath(path) === cleanPath(path2);
};