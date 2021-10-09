export interface IToggleAuth {
    toggle: () => void
}

export interface AuthState {
    id: string | null,
    token: string | null,
    name: string | null,
    role: string | null,
}

export interface RegisterData {
    name: string,
    email: string,
    password: string
    role: string,
}

export interface LoginData {
    email: string,
    password: string,
}