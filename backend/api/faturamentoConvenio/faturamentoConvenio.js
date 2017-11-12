const restful = require('node-restful')
const mongoose = restful.mongoose

const lancamentoSchema = new mongoose.Schema({
  convenio: { type: String, required: true },
  dataEntrega: { type: Date, min: 0, default: Date.now, required: true},
  valorBruto: { type: Number, min: 0,required: true},
  revisaoGlosa: { type: Number, min: 0, required: false},
  glosaDefinitiva: { type: Number, min: 0, required: false},
  notaFiscal: { type: Number, min: 0, required: false},
  dataNF: { type: Date, required: false},
  valorCorrigido: { type: Number, min: 0, required: false},
  impostoRetido: { type: Number, min: 0, required: false},
  dataPagamento: { type: Date, min: 0, required: false},
  valorLiquido: { type: Number, min: 0, required: false}
})

const faturamentoConvenioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  month: { type: Number, min: 1, max: 12, required: true },
  year: { type: Number, min: 1970, max: 2100, required: true },
  lancamentos: [lancamentoSchema]
})

module.exports = restful.model('FaturamentoConvenio', faturamentoConvenioSchema)
