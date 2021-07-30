import { getOrders } from "./database.js"
import { getInteriors } from "./database.js"
import { getPaintColors } from "./database.js"
import { getWheels } from "./database.js"
import { getTechnologies } from "./database.js"

const buildOrderListItem = (order) => {
    const interiors = getInteriors()
    const paintColors = getPaintColors()
    const wheels = getWheels()
    const technologies = getTechnologies()

    // Remember that the function you pass to find() must return true/false
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundPaintColor = paintColors.find(
        (color) => {
            return color.id === order.paintId
        }
    )
    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    const foundTech = technologies.find(
        (tech) => {
            return tech.id === order.techId
        }
    )
    const totalCost = foundInterior.price + foundPaintColor.price + foundWheel.price + foundTech.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}


export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}