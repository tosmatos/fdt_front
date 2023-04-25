export interface Horaires {
    id: number,
    employe_id: number,
    annee: number,
    semaine: number,
    jour0: JSON,
    jour1: JSON,
    jour2: JSON,
    jour3: JSON,
    jour4: JSON,
}

export function emptyHoraires(): Horaires {
    return {
        id: 0,
        employe_id: 0,
        annee: 0,
        semaine: 0,
        jour0: {} as JSON,
        jour1: {} as JSON,
        jour2: {} as JSON,
        jour3: {} as JSON,
        jour4: {} as JSON,
    }
}