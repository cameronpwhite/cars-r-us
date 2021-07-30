//This module creates html for the paint color selection section of the site.
import { getPaintColors } from "./database.js"
import { setPaintColor } from "./database.js"

const colors = getPaintColors();

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "color") {
            setPaintColor(parseInt(event.target.value))
        }
    }
)

export const paintColors = () => {
    let html = "<ul>"

    //Use .map to create an array of list Items.

    const listItems = colors.map(color => {
        return `<li>
            <input type="radio" name="color" value="${color.id}" /> ${color.color}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
    
}

