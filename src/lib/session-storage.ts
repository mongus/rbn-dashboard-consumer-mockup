export default typeof window !== 'undefined' ? window.sessionStorage : {
    getItem(key:string) {return null;},
    setItem(key:string, value:string) {},
    removeItem(key:string) {},
    clear() {}
};