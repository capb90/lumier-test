export interface IPatientInfo {
  datos: IData[];
  count: number;
}

export interface IData {
  id: number;
  estadoExamenId: number;
  estadoExamenNombre: string;
  prioridadId: number;
  prioridadNombre: string;
  procedenciaNombre: string;
  citaId: number;
  pacienteId: number;
  pacienteIdentificacion: string;
  pacienteNombre: string;
  pacienteEdad: string;
  contratoId: number;
  contratoNombre: string;
  convenioId: number;
  convenioNombre: string;
  fechaCita: Date;
  horaCita: string;
  salaId: number;
  salaNombre: string;
  ipsId: number;
  ipsNombre: string;
  sedeId: number;
  sedeNombre: string;
  sedeCiudad: string;
  sedeDepartamento: string;
  sedeDireccion: string;
  medicoRemitente: string;
  linkImagen?: string;
  impresionId?: number;
  hasValidacion?: boolean;
  examenes: IExam[];
}

export interface IExam {
  id: number;
  citaExamenId: number;
  nombre: string;
  codigo: string;
  estadoExamenId: number;
  estadoExamenNombre: string;
  modalidadId: number;
  modalidadNombre: string;
  modalidadSigla: string;
  requiereContraste: boolean;
}
