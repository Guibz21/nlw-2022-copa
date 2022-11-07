function createGame(player1, hour, player2) {
  return `
  <li>
              <img src="./Assets/${player1}.svg" alt="Bandeira do ${player1}" />
              <strong> ${hour} </strong>
              <img src="./Assets/${player2}.svg" alt="Bandeira da ${player2}" />
              </li>
  `
}

let delay = -0.3
function createcard(date, day, games) {
  delay = delay + 0.3
  return `
     <div class="card" style= "animation-delay: ${delay}s">
            <h2>${date}<span>${day}</span></h2>
            <ul>
            ${games}
          </ul>
        </div>
  `
}

document.querySelector("#app").innerHTML = `
  <header>
   <img src="./Assets/Logo.svg" alt="Logo nlw" />
      </header>
      <main id="cards">
        ${createcard(
          "24/11",
          "quinta",
          createGame("switzerland", "07:00", "cameroon") +
            createGame("Hungary", "13:00", "Argentina") +
            createGame("Colombia", "20:00", "Japan")
        )}
        ${createcard(
          "28/11",
          "segunda",
          createGame("south_korea", "10:00", "ghana") +
            createGame("Brazil", "13:00", "Switzerland") +
            createGame("Portugal", "16:00", "Uruguay")
        )}
        ${createcard(
          "02/12",
          "Sexta",
          createGame("South_korea", "12:00", "Portugal") +
            createGame("Serbia", "16:00", "Switzerland") +
            createGame("Cameroon", "16:00", "Brazil")
        )}
      </main>
`
