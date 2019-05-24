
class App {
	constructor (title, icon) {
		this.title = title
		this.icon = icon
		this.contentWrapper = null
		this.elements = {}
	}
	drawWindow (desktop) {
		this.elements.windowDiv = document.createElement("div")
		this.elements.windowDiv.className = "application" 
		desktop.appendChild(this.elements.windowDiv)

		this.elements.headerDiv = document.createElement("div")
		this.elements.headerDiv.className = "titleBar" 
		this.elements.windowDiv.appendChild(this.elements.headerDiv)
        
        this.elements.minimizeButton = document.createElement("p")
		this.elements.headerDiv.appendChild(this.elements.minimizeButton)
        this.elements.minimizeButton.innerHTML = '-';
        this.elements.minimizeButton.className = 'fechar'
        
        this.elements.maximizeButton = document.createElement("img") 
		this.elements.headerDiv.appendChild(this.elements.maximizeButton)
        this.elements.maximizeButton.src = 'imgs/17-512.png'
        this.elements.maximizeButton.className = 'fecha'
        
        this.elements.closeButton = document.createElement("img")
		this.elements.headerDiv.appendChild(this.elements.closeButton)
        this.elements.closeButton.src = 'imgs/close_black_256x256.png'
        this.elements.closeButton.className = 'fecha'
        
        
		this.elements.contentDiv = document.createElement("div")
		this.elements.contentDiv.className = "appBox"
		this.elements.windowDiv.appendChild(this.elements.contentDiv)
	}
}