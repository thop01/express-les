const button = document.querySelector(".add-two");


button.addEventListener("click", function (){
    const increment = 2;
    fetch("/counter?incrementby=" + increment)
       .then(response => response.text())
       .then(text => showCounter(text));
});


fetch("/counter")
    .then(response => response.text())
    .then(text => showCounter(text));


function showCounter(text){
    const counterElement = document.querySelector(".counter");
    counterElement.textContent = text;
    console.log(text);
}




fetch("/my-profile")
    .then(response => response.text())
    .then(text => showMyProfile(text));

function showMyProfile(html){
    const view = document.querySelector(".my-profile");
    view.innerHTML = html;
    console.log(html);
    

}


fetch("/my-profile")
    .then(response => response.text())
    .then(text => showMyProfile(text));


fetch("/api/parks")
    .then(response => response.json())
    .then(json => showParks(json));
    

    const addButton = document.querySelector(".add-button");
    addButton.addEventListener("click", ()=>{
        const title = document.querySelector("input.title-input").value;
        const description = document.querySelector("input.description-input").value;
        console.log({title, description})
        fetch(`/api/parks/add?parkname=${title}&description=${description}`)
            .then(response => response.json())
            .then(json => showParks(json));
    });


function showParks(parks){
    const view = document.querySelector(".park-container");
    view.innerHTML = "";
    for(let park of parks){
        view.innerHTML += `
            <div class="block">
            <h3> ${park.title} </h3>
            <p> ${park.description} </p>
        `;
    }

}


