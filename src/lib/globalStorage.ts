namespace globalStorage { 

    export function getItem<T = any>(key: string): T|null {
        let item: any = localStorage.getItem(key);
        if(! item ) return null;
        item = JSON.parse(item);
        if( typeof item === 'object' && '_expire' in item) {
            if(item._expire < Date.now()) {
                globalStorage.removeItem(key);
                return null;
            }
            return item.data
        }
        return item;
    }

    export function setItem<T = any>(key: string, value: T, _expireDays?: number) {

        if( _expireDays && _expireDays > 0 ){
            value = {
                _expire: ( _expireDays * 24 * 60 * 60 * 1000 ) + Date.now(),
                data: value
            } as any
        }

        localStorage.setItem(key, JSON.stringify(value));
    }
    
    export function removeItem(key: string) {
        localStorage.removeItem(key)
    }
    
    export const key = (index: number)=> localStorage.key(index);
    export function clear(){ localStorage.clear() };
    export function getLength() { return localStorage.length };

}

export default globalStorage;