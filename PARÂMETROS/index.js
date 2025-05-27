torrar("Pão de forma", "Wemerson", 10.90)

function torrar(pao, nome = "Cliente", valor){
	console.log("Torrada feita com " + pao)
    console.log("Ela é um pedido de " + nome)
    console.log("O valor é " + valor)
    
}

mobile("Jogo de FPS", "PUBG Mobile", "8 anos")

function mobile(fps, jogo, tempoDeJogo){
	console.log("Minha modalidade preferida é: " + fps)
    console.log("Nome do jogo: " + jogo)
    console.log("Tempo de jogo: " + tempoDeJogo);

}

creatStringConnection("db_products", "Wemerson", "224477")

function creatStringConnection(databaseName, user, pass,){
	console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`)
    
}
  