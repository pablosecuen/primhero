  type Status = "En depósito" | "En camino" | "Retirado"; // Definición de los posibles estados

interface Seguimiento {
    img: string;
    alt: string;
    titulo: string;
    active: boolean;
    list: {
        nro_reparto: number | null;
        nro_foja: number | null;
        info: string;
    }[];
}

export interface SearchResult {
    status_guia: string;
    nro_guia: number;
    servicio: string;
    estado_seguimiento_entregado: string;
    direccion_destino: string;
    status_seguimientos: Seguimiento[];
    porcentaje_barra: number;
    observaciones_seguimientos: string[];
    fue_rechazado: {
        estado: boolean;
        msj: string;
        tipo: string;
    };
}

