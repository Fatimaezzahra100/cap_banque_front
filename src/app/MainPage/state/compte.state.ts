export enum CompteActionsTypes{
    GET_ALL_COMPTES ="[Compte] Get All comptes",
    SEARCH_PRODUCTS ="[Product] Search products",
    NEW_PRODUCTS ="[Product] Get New products",
}

export enum DataStateEnum{
    LOADING,
    LOADED,
    ERROR
}

export interface AppDataState<T>{
    dataState?: DataStateEnum,
    data?:T,
    errorMessage?: string

}