ex
//Minha primeira Função
function myFunction()
{
  var app = SpreadsheetApp;				                                                         //A documentação está bem detalhada para aprendizado
  var ui=app.getUi();
  var spreadsheet=app.getActiveSpreadsheet();		                                           //Pegar toda a informação das planilhas
  var sheet=app.getActivesheet();			                                                     //Pega informação da folha atual 
  app.create("NomePlanilha","Nº Linha","Nº Coluna")                                        //Cria planilha com as caracteristicas especificadas
  ui.alert("Mensagem que aparecerá na tela")
  var otherSheet=app.openByRrl("Abrir para realizar operações na planilha")
  
}