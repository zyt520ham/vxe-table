import ExportMethods from './src/export'
import VXETable from '../v-x-e-table'
import Panel from './src/panel'
import { ExportTools } from '../tools'

ExportMethods.install = function (Vue) {
  VXETable._export = 1
  Object.assign(VXETable.types, { csv: 1, html: 1, xml: 1, txt: 1 })
  Object.assign(ExportTools, ExportMethods)
  Vue.component(Panel.name, Panel)
}

export const Export = ExportMethods
export default ExportMethods
