export interface SnackbarState {
  snackbarOpen: boolean,
  snackbarType: SnackbarType
  snackbarMessage: string,
}

export type SnackbarType = "error" | "success" | "info" | "warning" | undefined