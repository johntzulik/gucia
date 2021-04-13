import {writable} from 'svelte/store'

export const userbaseStore = writable(null)
export const userStore = writable(null)
export const promiseStore = writable(null)
export const vuelta = writable({
    pilotos:[{"name":""},{"name":"MJ"},{"name":"MC"}], 
    piloto:'', 
    gasolina:'', 
    dsgtn1:'', 
    dsgtn2:'', 
    dsgtn3:'', 
    dsgtn4:'', 
    tiempo:'' 
})
