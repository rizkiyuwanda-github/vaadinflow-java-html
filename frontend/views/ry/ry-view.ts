import { html, LitElement, customElement } from 'lit-element';


//import '@vaadin/vaadin-button';
//import '@vaadin/vaadin-text-field';

@customElement('ry-view')
export class RYView extends LitElement {
  createRenderRoot() {
    // Do not use a shadow root
    return this;
  }
  
 scriptTag() {
  const tag = document.createElement('script');
  tag.innerHTML = `
    alert("oke")
                `;
  return tag;
}

  render() {
    return html`
    ${this.scriptTag()}
    <iframe width="560" height="315" src="https://www.youtube.com/embed/s6P3R-J0IiI" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    <script type="text/javascript">
		var pubId=157566;
		var siteId=851483;
		var kadId=3932574;
		var kadwidth=300;
		var kadheight=250;
		var kadschain="SUPPLYCHAIN_GOES_HERE";
		var kadUsPrivacy=""; <!-- Insert user CCPA consent string here for CCPA compliant inventory -->
		var kadtype=1;
		var kadGdpr="0"; <!-- set to 1 if inventory is GDPR compliant -->
		var kadGdprConsent=""; <!-- Insert user GDPR consent string here for GDPR compliant inventory -->
		var kadexpdir = '1,2,3,4,5';
		var kadbattr = '8,9,10,11,14';
		var kadifb = 'Dc';
		var kadpageurl= "%%PATTERN:url%%";
</script>
<script type="text/javascript" src="https://ads.pubmatic.com/AdServer/js/showad.js"></script>

    `;
  }
}