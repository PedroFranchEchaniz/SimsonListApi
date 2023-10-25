// Generated by https://quicktype.io

export interface Simpson {
    docs: Simpson[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: null;
    nextPage: number;
}

export interface Simpson {
    _id: string;
    Nombre: string;
    Historia: string;
    Imagen: string;
    Genero: string;
    Estado: string;
    Ocupacion: string;
    updatedAt?: string;
}
