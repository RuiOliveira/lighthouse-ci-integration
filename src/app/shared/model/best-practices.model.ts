/**
 * Modelo del Source
 */
export class BestPracticesCIModel {
  /** id de la buena practica */
  id: number;
  /** Nombre de la buena practica */
  name: string;
  /** Determina si está checkeado */
  checked: boolean;

  constructor(id: number, name: string, checked: boolean) {
    this.id = id;
    this.name = name;
    this.checked = checked;
  }
}
