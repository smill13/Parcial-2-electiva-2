
function numeroRamdon(n){
    return Math.floor(Math.random() * n)
}

num = numeroRamdon(21);
console.log(num)

function getCaracteres(done){
    const results = fetch(`https://rickandmortyapi.com/api/character/?page=${num}`);

    results
        .then(response => response.json())
        .then(data => {
            done(data)
    });
}

getCaracteres(data => {
    data.results.forEach(personaje => {
        
        const galery = document.createRange().createContextualFragment(/*html*/`
        
        <div class="galery-view">
            <div class="thumbnail-container">
                <img class="thumbnail" src="${personaje.image}">
            </div>
            <!--contendio del personaje-->
            <div class="image-info-grid">
                <div class="image-info">
                    <p class="personaje-name">Name: ${personaje.name}</p>
                    <p class="personaje-estatus">Status: ${personaje.status}</p>
                    <p class="personaje-especies">Species: ${personaje.species} </p>
                </div>
            </div>
        </div>

        `);

        const section = document.querySelector("section.galery-grid");
        section.append(galery);
    });
})