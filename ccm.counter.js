(() => {
  const component = {
    name: 'counter',
    ccm: 'https://ccmjs.github.io/ccm/ccm.js',
    config: {
		
      css: ['ccm.load', 'counter.css'],
      counter: 0,
	  cliecked: 0
	  
      	  
    },
    Instance: function () {
      const inc = document.createElement('button');
      const dec = document.createElement('button');
      inc.innerText = 'Inc';
      inc.onclick = () => {
        this.counter++;
		this.cliecked++;
        this.start();
      };
      dec.innerText = 'Dec';
      dec.onclick = () => {
        this.counter--;
		this.cliecked++;
        this.start();
      }
   
      this.start = async () => {
		 this.element.innerHTML = `<h1> CCM Counter</h1>`
        this.element.innerHTML = `<div>${this.counter} ${this.cliecked}</div>`
        this.element.appendChild(inc)
        this.element.appendChild(dec)
      }
    }
  }

  let b = "ccm." + component.name + (component.version ? "-" + component.version.join(".") : "") + ".js"; if (window.ccm && null === window.ccm.files[b]) return window.ccm.files[b] = component; (b = window.ccm && window.ccm.components[component.name]) && b.ccm && (component.ccm = b.ccm); "string" === typeof component.ccm && (component.ccm = { url: component.ccm }); let c = (component.ccm.url.match(/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/) || ["latest"])[0]; if (window.ccm && window.ccm[c]) window.ccm[c].component(component); else { var a = document.createElement("script"); document.head.appendChild(a); component.ccm.integrity && a.setAttribute("integrity", component.ccm.integrity); component.ccm.crossorigin && a.setAttribute("crossorigin", component.ccm.crossorigin); a.onload = function () { window.ccm[c].component(component); document.head.removeChild(a) }; a.src = component.ccm.url }
})();