var lista_convidado=[];
function enviar_nome(){
    var nome=document.getElementById("nome").value;
    lista_convidado.push(nome)
    document.getElementById("mostrar_nome").innerHTML=lista_convidado;
}
function mostrar_lista(){
    var lista=lista_convidado.join("<br>");
    document.getElementById("lista").innerHTML=lista;
}
function organizar_lista(){
    lista_convidado.sort();
    document.getElementById("lista_organizada").innerHTML=lista_convidado;
}
function pesquisar(){
    var input=document.getElementById("pesquisa").value;
    var vezes=0;
    for(var indice=0;indice<lista_convidado.length;indice++){
        if(input==lista_convidado[indice]){
            vezes++;
        }
    }
    document.getElementById("nome_pesquisado").innerHTML="o nome foi encontrado "+vezes+" vez(es)";
}