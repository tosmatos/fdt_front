export interface Horaires {
    id: number,
    employe_id: number,
    annee: number,
    semaine: number,
    jour0: Jour,
    jour1: Jour,
    jour2: Jour,
    jour3: Jour,
    jour4: Jour,
}

export interface Jour {
    matina: number,
    matind: number,
    aprema: number,
    apremd: number
}

export function emptyHoraires(): Horaires {
    return {
        id: 0,
        employe_id: 0,
        annee: 2028,
        semaine: 0,
        jour0: {} as Jour,
        jour1: {} as Jour,
        jour2: {} as Jour,
        jour3: {} as Jour,
        jour4: {} as Jour,
    }
}