//Module to display html for technology section.

import { getTechnologies } from "./database.js"
import { setTechnology } from "./database.js"

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "tech") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const Technologies = () => {
    let html = "<ul>"

    const listItems = technologies.map(tech => {
        return `<li>
            <input type="radio" name="tech" value="${tech.id}" />${tech.techType}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}