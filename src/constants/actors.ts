export interface IActor {
    logo: string
    label: string
}

const actors: IActor[] = [
    {
        logo: './actors/farmers.png',
        label: 'actors.farmers'
    },
    {
        logo: './actors/stores.png',
        label: 'actors.stores'
    },
    {
        logo: './actors/buyers.png',
        label: 'actors.buyers'
    },
    {
        logo: './actors/transporters.png',
        label: 'actors.transporters'
    },
    {
        logo: './actors/transformaters.png',
        label: 'actors.processors'
    },
    {
        logo: './actors/agents.png',
        label: 'actors.agents'
    }
]

export default actors;