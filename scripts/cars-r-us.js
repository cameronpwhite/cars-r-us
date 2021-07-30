//Import all display modules to be interpolated in html.
import { Interiors } from "./Interior.js"
import { paintColors } from "./paintColor.js"
import { Technologies } from "./Technology.js"
import { Wheels } from "./Wheels.js"
// import { Orders } from "./Orders.js"
import { addCustomerOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomerOrder()
        }
    }
)

export const carsRUS = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__paint options">
                <h2>Paint Colors</h2>
                ${ paintColors() }
            </section>
            <section class="choices__interior options">
                <h2>Interiors</h2>
                ${ Interiors() }
            </section>
            <section class="choices__tech options">
                <h2>Technologies</h2>
                ${ Technologies() }
            </section>
            <section class="choices__wheel options">
                <h2>Wheels</h2>
                ${ Wheels() }
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>

        </article>
    `
}
