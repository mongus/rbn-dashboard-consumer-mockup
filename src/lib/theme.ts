interface PropertyProps {
    variation?: string,
    theme: any
}

export function propFn(key:string) {
    return (property: string, defaultValue?: any): any => {
        return ({variation, theme}: PropertyProps) => {
            if (variation)
                return theme[key][variation][property] || defaultValue;
            else
                return theme[key][property] || defaultValue;
        };
    }
}
