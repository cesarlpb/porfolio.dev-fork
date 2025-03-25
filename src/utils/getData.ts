import bio from "../data/bio.json";
import contacto from "../data/contacto.json";

const data = {
  "biografia": bio,
  "contacto": contacto
}

const extendedData = {
  ...data,
  "nombreCompleto": `${bio.nombre} ${bio.apellido}`
  // se pueden colocar más tipos custom
};;

type BaseData = typeof data;
type ExtendedData = typeof extendedData;

export default function getData(): ExtendedData {
  // TODO: podría pasar todos los datos o solo lo que me solicitan
  // ¿De qué forma podemos solicitar solo lo que necesitamos?
  return extendedData
}