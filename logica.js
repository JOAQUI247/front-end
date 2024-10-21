// função que sera executada quando o botaõ for clicado

function adicionandoGiria()
{
    // pegando o valor inseriodo no input
    giria = document.getElementById
(" giriasInput" ).value
// Selecionando a div onde os resultados (girias) serão exibidas
resultadoDiv = document.getElementById ("resultados")
// verificando se o campo de texto não esta vazio
if( giria ){
    // criando um novo element <p> qye conterá a giria adicionada 
    novaGiria = document.createElement("P")
    // definindo o conteudo de texto do <p>
    novaGiria.textoContent = `Giria adicionada: ${giria}`
     
     // adicionando o <p> dentro da div de resultados 
     resultadosDiv.appendChild(novagiria)
     // Limpando o campo de texto, após a giria ser adicionada 
     document.getElementById("giriasInput").value = ''
} else{
    // alertando o usuario caso o campo estejá vazio
    alert("Por obséquio, insira uma giria!")

    }


}