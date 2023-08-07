import { create } from 'zustand'

type Pokemon = {
    name: string
    id: number
    sprites: {
        front_default: string
    }
}

type State = {
    pokemon?: Pokemon
    count: number
}

type Actions = {
    increment: (qty: number) => void
    decrement: (qty: number) => void
    getPokemon: (qty: number) => Promise<void>
}

export const useCountStore = create<State & Actions>((set) => ({
    pokemon: undefined,
    count: 10,
    increment: (suma: number) => set((state) => {
        return ({ count: state.count + suma })
    }),
    decrement: (resta: number) => set((state) => {
        return ({ count: state.count - resta })
    }),
    getPokemon: async (id: number) => {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

        const data = await response.json()

        set( (state) => ({
            ...state,
            pokemon: data
        }))

    }
}))