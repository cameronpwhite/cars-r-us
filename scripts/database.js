const database = {
    paintColors: [
        {id: 1, color:"Silver", price: 450},
        {id: 2, color:"Midnight Blue", price: 600},
        {id: 3, color:"Firebrick Red", price: 700} ,
        {id: 4, color:"Spring Green", price: 300},
    ],
    interiors: [
        {id: 1, seatType: "Beige Fabric", price: 200},
        {id: 2, seatType: "Charcoal Fabric", price: 250},
        {id: 3, seatType: "White Leather", price: 300},
        {id: 4, seatType: "Beige Leather", price: 350},
    ],
    technologies: [
        {id: 1, techType: "Basic Package", price: 100},
        {id: 2, techType: "Navigation Package", price: 150},
        {id: 3, techType: "Visibility Package", price: 150},
        {id: 4, techType: "Ultra Package", price: 300},
    ],
    wheels: [
        {id: 1, wheelType: "17-inch Pair Radial", price: 200},
        {id: 2, wheelType: "17-inch Pair Radial Black", price: 200},
        {id: 3, wheelType: "18-inch Pair Spoke Silver", price: 300},
        {id: 4, wheelType: "18-inch Pair Spoke Black", price: 300},
    ],
    customOrders: [
        {
        id: 1,
        paintId: 1,
        interiorId: 1,
        techId: 1,
        wheelId: 1,
        }
    ],
    orderBuilder: {}
}

export const getPaintColors = () => {
    return database.paintColors.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const setPaintColor = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.techId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomerOrder = () => {
    //Copy the current state of user choices
    const newOrder = {...database.orderBuilder}
    
    //Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    //Add a timestamp to the order
    newOrder.timestamp = Date.now()

    //Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    //Reset the temporary state for user choices
    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}