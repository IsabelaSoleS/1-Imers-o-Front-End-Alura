const search_input = document.getElementById("search_input");
const result_artist = document.getElementById("result_artist");
const result_playlist = document.getElementById("result_playlist");

/* const search_input = document.querySelector(".cards") -- Aqui ele vai buscar por classes, porém vai sempre pegar o primeiro item da classe */
/* const search_input = document.querySelectorAll(".cards") -- Aqui pega todos os itens para manipular, faz uma node list */

function request_api(search_term) {
    const url = `http://localhost:1244/artists?name_like=${search_term}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => display_results(result))
}

function display_results(result) {
    result_playlist.classList.add("hidden")
    const artist_name = document.getElementById("artist_name");
    const artist_img = document.getElementById("artist_img");

    result.forEach(element => {
        artist_name.innerText = element.name;
        artist_img.src = element.urlImg;
    });

    result_artist.classList.remove("hidden");
}

document.addEventListener("input", function () {
    const search_term = search_input.value.toLowerCase();
    if (search_term === '') { /* ==== é para verificar se é IGUAL e DO MESMO TIPO */ 
        result_playlist.classList.add("hidden");
        result_artist.classList.remove("hidden");
        return;
    }

    request_api(search_term);
})