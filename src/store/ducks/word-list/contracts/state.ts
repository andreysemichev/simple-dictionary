export enum LoadingStatus {
    SUCCESSFUL = "SUCCESSFUL",
    LOADING = "LOADING",
    ERROR = "ERROR",
    NEVER = "NEVER",
};

export interface Item {
    id: string,
    word: string,
    part: string,
    transcription: string,
    description: string,
};

export interface State {
    items: Item[] | null,
    loadingStatus: LoadingStatus,
};

export default State;