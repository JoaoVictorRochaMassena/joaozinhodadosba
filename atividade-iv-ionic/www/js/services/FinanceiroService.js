angular.module('ucsalApp').factory('FinanceiroService',function(){
 var dados={};
 ['20261001','20261002'].forEach(function(matricula){
  dados[matricula]={};
  ['2025.2','2026.1','2026.2'].forEach(function(semestre){
   var ano=Number(semestre.split('.')[0]),inicio=semestre.endsWith('.1')?1:7;
   dados[matricula][semestre]=Array.from({length:6},function(_,i){
    var mes=inicio+i,paga=semestre!=='2026.2'||mes<11;
    return {mes:('0'+mes).slice(-2)+'/'+ano,vencimento:new Date(ano,mes-1,10),valor:850,status:paga?'Paga':'A Pagar',codigo:'00000.00000 00000.000000 00000.000000 0 00000000085000'};
   });
  });
 });
 return {semestres:function(matricula){return Object.keys(dados[matricula]);},listar:function(matricula,semestre){return dados[matricula][semestre]||[];}};
});
