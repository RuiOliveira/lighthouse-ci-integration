import { Component } from '@angular/core';
import { BestPracticesCIModel } from '../shared/model/best-practices.model';

/**
 * Clave de la lista de checks
 */
export const KEY_LOCALSTORAGE = 'PRUEBAS_CLECK_LIST';

@Component({
  selector: 'app-best-practices-ci',
  templateUrl: './best-practices-ci.component.html',
  styleUrls: ['./best-practices-ci.component.scss']
})
export class BestPracticesCIComponent {

  /**
   * Lista con los check
   */
  checkList: Array<any> = [
    {
      id: 1,
      name: 'Mantener un repositorio fuente único.',
      checked: false
    }, {
      id: 2,
      name: 'Cada commit debe construir la línea principal en una máquina de integración',
      checked: false
    }, {
      id: 3,
      name: 'Todos se comprometen con la línea principal todos los días',
      checked: false
    }, {
      id: 4,
      name: 'Todos pueden ver lo que pasa',
      checked: false
    }, {
      id: 5,
      name: 'Automatizar tu compilación',
      checked: false
    }, {
      id: 6,
      name: 'Manter la compilación rápida (< 10min)',
      checked: false
    }, {
      id: 7,
      name: 'Haz tu autocomprobación de construcción (Testeos)',
      checked: false
    }, {
      id: 8,
      name: 'Arreglar construcciones rotas inmediatamente',
      checked: false
    }, {
      id: 9,
      name: 'Haz que sea fácil para cualquier persona obtener el último ejecutable',
      checked: false
    }, {
      id: 10,
      name: 'Prueba en un clon del entorno de producción',
      checked: false
    }, {
      id: 11,
      name: 'Implementación automatizada',
      checked: false
    }
  ];

  /**
   * Constructor
   */
  constructor() {
    const checkListStorage = localStorage.getItem(KEY_LOCALSTORAGE);
    if (checkListStorage) {
      this.checkList = JSON.parse(checkListStorage);
    }
  }

  /**
   * Evento que se lanza al cambiar cualquier check
   */
  onChangeCheck() {
    localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(this.checkList));
  }

  /**
   * Determina si todos los check estan marcados
   */
  allChecked() {
    return this.checkList.every(function (item: any) {
      return item.checked === true;
    });
  }
}
