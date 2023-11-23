export function EncryptPass(pass){
    return btoa(pass)
}

export function DecryptPass(pass){
    return atob(pass)
}
