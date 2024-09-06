let atacantes = document.getElementById("jogadores")



function revelandoAtacantes(){
    atacantes.innerHTML = `
    <div id="atacantes">
    
    <h2>${jogadores.nome}</h2>
    <p>${jogadores.idade}</p>
    <a href="${jogadores.link} target="_blank">VER MAIS</a>
    </div>
    ` 
}
 