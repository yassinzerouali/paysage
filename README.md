# ARBRE 45 — Site vitrine GitHub Pages

## Publication
1. Créer un dépôt public GitHub nommé `arbre45`.
2. Déposer `index.html`, `style.css`, `script.js` et le dossier `images` à la racine du dépôt (Add file > Upload files > Commit changes).
3. Aller dans Settings > Pages > Build and deployment > Deploy from a branch, choisir `main` et `/ (root)`, puis Save.
4. Le site sera accessible sur `https://VOTRE-PSEUDO.github.io/arbre45/` après déploiement.

## À personnaliser AVANT de publier
- Dans `index.html` : remplacer le numéro `06 00 00 00 00`, `tel:+33600000000`, l'adresse `contact@arbre45.fr`, la zone d'intervention, les horaires, les textes et toute promesse commerciale non vérifiée.
- Dans `script.js` : remplacer `CONTACT_EMAIL` par une adresse qui reçoit les demandes.
- Les images actuellement visibles sont des images d'ambiance externes, PAS des réalisations de l'entreprise.
- Dans `style.css` : pour chaque `.photo-one`, `.photo-two`, `.photo-three`, remplacer `background-image:url('...')` par `background-image:url('images/chantier-1.jpg')` (et de même pour les autres). Ajouter les fichiers JPG dans `images/`.
- Pour des photos avant/après, ajouter d'autres blocs `gallery-item` dans `index.html`, ou remplacer les blocs existants.
- Ajouter les mentions légales et une politique de confidentialité adaptées à l'entreprise avant mise en production, notamment si un outil de formulaire ou de statistiques est ajouté.

## Formulaire
Le formulaire utilise `mailto:` : il ouvre le logiciel de messagerie du visiteur avec un e-mail prérempli. Il n'envoie PAS automatiquement et ne stocke aucune demande. Pour un vrai formulaire avec envoi autonome, connecter ultérieurement un service de formulaire compatible avec GitHub Pages (Formspree, etc.).

## Images
Les photos d'ambiance utilisent Unsplash à distance : connexion Internet requise pour les afficher. Les photos de vos chantiers peuvent être stockées localement dans `images/`.
