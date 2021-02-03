const customerGrid = document.querySelector(".customerGrid")
const customerCard = document.querySelector(".customerCard")
const customerImg = document.querySelector(".customerImg")
console.log(customerCard)
console.log(customerImg)
console.log(customerGrid)
let customer = customers[0]
console.log('customers title is', customer.name.title)


for (let customer of customers) {
    const customerCard = document.createElement('div')
    customerCard.classList.add('customer-card')
    
    const customerImage = document.createElement("img")
    customerImage.src = customer.picture.thumbnail
    customerCard.appendChild(customerImage)
    
    // let customerName = document.createElement("p")
    // customerName.className = "customer-name"
    // customerName.innerHTML = titleCase(customers[i].name.first + " " + customers[i].name.last)
    // customerCard.appendChild (customerName)
    
    const customerEmail = document.createElement("p")
    customerEmail.innerText = customer.email
    customerCard.appendChild (customerEmail)
    
    const customerAddress = document.createElement("p")
    customerAddress.innerText = `${customer.location.street.number} ${customer.location.street.name}
    ${customer.location.city}, ${nameToAbbr(customer.location.state)} ${customer.location.postcode}`
    customerCard.appendChild (customerAddress)
    
    const customerBirthday = document.createElement("p")
    customerBirthday.innerText = customer.dob.date
    customerCard.appendChild (customerBirthday)
    
    const customerRegDate = document.createElement("p")
    customerRegDate.innerText = customer.registered.date
    customerCard.appendChild (customerRegDate)
    
    customerGrid.appendChild(customerCard)
}







// for (let customer of customers) {
//     const customerCard = document.createElement('div')
//     customerCard.classList.add('customerCard')
    
//     const customerName = document.createElement('h4')
//     const name = document.createTextNode(first.last)
//     customerCard.appendChild(name)
//     customerCard.appendChild(customerName)
    
    // const menuItemImg = document.createElement('img')
    // menuItemImg.src = item.imgUrl
    // customerCard.appendChild(menuItemImg)
    // container.appendChild(customerCard)
//   }

function titleCase(name) {
    let allNames = name.toLowerCase().split('');
    for (let i = 0; i < allNames.length; i++) {
        allNames[i] = allNames[i][0].toUpperCase() + allNames[i].slice(1);
    }
    return allNames.join('');
}