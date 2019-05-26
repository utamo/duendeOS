class Terminal extends App {
    constructor () {
        super ("Terminal", "iconeterminal")
    }
    drawWindow (desktop) {
        super.drawWindow(desktop)
        
        this.elements.terminalContent = document.createElement("p")
        this.elements.contentDiv.appendChild(this.elements.terminalContent)
        this.elements.terminalContent.innerHTML = 'mutanoOS@root~$:mors omnibus▮';
        this.elements.terminalContent.className = 'root'
           
    }
    
}