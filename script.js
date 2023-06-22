let juegos = [
    {title: "god of war iv",genre: "action",date: 2018, players: "one player",platform: "ps4",puntaje: 8.2},
    {title: "call of duty",genre: "action",date: 2021, players: "multiplayer",platform: "ps4",puntaje: 9.3},
    {title: "fall guys",genre: "platform",date: 2020, players: "one player",platform: "ps4",puntaje: 7.6},
    {title: "fifa 23",genre: "sports",date: 2022, players: "multiplayer",platform: "ps4",puntaje: 8.4},
    {title: "nba 2k23",genre: "sports",date: 2018, players: "multiplayer",platform: "ps4",puntaje: 8.7},
    {title: "mortal kombat XI",genre: "action",date: 2019, players: "multiplayer",platform: "ps4",puntaje: 9.4},
    {title: "the last of us",genre: "suspense",date: 2021, players: "one player",platform: "ps4",puntaje: 9.8},
    {title: "resident evil 3",genre: "horror",date: 2022, players: "one player",platform: "ps4",puntaje: 7.6},
    {title: "final fantasy XII",genre: "adventure",date: 2023, players: "one player",platform: "ps4",puntaje: 8.1},
    {title: "stray",genre: "platform",date: 2021, players: "one player",platform: "ps4",puntaje: 6.9},
    {title: "gta V",genre: "action",date: 2017, players: "one player",platform: "ps4",puntaje: 8.7},
    {title: "ghost of tsushima",genre: "action",date: 2021, players: "one player",platform: "ps4",puntaje: 9.7},
]

let bienvenida = prompt("INGRESE SU NOMBRE").toUpperCase()
alert("¡HOLA "+ bienvenida + " BIENVENIDO/A A NUESTRA TIENDA DE JUEGOS!")
for (let i = 0; i < 500; i++) { 
    let menu = Number(prompt("INGRESA LA OPCIÓN QUE DESEAS:\n1-BUSCAR JUEGO\n2-VER CATÁLOGO\n3-MEJORES JUEGOS\n4-JUEGOS MULTIPLAYER\n5-SALIR"))

if(menu === 1){
let titulo = prompt("INGRESE EL TÍTULO QUE DESEA BUSCAR")
let juegobuscado = juegos.find(juego => juego.title.toLowerCase() === titulo.toLowerCase())
   
   if (juegobuscado) {
    alert(juegobuscado.title.toUpperCase() + "\n"+ juegobuscado.genre.toUpperCase() + "\n" + juegobuscado.players.toUpperCase())
} else {
    alert("NO SE ENCONTRÓ EL JUEGO BUSCADO")
}
}
else if(menu === 2){
let catalogo = ""
juegos.forEach(juego => {
    catalogo = catalogo + juego.title.toUpperCase() + "   " + juego.date + "\n"
})
alert(catalogo)
}
else if(menu ===3){
    let mejoresJuegos = juegos.filter((juego) => juego.puntaje > 9)
    console.log(mejoresJuegos)
    let catalogoMejores = ""
    mejoresJuegos.forEach((juego) => {
        catalogoMejores = catalogoMejores + juego.title.toUpperCase() + "   " + juego.puntaje + "\n"
    })
    alert(catalogoMejores)
}
else if(menu === 4){
    let multiplayer = juegos.filter((juego) => juego.players.includes("multiplayer"))
    console.log(multiplayer)
    let catalogoMulti = ""
multiplayer.forEach((juego) => {
    catalogoMulti = catalogoMulti + juego.title.toUpperCase() + "   " + juego.genre.toUpperCase() + "\n"
})
alert(catalogoMulti)
}
else if(menu === 5){
    alert("¡GRACIAS POR SU VISITA!")
    break
}
else{
    alert("INGRESE UN VALOR VÁLIDO")
}


}












   
