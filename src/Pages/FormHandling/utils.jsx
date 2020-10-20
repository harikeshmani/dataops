export const checkAllChar = (name) => {
    const letters = /^[A-Za-z]+$/;
    if(name.match(letters)) {
        return true;
    } else {
        return false;
    }
    
}

export function isPositiveInt(val) {
    if(/^\+?(0|[1-9]\d*)$/.test(val)) {
        return true
    }
    else {
        return false
    }
}