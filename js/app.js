
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

		this.listenForDrag(this.elements.headerDiv)
	}
	listenForDrag (element) {
		let isHoldingWindow = false
		let mousePosition = {x: 0, y: 0}
		let delta = {x: 0, y: 0}
		element.addEventListener("mousedown", e => {
			console.log("ARRASTAR")
			isHoldingWindow = true

			let x = Number(this.elements.windowDiv.style.left.replace(/\D/g,''))
			let y = Number(this.elements.windowDiv.style.top.replace(/\D/g,''))

			delta.x = mousePosition.x - x
			delta.y = mousePosition.y - y

			console.log(delta)
		})
		window.addEventListener("mousemove", e => {
			mousePosition.x = e.clientX
			mousePosition.y = e.clientY

			if (isHoldingWindow) {
				this.elements.windowDiv.style.top = `${mousePosition.y - delta.y}px`
				this.elements.windowDiv.style.left = `${mousePosition.x - delta.x}px`
			}
		})
		window.addEventListener("mouseup", e => {
			if (isHoldingWindow) {
				console.log("SOLTAR")
				isHoldingWindow = false
			}
		})
	}
}
