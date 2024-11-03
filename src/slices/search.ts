import { create } from 'zustand'
type State = {
    query: string
    setQuery: (q: string) => void
}
export const useSearch = create<State>()((set, get, store) => ({
    query: null,
    setQuery: (q: string) => set({query: q}),
}))