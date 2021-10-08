export interface IToggleAuth {
    toggle: () => void
}

export interface AuthState {
    id: string | null,
    role: string | null,
    token: string | null,
    name: string | null,
}