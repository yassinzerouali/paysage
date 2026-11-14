// REMPLACER CETTE ADRESSE par la vraie adresse de l'entreprise avant publication.
const CONTACT_EMAIL = 'contact@arbre45.fr';
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
menu.addEventListener('click', () => {const open = nav.classList.toggle('open');menu.setAttribute('aria-expanded', String(open));menu.textContent = open ? '✕' : '☰';});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰';}));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('quote-form').addEventListener('submit', event => {
 event.preventDefault();const form=event.currentTarget;if(!form.reportValidity())return;
 const data=new FormData(form);const get=key=>String(data.get(key)||'').trim();
 const subject=`Demande de devis ARBRE 45 — ${get('prestation')}`;
 const body=`Bonjour ARBRE 45,\n\nJe souhaite recevoir un devis.\n\nNom : ${get('nom')}\nTéléphone : ${get('telephone')}\nE-mail : ${get('email')}\nCommune du chantier : ${get('commune')}\nPrestation : ${get('prestation')}\n\nDescription du projet :\n${get('description')}\n\nMerci de me recontacter.\n`;
 document.getElementById('form-message').textContent='Votre application e-mail va s’ouvrir. Vérifiez puis envoyez votre message pour transmettre la demande.';
 window.location.href=`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
