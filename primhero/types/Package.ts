export interface Seguimiento {
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

export interface Observacion {
  estado: string;
  hora: string;
  detalle: string;
}

export interface SeguimientoData {
  status_guia: string;
  nro_guia: number;
  servicio: string;
  estado_seguimiento_entregado: string;
  direccion_destino: string;
  status_seguimientos: Seguimiento[];
  porcentaje_barra: number;
  observaciones_seguimientos: Observacion[];
  fue_rechazado: {
    estado: boolean;
    msj: string;
    tipo: string;
  };
}

export interface SearchResultItem {
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
  seguimientos: any;
  status_guia: string;
  nro_guia: number;
  servicio: string;
  estado_seguimiento_entregado: string;
  direccion_destino: string;
  status_seguimientos: SearchResultItem[];
  porcentaje_barra: number;
  observaciones_seguimientos: {
    estado: string;
    hora: string;
    detalle: string;
  }[];
  fue_rechazado: {
    estado: boolean;
    msj: string;
    tipo: string;
  };
}