//This module creates html for the paint color selection section of the site.
import {getPaintColors} from "./database.js"

const colors = getPaintColors();

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

