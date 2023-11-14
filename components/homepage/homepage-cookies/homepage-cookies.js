const cookieButton = document.querySelector('.homepage-cookie-button');
const body = document.querySelector('body')
const containerCookie = document.querySelector('.homepage-cookie-container')

/* Al click del bottone procediamo si apre una card */
cookieButton.addEventListener('click', () => {
  const cookieDisabled = document.createElement('div')
/*   cookieDisabled.className = 'homepage-cookie-displayed' */
  body.append(cookieDisabled)
  cookieDisabled.innerHTML = `
  <div class = 'homepage-cookie-disabled'>
    <div class = 'homepage-cookie-disabled-container'>
      <div class ='homepage-cookie-disabled-container-text'>
        <h2>Preferenze per la privacy: i cookie sono nostri. Il controllo è dell'utente.</h2>
        <p>LEGO System A/S (e le terze parti elencate di seguito) impostano e utilizzano cookie e tecnologie simili (“cookie”) su questo sito web per offrire un’esperienza migliore e più user-friendly, per scopi statistici e analitici e per fornire un marketing mirato e pertinente. Ulteriori informazioni sulle categorie di cookie sono riportate di seguito; utilizzare i pulsanti per decidere quali categorie si desidera attivare.</p>
        <p>Facendo clic su "Solo necessari", verranno impostati solo i cookie necessari per consentire il funzionamento del sito Web. Questi cookie non possono essere disabilitati. Selezionando "Accetta tutti" si impostano tutti i cookie. Questo ci consente di ottimizzare l'esperienza dell'utente e di pubblicizzare i nostri prodotti e servizi. In alternativa, è possibile selezionarne solo alcuni. È sufficiente fare clic su "Impostazioni dei cookie" e usare i pulsanti di attivazione/disattivazione per scegliere le categorie preferite.</p>
        <p>Ricordare che è sempre possibile revocare il proprio consenso o modificare le impostazioni semplicemente premendo il tasto “Impostazioni dei cookie” sul nostro sito. Per ulteriori informazioni, vedere anche la nostra Informativa sui cookie e la nostra Informativa sulla privacy Informativa sui cookie e Informativa sulla privacy</p>
        <p>Si noti che in questo sito rispettiamo il Global Privacy Control (GPC) per i cookie e quando viene rilevata l'impostazione GPC escludiamo automaticamente tutti i cookie, eccetto i cookie “Strettamente necessari”. Per ulteriori informazioni, visitare globalprivacycontrol.org.</p>
      </div>
      <div class = 'homepage-cookie-disabled-container-button'>
      <button class ='homepage-cookie-disabled-button-required'><span>Solo necessari</span></button>
      <button class ='homepage-cookie-disabled-button-all'><span>Accetta tutti</span></button>
      <p class = 'homepage-cookie-disabled-container-button-impostation'>Impostazioni dei cookie</p>
      </div>
    </div>
  </div>
  `

  /* al click di solo necessari va in display none la card */
  const btnFewCookie =document.querySelector('.homepage-cookie-disabled-button-required')
  btnFewCookie.addEventListener('click', ()=>{
    cookieDisabled.style.display ='none';
  })

  const btnAllCookie = document.querySelector('.homepage-cookie-disabled-button-all')
  btnAllCookie.addEventListener('click', () => {
    cookieDisabled.style.display = 'none';
    containerCookie.style.display ='none';
  })
})

