
async function getToDo() {
    try {
        const data = await fetch("https://dummyjson.com/products", {
            method: "GET",
            Headers: {
                content_Type: "application/json",
                Authorization: "Bearer tokenName",
            },
        });
        const result = await data.json();
        displayToDo(result.products);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

getToDo();

function displayToDo (data) {
    let temp = ``;
    data.map(todo => {
        temp += ` <div class="todo">
                <h2>${todo.brand}</h2>
                <h4>${todo.category}</h4>
                <p>${todo.description}</p>
            </div> `;
        
        document.querySelector(".todo_container .container").innerHTML = temp;
    } )


}

