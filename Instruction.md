# Journal des actions de l’agent

## 2026-03-10

- Ajout dans `RestaurantFooter` d’une signature produit en anglais : texte « Created and sold by mada-dev.com » affiché sous le copyright,
  avec un lien externe `https://mada-dev.com`, tout en conservant les liens « Privacy Policy » et « Terms of Service » existants.

- Création de la page « Privacy Policy » :
  - Création du domaine `src/domain/restaurantPrivacy.ts` avec `PrivacyViewModel` (hero avec titre et date de mise à jour, sections 1 à 5, liste d’éléments pour la section 2, section 4 en bloc surligné).
  - Création du contrôleur `src/controllers/restaurantPrivacyController.ts` exposant `getPrivacyViewModel()`.
  - Ajout des organisms `PrivacyPolicyHero` et `PrivacyPolicyContent` dans `src/ui/organisms` pour reproduire le header de page et le contenu textuel (paragraphes, liste à puces, bloc « Data Security »).
  - Création de la page `PrivacyPolicyPage` dans `src/ui/pages/PrivacyPolicyPage.tsx`, composée avec `RestaurantNavbar` et `RestaurantFooter`.
  - Mise à jour de `src/App.tsx` pour ajouter la route `/privacy-policy`.
  - Mise à jour de `RestaurantFooter` pour que le lien « Privacy Policy » pointe vers `/privacy-policy`.

- Création de la page « Terms of Service » :
  - Création du domaine `src/domain/restaurantTerms.ts` avec `termsViewModel` (reuse du shape `PrivacyViewModel` pour le hero et les sections, y compris les préfixes numérotés et la section de contact légale).
  - Création du contrôleur `src/controllers/restaurantTermsController.ts` exposant `getTermsViewModel()`.
  - Réutilisation de `PrivacyPolicyHero` et `PrivacyPolicyContent` dans `TermsOfServicePage` (`src/ui/pages/TermsOfServicePage.tsx`) pour afficher le contenu texte des CGU.
  - Mise à jour de `src/App.tsx` pour ajouter la route `/terms-of-service`.
  - Mise à jour de `RestaurantFooter` pour que le lien « Terms of Service » pointe vers `/terms-of-service`.

## 2026-03-09

- Mise en place d’une organisation de dossiers dédiée à une landing page :
  - Couche domaine dans `src/domain/landing.ts` (modèles et view model de la landing).
  - Couche contrôleur dans `src/controllers/landingController.ts` (fonction `getLandingViewModel`).
  - Couche UI atomique dans `src/ui` avec :
    - `src/ui/atoms` (ex. `SectionHeading`, `PrimaryButton`),
    - `src/ui/molecules` (ex. `Hero`),
    - `src/ui/organisms` (ex. `FeaturesSection`, `TestimonialsSection`, `CtaSection`, `MainHeader`, `MainFooter`),
    - `src/ui/pages/LandingPage.tsx` pour composer la landing complète.
  - Simplification de `src/App.tsx` pour déléguer au composant de page `LandingPage`.

- Reproduction de la home page « L’Essence » :
  - Configuration des typos et couleurs Tailwind dans `src/index.css` (Noto Sans, Noto Serif, Material Symbols, couleurs `primary`, `background-light`, `background-dark`, rayons de bordure).
  - Création du domaine restaurant dans `src/domain/restaurantHome.ts` avec `RestaurantHomeViewModel` (hero, story, plats, réservations, footer) et intégration des URLs d’images et textes issus du HTML fourni.
  - Création du contrôleur `src/controllers/restaurantHomeController.ts` exposant `getRestaurantHomeViewModel()`.
  - Factorisation de l’UI en composants réutilisables :
    - Mise à jour de `PrimaryButton` dans `src/ui/atoms/PrimaryButton.tsx` pour refléter le style des boutons de la maquette (variants `primary` / `secondary`, uppercase, tracking, rayon).
    - Ajout des organisms : `RestaurantNavbar`, `RestaurantHero`, `StorySection`, `SignatureDishesSection`, `ReservationsSection`, `RestaurantFooter` dans `src/ui/organisms`.
    - Ajout de la page `RestaurantHomePage` dans `src/ui/pages/RestaurantHomePage.tsx` pour composer l’écran complet.
  - Mise à jour de `src/App.tsx` pour afficher `RestaurantHomePage` comme nouvelle page d’accueil.

- Ajout de la page « Winter Menu » :
  - Ajout de `react-router-dom` dans `package.json` et mise à jour de `src/App.tsx` pour gérer deux routes : `/` (`RestaurantHomePage`) et `/menu` (`RestaurantMenuPage`).
  - Mise à jour de `RestaurantNavbar` pour utiliser `NavLink` vers `/` et `/menu`, avec état actif sur « Menu » lorsque la page menu est affichée.
  - Création du domaine `src/domain/restaurantMenu.ts` avec `MenuPageViewModel` (hero « The Winter Menu », sections `Starters`, `Main Courses`, `Side Dishes`, `Desserts`, et images associées) reprenant les textes/prix du HTML fourni.
  - Création du contrôleur `src/controllers/restaurantMenuController.ts` exposant `getRestaurantMenuViewModel()`.
  - Factorisation de l’UI de la page menu :
    - Atoms : `MenuSectionHeading` dans `src/ui/atoms`.
    - Molecules : `MenuItemRow` dans `src/ui/molecules` (version détaillée et compacte).
    - Organisms : `MenuHero`, `MenuCategoryTabs`, `MenuContent`, `MenuCtaSection`, `MenuNavbar` dans `src/ui/organisms`.
    - Page : `RestaurantMenuPage` dans `src/ui/pages/RestaurantMenuPage.tsx` qui compose la navigation, le hero, les sections de menu, le CTA et réutilise `RestaurantFooter`.

- Ajout de la page « The Wine Cellar » :
  - Création du domaine `src/domain/restaurantWineCellar.ts` avec `WineCellarViewModel` (hero cave à vins, catégories Champagne/White/Red, images intermédiaires, CTA sommelier) reprenant les textes/prix du HTML fourni.
  - Création du contrôleur `src/controllers/restaurantWineCellarController.ts` exposant `getWineCellarViewModel()`.
  - Évolution de `PrimaryButton` pour supporter un rendu en lien React Router (`as="link"`, `to="/..."`), afin d’utiliser le même composant pour les CTA navigants.
  - Mise à jour de `MenuCtaSection` pour que le bouton « View Wine & Spirits » navigue vers la route `/wine`.
  - Ajout de nouvelles briques UI pour la page cave à vins :
    - Organisms : `WineNavbar`, `WineHero`, `WineCategoryNav`, `WineSections`, `WineSommelierCta` dans `src/ui/organisms`.
    - Page : `WineCellarPage` dans `src/ui/pages/WineCellarPage.tsx`, qui compose l’ensemble et réutilise `RestaurantFooter`.
  - Mise à jour de `src/App.tsx` pour ajouter la route `/wine` vers `WineCellarPage`.

- Unification de la topbar sur l’ensemble du site :
  - Mise à jour de `RestaurantNavbar` pour conserver un seul header commun avec les entrées de menu « Menu », « Gallery », « Contact » et un bouton « Reserve » à droite.
  - Remplacement de `MenuNavbar` et `WineNavbar` par `RestaurantNavbar` respectivement dans `RestaurantMenuPage` et `WineCellarPage` afin d’avoir la même topbar sur la home, la page menu et la page cave à vins.

- Ajout de la page « Gallery » :
  - Création du domaine `src/domain/restaurantGallery.ts` avec `GalleryViewModel` (hero, catégories de filtres, liste d’images avec titres/URLs/alt) à partir du HTML fourni.
  - Création du contrôleur `src/controllers/restaurantGalleryController.ts` exposant `getGalleryViewModel()`.
  - Ajout de briques UI dédiées :
    - Atom : `GalleryFilterPill` pour les pills de filtres.
    - Organisms : `GalleryHero`, `GalleryFilters`, `GalleryGrid` dans `src/ui/organisms` (reproduction du header, des filtres, de la grille responsive, du bouton « Load More » et ajout d’un `pb-24` pour laisser de l’espace avant le footer).
    - Page : `GalleryPage` dans `src/ui/pages/GalleryPage.tsx` qui compose la topbar (`RestaurantNavbar`), le contenu gallery et le footer (`RestaurantFooter`).
  - Mise à jour de `RestaurantNavbar` pour que « Gallery » soit un `NavLink` pointant sur la route `/gallery`.
  - Mise à jour de `src/App.tsx` pour ajouter la route `/gallery` vers `GalleryPage`.

- Ajout de la page « Contact » :
  - Création du domaine `src/domain/restaurantContact.ts` avec `ContactViewModel` (hero, texte d’intro, coordonnées, horaires d’ouverture, bloc “map”) à partir du HTML fourni.
  - Création du contrôleur `src/controllers/restaurantContactController.ts` exposant `getContactViewModel()`.
  - Ajout des organisms `ContactHero`, `ContactInfoAndForm`, `ContactMapSection` dans `src/ui/organisms` pour reproduire le hero, le bloc Get in Touch + Opening Hours, le formulaire et la carte stylisée.
  - Création de la page `ContactPage` dans `src/ui/pages/ContactPage.tsx`, qui compose la topbar commune, la section contact et le footer.
  - Mise à jour de `RestaurantNavbar` pour que « Contact » soit un `NavLink` vers la route `/contact`.
  - Mise à jour de `src/App.tsx` pour ajouter la route `/contact` vers `ContactPage`.

- Corrections diverses :
  - Ajout de `key` uniques dans `RestaurantFooter` pour le rendu des lignes d’adresse.
  - Import de `Fragment` depuis React dans `ContactInfoAndForm` pour corriger l’erreur « Can't find variable: Fragment » lors du rendu de la grille d’horaires.

- Ajout de la page « Private Sommelier Sessions » :
  - Création du domaine `src/domain/restaurantPrivateTasting.ts` avec `PrivateTastingViewModel` (hero, trois cartes d’offres, contenu du sidebar et options d’expérience pour le formulaire).
  - Création du contrôleur `src/controllers/restaurantPrivateTastingController.ts` exposant `getPrivateTastingViewModel()`.
  - Ajout des organisms : `PrivateTastingHero`, `PrivateTastingOfferingSection`, `PrivateTastingBookingSection` dans `src/ui/organisms` pour reproduire le hero, la section “A Curated Masterclass” et le bloc de réservation (sidebar + formulaire).
  - Ajout de la page `PrivateTastingPage` dans `src/ui/pages/PrivateTastingPage.tsx`, qui utilise la topbar commune (`RestaurantNavbar`) et le `RestaurantFooter`.
  - Mise à jour de `WineSommelierCta` pour que le bouton « Book a Private Tasting » déclenche une navigation vers la route `/private-tasting` tout en conservant le design original du bouton.
  - Mise à jour de `src/App.tsx` pour ajouter la route `/private-tasting` vers `PrivateTastingPage`.

- Ajout de la page « Reservations » :
  - Création du domaine `src/domain/restaurantReservations.ts` avec `ReservationsViewModel` (hero, options de formulaire, heures de service et texte de politique de réservation) à partir du HTML fourni.
  - Création du contrôleur `src/controllers/restaurantReservationsController.ts` exposant `getReservationsViewModel()`.
  - Ajout des organisms : `ReservationsHero`, `ReservationsFormSection`, `ReservationsInfoSection` dans `src/ui/organisms` pour reproduire le hero, la carte de réservation et la section Dining Hours / Booking Policy.
  - Création de la page `ReservationsPage` dans `src/ui/pages/ReservationsPage.tsx` (scroll en haut à l’arrivée, composition avec `RestaurantNavbar` et `RestaurantFooter`).
  - Mise à jour de `RestaurantNavbar` pour que le bouton « Reserve » conserve le design d’origine `PrimaryButton` tout en naviguant vers `/reservations` via `useNavigate`.
  - Mise à jour de `src/App.tsx` pour ajouter la route `/reservations` vers `ReservationsPage`.

- Comportement global de scroll au changement de page :
  - Création du composant `ScrollToTop` dans `src/ui/ScrollToTop.tsx` (écoute `useLocation()` et appelle `window.scrollTo({ top: 0, behavior: "instant" })` à chaque changement de `pathname`).
  - Mise à jour de `App.tsx` pour envelopper les `Routes` avec `ScrollToTop`, afin de garantir que chaque navigation vers une nouvelle page commence en haut de la page.

- Aide à la mise en place du dépôt GitHub pour le projet existant : rappel des commandes `git init`, `git add .`, `git commit`, `git branch -M main`, `git remote add origin git@github.com:issa9595/template1.git` puis `git push -u origin main` pour initialiser le dépôt local et pousser le code sur GitHub.

- Résolution d’un blocage GitHub Push Protection lié à la présence d’un token Google OAuth dans `.env` : conseils pour ajouter `.env` au `.gitignore`, retirer le secret du fichier, regénérer le token côté Google et recréer un dépôt Git propre (réinitialisation de `.git`) avant de pousser à nouveau sans secrets.

- Explication sur l’ajout d’un tab icon (favicon) dans la page `index.html` via une balise `<link rel="icon" ...>` pointant vers une image placée dans le dossier `public` ou à la racine, et correction du chemin pour Vite en utilisant `href="/favicon.ico"` (et non `"/public/favicon.ico"`).

- Diagnostic du 404 en production sur Vercel lors du rafraîchissement d’une page React Router : ajout recommandé d’un fichier `vercel.json` à la racine avec une règle de réécriture globale vers `index.html` pour toutes les routes (`/(.*)` → `/index.html`) afin que le routing soit géré côté client.

- Transformation de `RestaurantNavbar` en topbar responsive avec burger menu sur mobile : ajout d’un état `isOpen`, d’un bouton icône (menu/close) visible en `md:hidden`, et d’un panneau de navigation mobile contenant les liens `Menu`, `Gallery`, `Contact` et le bouton `Reserve`, tout en gardant la navigation horizontale actuelle sur desktop.

- Ajustement du bouton « Reserve » pour qu’il ne s’affiche dans la topbar que sur desktop (`md:inline-flex`) et reste uniquement dans le burger menu sur mobile, afin d’éviter le doublon sur les petits écrans, et simplification de `RestaurantNavbar` en supprimant une fonction `handleNavigate` devenue inutile pour corriger l’erreur TS6133.