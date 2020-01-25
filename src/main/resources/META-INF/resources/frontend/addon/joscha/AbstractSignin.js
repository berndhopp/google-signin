import { PolymerElement } from '@polymer/polymer/polymer-element.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="login-button"> 
  <template> 
   <vaadin-button id="button"> 
   </vaadin-button> 
  </template> 
   
 </dom-module>`;

document.head.appendChild($_documentContainer.content);
class OAuthButton extends PolymerElement{
    static get is(){
        return 'oauth-button';
    }
}

customElements.define(OAuthButton.is, OAuthButton);

