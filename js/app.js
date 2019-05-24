class App {
	constructor (title, icon) {
		this.title = title
		this.icon = icon
		this.contentWrapper = null
		this.elements = {}
	}
	drawWindow (desktop) {
		this.elements.windowDiv = document.createElement("div")
		this.elements.windowDiv.className = "terminal" // rename this class to something less specific
		desktop.appendChild(this.elements.windowDiv)

		this.elements.headerDiv = document.createElement("div")
		this.elements.headerDiv.className = "encima" // rename this class to something more descriptive in english
		this.elements.windowDiv.appendChild(this.elements.headerDiv)
	}
}