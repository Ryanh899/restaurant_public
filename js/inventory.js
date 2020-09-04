// get inventory 
function getInventoryByCategory(category) {
    return axios.get('http://localhost:3000/inventory/getbycategory/' + category)
        .then(response => {
            console.log(response)
            return response;
        })
        .catch(err => {
            console.log(err);
        })
}

function getNextOrderDay() {
    const today = Date.getDay();
    // false = low day true = high
    if (today < 4) return 0
    else return 1
}

function appendInventoryItems(data) {
    data.forEach(item => {
        const nextOrderDay = getNextOrderDay()

    if (nextOrderDay) {

    $('#inventory-column').append(`<div class="card">
        <div id=${item._id} class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">Current Inventory:</p>
            <div class="qty">
                <span id="${item.name}" class="minus bg-dark">-</span>
                <input type="number" class="count-${item.name}" name="qty" value="${item.inventory}">
                <span id="${item.name}" class="plus bg-dark">+</span>
            </div>
            <p class="card-text">Order On: ${item.high_order_day} </p>
            </div>
        </div>`)
    } else {
    $('#inventory-column').append(`<div class="card">
        <div id=${item._id} class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">Current Inventory:</p>
                <div class="qty">
                    <span id="${item.name}" class="minus bg-dark">-</span>
                    <input type="number" class="count-${item.name}" name="qty" value="${item.inventory}">
                    <span id="${item.name}" class="plus bg-dark">+</span>
                </div>
                <p class="card-text">Order On: ${item.high_lower_day} </p>
            </div>
        </div>`
    )
        }

    })

}

function addInventoryItem () {
    const newItemForm = $('#inventory-form')
    const formdata = new FormData(newItemForm)
    
    
}

$(document).ready(() => {

    // get and append inventory
    $('body').on('click', '#inventory-tab', () => {
        const currentInventory = getInventoryByCategory('beer'); 
        if (currentInventory.length) {
            appendInventoryItems(currentInventory)
        }
    })


})