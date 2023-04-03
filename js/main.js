let list = document.querySelector('.list');


let dataFetch = fetch('https://rickandmortyapi.com/api/character');
dataFetch.then((response) => {
    return response.json();
// }).then((info) => {
//     console.log(info);
//         fetch('http://localhost:8004/posts', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(info.results)
//    })
})
.then((data) => {
    list.innerHTML = '';
    data.results.forEach((elem) => {
        console.log(elem);
        list.innerHTML += `<div class="user-n">
        <h5>${elem.name}</h5>
        <br>
        <img src="${elem.image}" alt="user" width="100">
    </div>`;
    });
})

let block2 = document.querySelector(".list2")
fetch('http://localhost:8004/posts', {
    method: "GET",
    headers: {
        "Content-type" : "application/json"
    }
})
.then((reponse) => reponse.json())
.then((data1) => data1)
.then((blockData) => {
    block2.innerHTML = '';
    blockData.forEach((elem) => {
        console.log(elem);
        let html = `<div class="user-n">
        <h5>${elem.name}</h5>
        <br>
        <img src="${elem.image}" alt="user" width="100">
        </div>`;
        block2.innerHTML += html;
    });
})