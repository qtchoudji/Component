(() => {
  const component = {
    name: 'menu',
    ccm: 'https://ccmjs.github.io/ccm/ccm.js',
    config: {
      css: ['ccm.load', 'menu.css'],
	  direction: 'vertical',
	  data []
	  
      	  
    },
    Instance: function () {
            this.start = async () => {    
                const $ = this.ccm.helper;
                $.setContent ( this.element, $.html( this.html, {
                    direction: this.direction
                }));
                var list = this.element.querySelector("ul");
                console.log("list" + list);
                console.log("data" + this.data);
                this.data.forEach(theme => {
                    const listItem = document.createElement('li');
                    list.appendChild(listItem);
                    listItem.innerHTML = `<div class="button">${theme}</div>`;
                });
                console.log(this.direction);
            }
        }
    };
    let b="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[b])return window.ccm.files[b]=component;(b=window.ccm&&window.ccm.components[component.name])&&b.ccm&&(component.ccm=b.ccm);"string"===typeof component.ccm&&(component.ccm={url:component.ccm});let c=(component.ccm.url.match(/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/)||["latest"])[0];if(window.ccm&&window.ccm[c])window.ccm[c].component(component);else{var a=document.createElement("script");document.head.appendChild(a);component.ccm.integrity&&a.setAttribute("integrity",component.ccm.integrity);component.ccm.crossorigin&&a.setAttribute("crossorigin",component.ccm.crossorigin);a.onload=function(){window.ccm[c].component(component);document.head.removeChild(a)};a.src=component.ccm.url}
})();