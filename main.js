const container = document.querySelector(".container")
let customer = customers[0]
// create container by selecting container class in HTML
// set individual customer to group index of 0


console.log("customer title is", customer.name.title)
console.log("customer imgsrc is", customer.picture.medium)


// get loop info working for 1 customer first 
// const customerImage = document.createElement("img")
// customerImage.src = customer.picture.thumbnail
// container.appendChild (customerImage)

// const customerName = document.createElement("h3")
// customerName.innerText = `${customer.name.first} ${customer.name.last}`
// container.appendChild (customerName)

// const customerEmail = document.createElement("h4")
// customerEmail.innerText = customer.email
// container.appendChild (customerEmail)

// const customerAddress= document.createElement("h4")
// customerAddress.innerText=`${customer.location.street.number} ${customer.location.street.name} 
// ${customer.location.city}, ${customer.location.state} ${customer.location.postcode}`
// container.appendChild (customerAddress)

// const customerBirthDate= document.createElement("h4")
// customerBirthDate.innerText= customer.dob.date
// container.appendChild (customerBirthDate)

// const customerRegistration = document.createElement("h4")
// customerRegistration.innerText = customer.registered.date
// container.appendChild (customerRegistration)




for (let customer of customers) {
    const customerCard = document.createElement("div")
    customerCard.classList.add('customer-card')
    // / created a div and assigned a class of customerCard to it
    
    const customerImage = document.createElement("img")
    customerImage.src = customer.picture.large
    customerCard.appendChild(customerImage)
    // create image and pulled customer image size large for all
    
    const customerName = document.createElement("h4")
    customerName.innerHTML = `${customer.name.first} ${customer.name.last}`
    customerCard.appendChild (customerName)
    // created an h4 element to assing all customer first name and last names

    const customerEmail = document.createElement("h5")
    customerEmail.innerHTML = customer.email
    customerCard.appendChild (customerEmail)
    // created p element for all emails
    
    const customerAddress = document.createElement("p")
    customerAddress.innerHTML = `${customer.location.street.number} ${customer.location.street.name}
    ${customer.location.city}, ${nameToAbbr(customer.location.state)} ${customer.location.postcode}`
    customerCard.appendChild (customerAddress)
    // created another p element for street addresses


    const customerBirthday = document.createElement("p")
    customerBirthday.innerHTML= `DOB: ${moment(customer.dob.date).format('ll')}`
    customerCard.appendChild (customerBirthday)
    // created p element for DOB, used moment formatting for date format
    
    const customerRegDate = document.createElement("p")
    customerRegDate.innerHTML = `Customer Since : ${moment(customer.registered.date). format('ll')}`
    customerCard.appendChild (customerRegDate)
    container.appendChild(customerCard)
    // added registration date in a p element, formatting with moment
}