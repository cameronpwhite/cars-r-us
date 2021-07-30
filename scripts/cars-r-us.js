//Import all display modules to be interpolated in html.
import { Interiors } from "./Interior.js"
import { paintColors } from "./paintColor.js"
import { Technologies } from "./Technology.js"
import { Wheels } from "./Wheels.js"

export const carsRUS = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__paint options">
                <h2>Metals</h2>
                ${ paintColors() }
            </section>
            <section class="choices__interior options">
                <h2>Sizes</h2>
                ${ Interiors() }
            </section>
            <section class="choices__tech options">
                <h2>Styles</h2>
                ${ Technologies() }
            </section>
            <section class="choices__wheel options">
                <h2>Styles</h2>
                ${ Wheels() }
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${ Orders() }
        </article>
    `
}
