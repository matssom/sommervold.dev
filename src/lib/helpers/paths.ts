
export const cleanPath = (path: string) => {
    const baseRoute = path.replace(/^\/en/, '');
    return baseRoute.replace(/^\/+|\/+$/g, '');
};

export const pathEqual = (path?: string, path2?: string) => {
    if (!path || !path2) return;
    return cleanPath(path) === cleanPath(path2);
};