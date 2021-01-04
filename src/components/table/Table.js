import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {resizeHandler} from '@/components/table/table.resize';
import {shouldResize} from '@/components/table/table.functions';

export class Table extends ExcelComponent {
  constructor($root) {
    super($root, {
      listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
    });
  }
    static className = 'excel__table'
    toHTML() {
      return createTable(30)
    }
    onClick() {

    }
    onMousedown(event) {
      if (shouldResize(event)) {
        resizeHandler(this.$root, event)
      }
    }
    onMousemove() {

    }
    onMouseup() {

    }
}