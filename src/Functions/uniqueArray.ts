export function uniqueArray<T>(array: T[]): T[] {
    const uniq = array.filter((val, i, self)=>{
        return i === self.indexOf(val);
    });

    return uniq;
}