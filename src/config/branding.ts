import sessionStorage from '../lib/session-storage';

export const branding:any = {
    'default': {
        points: 'loyalty account'
    }
};

export function getBranding(key:string) {
    const brand:string|null = sessionStorage.getItem('branding');

    return (brand && branding[brand] && branding[brand][key]) || branding['default'][key];
}
