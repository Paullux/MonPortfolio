const GH = "https://www.svgrepo.com/show/332084/github.svg";
const FG = "https://framagit.org/uploads/-/system/appearance/header_logo/1/logo.svg";

export const projects = [
  {
    title: "Tenir l'accordage",
    description: "Mon autobiographie — le harcèlement, la chute, la psychiatrie et la reconstruction. Comme cette guitare folk jetée par la fenêtre, j'ai été réparé, et aujourd'hui je tiens l'accord.",
    image: { src: "assets/img/tenir-accordage.png", alt: "Tenir l'accordage - autobiographie", href: "https://amzn.eu/d/02ZDPsTq", portrait: true },
    links: [
      { href: "https://amzn.eu/d/02ZDPsTq", icon: "https://www.amazon.fr/favicon.ico", label: "Kindle (Amazon)" },
      { href: "https://play.google.com/store/books/details?id=Oh3xEQAAQBAJ", icon: "https://play.google.com/favicon.ico", label: "Google Play Livres" },
      { href: "https://www.fnac.com/livre-numerique/a23355842/Paul-WOISARD-Tenir-l-accordage#FORMAT=ebook%20(ePub)", icon: "https://www.fnac.com/favicon.ico", label: "Fnac (Kobo)" },
      { href: "https://www.kobo.com/fr/fr/ebook/tenir-l-accordage", icon: "https://www.kobo.com/assets/favicon.ico", label: "Kobo" },
      { href: "https://www.tiktok.com/@paulluxwaffle/video/7661193634624048406", icon: "https://www.tiktok.com/favicon.ico", label: "TikTok (vidéo promotionnelle)" },
      { href: "https://youtube.com/shorts/NjPW_WiPb6k", icon: "https://www.youtube.com/favicon.ico", label: "YouTube (vidéo promotionnelle)" },
    ],
  },
  {
    title: "Mon blog — Moi, ma Vie et mes Histoires",
    description: "Mon blog personnel où je raconte ma vie sans filtre : famille, santé mentale, musique, créations et introspection. Chaque article est une nouvelle page d'un livre que j'écris au quotidien — un espace où nos chemins se croisent et nos histoires s'entrelacent.",
    image: { src: "https://blog.paulwoisard.fr/wp-content/uploads/2023/11/download.png", alt: "Mon blog - Moi, ma Vie et mes Histoires", href: "https://blog.paulwoisard.fr/", width: 500 },
    links: [
      { href: "https://blog.paulwoisard.fr/", icon: "https://blog.paulwoisard.fr/favicon.ico", label: "lire le blog" },
    ],
  },
  {
    title: "Vehemence Squadron",
    description: "Prototype de rail shooter en space opera développé en Three.js et Vite. Pilotez un chasseur de l'escadron Aquila lancé depuis le porte-vaisseaux Véhémence pour rouvrir une route commerciale attaquée par l'Hégémonie du Vide.",
    image: { src: "https://paullux.github.io/vehemence-squadron/cinematics/second_mission_end/red_corona_escape_ai.png", alt: "Vehemence Squadron", href: "https://paullux.github.io/vehemence-squadron/", width: 500 },
    links: [
      { href: "https://github.com/Paullux/vehemence-squadron", icon: GH, label: "code source" },
    ],
  },
  {
    title: "Bit-Scripts : MusicLocal Discord Presence",
    description: "Affiche dans votre statut Discord la musique locale en cours de lecture, sur Windows et Linux, indépendamment du lecteur ou de la plateforme utilisée.",
    image: { src: "assets/img/musiclocal-discord.png", alt: "MusicLocal Discord Presence - Discord status", portrait: true },
    links: [
      { href: "https://github.com/Bit-Scripts/MusicLocal-Discord-Presence", icon: GH, label: "code source" },
    ],
  },
  {
    title: "NeuroHell",
    description: "Un FPS doom-like développé avec Three.js, combinant un univers infernal, une narration immersive et une direction artistique inspirée du metal et de la science-fiction.",
    image: { src: "https://github.com/Paullux/neurohell/raw/main/assets/images/screenshots/In_Game_2.jpg", alt: "NeuroHell - FPS", href: "https://neurohell.com/", width: 500 },
    links: [
      { href: "https://github.com/Paullux/neurohell", icon: GH, label: "code source" },
    ],
  },
  {
    title: "Snake 3D",
    description: "Le Snake old-school inspiré du Nokia, revisité en 3D avec Three.js. Une seule page HTML statique — zéro dépendance, zéro build, jouable directement en ligne.",
    image: { src: "https://raw.githubusercontent.com/Paullux/snake3d/main/img/bg-menu.jpg", alt: "Snake 3D", href: "https://paullux.github.io/snake3d/", width: 500 },
    links: [
      { href: "https://github.com/Paullux/snake3d", icon: GH, label: "code source" },
    ],
  },
  {
    title: "arCARna",
    description: "Un jeu de course arcade néon développé avec Godot 4.x. Conduite arcade avec système de nitro, gestion d'énergie, trafic IA et circuit néon lumineux.",
    media: [
      { type: "img", src: "https://github.com/Paullux/arCARna/raw/main/assets/images/bandeau.png", alt: "arCARna - bandeau", width: 500 },
      { type: "img", src: "https://github.com/Paullux/arCARna/blob/main/assets/images/screenshots/image1.jpg?raw=true", alt: "arCARna - screenshot", width: 500 },
    ],
    links: [
      { href: "https://github.com/Paullux/arCARna", icon: GH, label: "code source" },
    ],
  },
  {
    title: "Home Assistant",
    description: "Plateforme domotique open source qui met la confidentialité et le contrôle local au premier plan. Connecte des milliers d'appareils (Zigbee, Z-Wave, Wi-Fi…) sans cloud imposé, avec des automatisations puissantes et une interface moderne.",
    image: { src: "assets/img/home-assistant-dashboard.png", alt: "Home Assistant dashboard", href: "https://home-assistant.paulwoisard.fr/", width: 500 },
    links: [
      { href: "https://www.home-assistant.io/", icon: "https://www.home-assistant.io/images/favicon-192x192.png", label: "site officiel" },
      { href: "https://github.com/home-assistant/core", icon: GH, label: "code source" },
    ],
  },
  {
    title: "Coordonnées Géodésiques",
    description: "Un outil d'affichage et de conversion de coordonnées géodésiques.",
    image: { src: "assets/img/coordonnees-geodesiques.png", alt: "Coordonnées Géodésiques", width: 500 },
    links: [
      { href: "https://github.com/Paullux/coordonees-geodesique", icon: GH, label: "code source" },
    ],
  },
  {
    title: "TheAIExposition",
    description: "Une exposition d'art génératif créé par intelligence artificielle.",
    image: { src: "https://raw.githubusercontent.com/Paullux/TheAIExposition/HEAD/public/assets/images/lowres/Jeune_Rasta.png", alt: "TheAIExposition - Jeune Rasta", href: "https://paullux.github.io/TheAIExposition/", width: 500 },
    links: [
      { href: "https://github.com/Paullux/TheAIExposition", icon: GH, label: "code source" },
    ],
  },
  {
    title: "PicOfTheDay",
    description: "Une image du jour accompagnée de son contexte historique.",
    image: { src: "https://github.com/Paullux/PicOfTheDay/raw/main/frontend/public/screenshot.png", alt: "PicOfTheDay", href: "https://pic-of-the-day.paulwoisard.fr/", width: 500 },
    links: [
      { href: "https://github.com/Paullux/PicOfTheDay", icon: GH, label: "code source" },
    ],
  },
  {
    title: "mosaic-slideshow",
    description: "Un fond d'écran mosaïque animé et dynamique.",
    image: { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80", alt: "mosaic-slideshow", href: "https://paullux.github.io/mosaic-slideshow/", width: 500 },
    links: [
      { href: "https://github.com/Paullux/mosaic-slideshow", icon: GH, label: "code source" },
    ],
  },
  {
    title: "lea-solene",
    description: `Site web de Léa Solène, chanteuse de reggae, pour la promotion de son EP <em>Roots &amp; Light</em>.`,
    image: { src: "https://lea-solene.fr/assets/img/lea-header.jpg", alt: "Léa Solène", href: "https://lea-solene.fr/", width: 500 },
    links: [
      { href: "https://github.com/Paullux/lea-solene", icon: GH, label: "code source" },
    ],
  },
  {
    title: "SnakeJS",
    description: "Une implémentation du jeu Serpent classique en JavaScript.",
    image: { src: "assets/img/snakejs.png", alt: "SnakeJS - Nokia Snake", href: "https://paullux.github.io/SnakeJS/", width: 300 },
    links: [
      { href: "https://github.com/Paullux/SnakeJS", icon: GH, label: "code source" },
    ],
  },
  {
    title: "phoenix-os",
    description: "Un environnement de bureau web inspiré d'Ubuntu Unity, entièrement dans le navigateur.",
    image: { src: "https://github.com/Paullux/phoenix-os/raw/main/assets/ambiance.jpg", alt: "phoenix-os", href: "https://paullux.github.io/phoenix-os/", width: 500 },
    links: [
      { href: "https://github.com/Paullux/phoenix-os", icon: GH, label: "code source" },
    ],
  },
  {
    title: "Bit-Scripts : SnakeGame",
    description: "Un jeu de Serpent (Snake) généré avec l'aide d'une IA.",
    image: { src: "https://bit-scripts.github.io/images/snake_screenshot.png", alt: "SnakeGame", width: 500 },
    links: [
      { href: "https://github.com/Bit-Scripts/SnakeGame", icon: GH, label: "code source" },
    ],
  },
  {
    title: "Bit-Scripts : myMatrix-Web",
    description: "Des effets à la Matrix pour navigateur web.",
    image: { src: "https://github.com/Bit-Scripts/myMatrix-Web/raw/main/myMatrix.GIF", alt: "myMatrix-Web", width: 250 },
    links: [
      { href: "https://github.com/Bit-Scripts/myMatrix-Web", icon: GH, label: "code source" },
    ],
  },
  {
    title: "Bit-Scripts : one-day-on-earth",
    description: "Une page web qui se met à jour dynamiquement en fonction de la météo et de l'heure.",
    image: { src: "https://raw.githubusercontent.com/Bit-Scripts/one-day-on-earth/HEAD/moon_in_night.png", alt: "one-day-on-earth nuit", href: "https://bit-scripts.github.io/one-day-on-earth/", width: 500 },
    links: [
      { href: "https://github.com/Bit-Scripts/one-day-on-earth", icon: GH, label: "code source" },
    ],
  },
  {
    title: "Bit-Scripts : 3D-Earth",
    description: "Une page web avec Three.js qui affiche la Terre dans l'espace en 3D.",
    image: { src: "https://github.com/Bit-Scripts/3D-Earth/raw/main/3D%20Earth.GIF", alt: "3D-Earth", width: 500 },
    links: [
      { href: "https://github.com/Bit-Scripts/3D-Earth", icon: GH, label: "code source" },
    ],
  },
  {
    title: "Bit-Scripts : PDF-Equilibrist",
    description: "Un éditeur PDF open source.",
    image: { src: "https://github.com/Bit-Scripts/PDF-Equilibrist/raw/main/assets/logo/PDF-Equilibrist-logo.png", alt: "PDF-Equilibrist", width: 300 },
    links: [
      { href: "https://github.com/Bit-Scripts/PDF-Equilibrist", icon: GH, label: "code source" },
    ],
  },
  {
    title: "Bit-Scripts : Guitarix + PipeWire",
    description: "Configuration de Guitarix avec PipeWire en mode émulation JACK, pour les guitaristes sous Linux.",
    image: { src: "https://guitarix.org/images/screenshots/Guitarix_0.35.0.jpg", alt: "Guitarix", width: 500 },
    links: [
      { href: "https://github.com/Bit-Scripts/Guitarix-Pipewire-Configuration", icon: GH, label: "code source / config" },
    ],
  },
  {
    title: "Bit-Scripts : midi-to-singing",
    description: "Transformez vos fichiers MIDI en chant grâce à des fichiers de paroles.",
    image: { src: "https://github.com/Bit-Scripts/midi-to-singing/raw/main/Logo.webp", alt: "midi-to-singing", width: 300 },
    links: [
      { href: "https://github.com/Bit-Scripts/midi-to-singing", icon: GH, label: "code source" },
    ],
  },
  {
    title: "Bit-Scripts : ghibli-style-transfer",
    description: "Applique un style graphique Ghibli à n'importe quelle vidéo grâce à AnimeGANv2.",
    image: { src: "https://bit-scripts.github.io/images/frame_trait%C3%A9.png", alt: "rendu Ghibli", width: 500 },
    links: [
      { href: "https://github.com/Bit-Scripts/ghibli-style-transfer", icon: GH, label: "code source" },
    ],
  },
  {
    title: "Bit-Scripts : MPRIS Discord Presence",
    description: "Affiche dans votre statut Discord le titre musical en cours de lecture sur Linux, via le protocole MPRIS (compatible avec la plupart des lecteurs Linux).",
    image: { src: "https://bit-scripts.github.io/images/MPRIS.png", alt: "MPRIS Discord Presence", width: 500 },
    links: [
      { href: "https://github.com/Bit-Scripts/MPRIS-Discord-Presence", icon: GH, label: "code source" },
    ],
  },
  {
    title: "Bit-Scripts : APPIPTV Freebox &amp; HDHomeRun",
    description: "Une application de streaming IPTV avec interface graphique PyQt6 pour l'intégration avec VLC, compatible Freebox et HDHomeRun.",
    image: { src: "https://bit-scripts.github.io/images/IPTV.png", alt: "APPIPTV", width: 500 },
    links: [
      { href: "https://github.com/Bit-Scripts/APPIPTV_Freebox_et_HDHomeRun", icon: GH, label: "code source" },
    ],
  },
  {
    title: "Bit-Scripts : zenbot",
    description: "Un bot Discord pour diffuser des sons ambiants relaxants via des fichiers locaux ou une API.",
    image: { src: "https://bit-scripts.github.io/images/zen-bot.png", alt: "zenbot", style: "max-height:280px;width:auto;" },
    links: [
      { href: "https://github.com/Bit-Scripts/zenbot", icon: GH, label: "code source" },
    ],
  },
  {
    title: "Bit-Scripts : Marv",
    description: `Marv est le Bot Discord de la communauté Bit-Scripts, accompagné de <a href="https://github.com/Bit-Scripts/MarvWeb" target="_blank">MarvWeb</a>, son interface web disponible sur <a href="https://marv-bot.fr/" target="_blank">marv-bot.fr</a>.`,
    image: { src: "https://bit-scripts.github.io/images/marv.jpg", alt: "Marv", href: "https://marv-bot.fr/", width: 500 },
    links: [
      { href: "https://github.com/Bit-Scripts/Marv", icon: GH, label: "code source Marv (bot)" },
      { href: "https://github.com/Bit-Scripts/MarvWeb", icon: GH, label: "code source MarvWeb" },
    ],
  },
  {
    title: "Bit-Scripts : Matrix",
    description: `Capture de la WebCam vers un rendu ASCII Art dans une fenêtre Tkinter en temps réel (Python), puis réimplémenté en C++ pour les performances avec <a href="https://github.com/Bit-Scripts/matrix_cpp" target="_blank">matrix_cpp</a>.`,
    image: { src: "https://bit-scripts.github.io/images/matrix.jpg", alt: "Matrix ASCII Art", width: 500 },
    links: [
      { href: "https://github.com/Bit-Scripts/Matrix", icon: GH, label: "code source Python" },
      { href: "https://github.com/Bit-Scripts/matrix_cpp", icon: GH, label: "code source C++" },
    ],
  },
  {
    title: "Bit-Scripts : musique",
    description: "Un petit lecteur de musique écrit en Python qui ne mange pas de pain.",
    image: { src: "https://bit-scripts.github.io/images/musique.png", alt: "musique", width: 500 },
    links: [
      { href: "https://github.com/Bit-Scripts/musique", icon: GH, label: "code source" },
    ],
  },
  {
    title: "Bit-Scripts",
    description: `Un nouveau projet de développement personnel à l'envie en partage sur une communauté <a href="https://github.com/orgs/Bit-Scripts/repositories">github.com/orgs/Bit-Scripts/repositories</a>`,
    image: { src: "https://avatars.githubusercontent.com/u/119359265?s=200&v=4", alt: "Bit-Scripts", href: "https://bit-scripts.github.io", width: 440, height: 440 },
    links: [
      { href: "https://github.com/Bit-Scripts/Bit-Scripts.github.io", icon: GH, label: "code source" },
    ],
  },
  {
    title: "Heficience est à l'arrêt",
    description: "Heficience, s'est arrêté",
    media: [
      { type: "img", src: "assets/img/Heficience grey logo.png", alt: "Heficience", width: 380 },
      { type: "img", src: "assets/img/Heficience end.png", alt: "Heficience", width: 380 },
    ],
    links: [
      { href: "https://heficience.com", icon: "https://i.pinimg.com/originals/c5/fe/cb/c5fecb873af4c85d6eddccb9d5f1d8ff.gif", label: "Lien vers site éteind" },
    ],
  },
  {
    title: "Negritube.fr",
    description: `Un autre projet plus personnel, j'ai pour un cousin de mon épouse, créer un site web <a href="https://negritube.fr">Negritube.fr</a>.`,
    image: { src: "https://github.com/Paullux/Negritube.fr/blob/main/assets/img/Carte-og.png?raw=true", alt: "Negritube.fr", href: "https://negritube.fr/", width: 500 },
    links: [
      { href: "https://github.com/Paullux/Negritube.fr", icon: GH, label: "code source" },
    ],
  },
  {
    title: "france.tv",
    description: `Dans un cadre plus personnel, j'ai créé en C++/Qt, une application pour Windows et Linux qui contient le site <a href="https://github.com/Paullux/FranceTV" target="_blank">france.tv</a>.`,
    media: [
      { type: "img", src: "https://github.com/Paullux/FranceTV/raw/main/images/france-tv-white.svg", alt: "france.tv", width: 500 },
      { type: "img", src: "https://github.com/Paullux/FranceTV/raw/main/images/Capture.png", alt: "france.tv capture", width: 500 },
    ],
    links: [
      { href: "https://github.com/Paullux/FranceTV", icon: GH, label: "code source" },
      { href: "https://github.com/Paullux/FranceTVinstaller", icon: GH, label: "installateur AppImage" },
    ],
  },
  {
    title: "DVKBuntu par Heficience",
    description: `Sur le site d'Heficience, on continu de partager des liens de téléchargement de <a href="https://www.heficience.com/pages/reference.html#DVKBuntu" target="_blank">DVKBuntu.</a>`,
    media: [
      { type: "img", src: "assets/img/DVKBUNTU.jpg", alt: "DVKBuntu", width: 380 },
      { type: "img", src: "https://avatars.githubusercontent.com/u/59876164?s=200&v=4", alt: "Heficience", height: 180 },
    ],
    links: [
      { href: "https://github.com/Heficience/Heficience-menu", icon: GH, label: "code source" },
    ],
  },
  {
    title: "Heficience Launcher Android",
    description: `Pour le compte d'Heficience, moi et <a href="https://androne.dev/" target="_blank">AndroneDev</a> on a continué l'EasyPhone de Handy Open Source sous le nom de <a href="https://github.com/Heficience/Heficience-Launcher-Android">Heficience-Launcher-Android.</a>`,
    media: [
      { type: "youtube", id: "BwroA8IzxC0", width: 500, height: 320 },
    ],
    links: [
      { href: "https://github.com/Heficience/Heficience-Launcher-Android", icon: GH, label: "code source" },
    ],
  },
  {
    title: "Heficience menu",
    description: `Pour le compte d'Heficience, j'ai continué l'EasyMenu de Handy Open Source sous le nom de <a href="https://www.heficience.com/Heficience/Heficience-menu" target="_blank">Heficience-menu.</a><br><br><a href="https://github.com/Heficience/Heficience-menu/releases/tag/4.20">Liens de Téléchargements des binaires pour Windows, Mac et Linux.</a>`,
    image: { src: "https://github.com/Heficience/Heficience-menu/raw/main/Images/ImageDuMenu.png?width=1522&height=860", alt: "Heficience menu", width: 500 },
    links: [
      { href: "https://github.com/Heficience/Heficience-menu", icon: GH, label: "code source" },
    ],
  },
  {
    title: "Heficience Bot",
    description: `Pour le serveur Discord d'Heficience, j'ai créé un bot Discord, <a href="https://www.heficience.com/" target="_blank">Heficience-Bot.</a>`,
    media: [
      { type: "img", src: "https://user-images.githubusercontent.com/22844238/143687622-b0b46fc1-3ded-4ae1-acef-9207d053eedd.png", alt: "Heficience Bot", width: 280 },
      { type: "img", src: "https://github.com/Heficience/Heficience-Bot/raw/main/Laurels_bot.png", alt: "Heficience Bot laurels", width: 320 },
    ],
    links: [
      { href: "https://github.com/Heficience/Heficience-Bot", icon: GH, label: "code source" },
    ],
  },
  {
    title: "Naissance d'Heficience",
    description: `Suite à la dissolution Handy Open Source Heficience a été créé par <a href="https://github.com/andronedev" target="_blank">AndroneDev</a> et Moi`,
    media: [
      { type: "img", src: "https://user-images.githubusercontent.com/22844238/143687622-b0b46fc1-3ded-4ae1-acef-9207d053eedd.png", alt: "Handy Open Source", width: 280 },
      { type: "text", html: `<p>Pour Heficience j'ai créé <a href="https://www.heficience.com/">le site web depuis un template boot-strap.</a></p>` },
      { type: "img", src: "https://github.com/Heficience/heficience-site-web/raw/main/assets/img/PourReadMe.jpg", alt: "Heficience site web", href: "https://www.heficience.com/", width: 320 },
    ],
    links: [
      { href: "https://github.com/Heficience", icon: GH, label: "code source" },
    ],
  },
  {
    title: "Handy Open Source est morte le 20/11/2021",
    description: "L'association Handy Open Source a été dissoute le 20 Novembre 2021",
    image: { src: "https://avatars.githubusercontent.com/u/59876164?s=400&u=7f995726fc9bd7b9376cc1ebb200480628e5fe7e&v=4", alt: "Handy Open Source", width: 320 },
    links: [
      { href: "https://github.com/handyopensource/", icon: GH, label: "code source" },
    ],
  },
  {
    title: "HOSDVK EasyPhone",
    description: `Chez Handy Open Source, j'ai aussi développé <a href="https://github.com/Paullux/HOSDVK-EasyPhone" target="_blank">une application Android : HOSDVK-EasyPhone</a><br>Téléchargeable sur le <a href="https://play.google.com/store/apps/details?id=com.hos_dvk.easyphone.full" target="_blank">Google Play Store</a><br>Téléchargeable sur le <a href="https://f-droid.org/packages/com.hos_dvk.easyphone.full/" target="_blank">F-Droid</a>`,
    media: [
      { type: "youtube", id: "Au5Wk7009RQ", width: 500, height: 320 },
    ],
    links: [
      { href: "https://github.com/Paullux/HOSDVK-EasyPhone", icon: GH, label: "code source" },
    ],
  },
  {
    title: "Bot Salut Wave",
    description: `Chez Handy Open Source, j'ai aussi développé un bot Discord en nodejs, <a href="https://github.com/handyopensource/Bot-Salut-Wave" target="_blank">Bot-Salut-Wave</a>`,
    image: { src: "https://github.com/handyopensource/Bot-Salut-Wave/raw/main/Laurels_bot.png", alt: "Bot-Salut-Wave", width: 500 },
    links: [
      { href: "https://github.com/handyopensource/Bot-Salut-Wave", icon: GH, label: "code source" },
    ],
  },
  {
    title: "DVKBuntu Easy Menu Qt",
    description: `Chez Handy Open Source, j'ai aussi refait une application au départ en js, en C++/Qt qui n'est techniqument rien d'autre qu'un navigateur Web amélioré <a href="https://github.com/Paullux/dvkbuntu-easy-menu-qt">dvkbuntu-easy-menu-qt</a>`,
    image: { src: "https://github.com/Paullux/dvkbuntu-easy-menu-qt/raw/main/Images/ImageDuMenu.png", alt: "dvkbuntu-easy-menu", width: 500 },
    links: [
      { href: "https://github.com/Paullux/dvkbuntu-easy-menu-qt", icon: GH, label: "code source" },
    ],
  },
  {
    title: "PPA de Handy Open Source",
    description: `Chez Handy Open Source, j'ai beaucoup bossé sur DVKBuntu, j'ai par exemple géré les <a href="https://launchpad.net/~dvkbuntu/+archive/ubuntu/dvkbuntu-ppa-20.04" target="_blank">PPA de l'orga</a> un ppa est un dépôt d'archive créer par des développeurs indépendant du projet Ubuntu afin de rendre disponible leurs logiciels disponibles pour les utilisateurs des distribution Linux basé sur Ubuntu.<br>⚠️ DVKBuntu n'est plus maintenu à jour.`,
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/8/83/Bureau_de_Base.png", alt: "handy open source", width: 500 },
    afterMedia: `<br><a href="https://fr.wikipedia.org/wiki/DVKBuntu" target="_blank">La Page Wikipédia vous donnera plus d'infos sur DVKBuntu</a>`,
    links: [
      { href: "https://github.com/handyopensource/dvkbuntu-ppa-1910", icon: GH, label: "code source" },
    ],
  },
  {
    title: "Handy Open Source",
    description: `J'ai aussi fait partie d'une organisation sur Github, l'organisation s'appellait Handy Open Source, on avait monté une association loi 1901 en support du projet, le produit phare de l'association était une distribution Linux DVKBuntu. Aujourd'hui, l'association a disparu mais il toujours possible de télécharger la distribution sur SourceForge.<br><a href="https://sourceforge.net/projects/dvkbuntu/" target="_blank">Version Standard</a> / <a href="https://sourceforge.net/projects/dvkbuntulight/" target="_blank">Version Light</a><br>⚠️ la distribution n'est plus maintenu à jour, la dernière version est basé sur Kubuntu 20.04.`,
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/8/83/Bureau_de_Base.png", alt: "handy open source", width: 500 },
    afterMedia: `<br><a href="https://fr.wikipedia.org/wiki/DVKBuntu" target="_blank">La Page Wikipédia vous donnera plus d'infos sur DVKBuntu</a>`,
    links: [
      { href: "https://github.com/handyopensource", icon: GH, label: "code source" },
    ],
  },
  {
    title: "AMDGPU pro",
    description: `J'ai participé à l'élaboration du port d'Ubuntu sur ArchLinux du pilote AMDGPU pro (pilote des cartes graphiques AMD sous Linux).<br><br>⚠️ N'est plus à jour. Allez sur AUR pour obtenir ce pilote`,
    image: { src: "https://ubunlog.com/wp-content/uploads/2017/08/amdgpu-pro.jpg", alt: "amdgpu-pro", width: 500 },
    links: [
      { href: "https://github.com/Paullux/archlinux-amdgpu", icon: GH, label: "code source" },
    ],
  },
  {
    title: "Undead Murderer Discord Bot",
    description: `Pour UNDEAD MURDERER, j'ai développé un bot Discord en nodejs, <a href="https://github.com/Paullux/undead-murderer-discord-bot" target="_blank">undead-murderer-discord-bot</a>`,
    image: { src: "https://a.fsdn.com/con/app/proj/undead-murderer/screenshots/vlcsnap-2018-12-05-20h01m24s533.png/245/183/1", alt: "undead-murderer-discord-bot", width: 500 },
    links: [
      { href: "https://github.com/Paullux/undead-murderer-discord-bot", icon: GH, label: "code source" },
    ],
  },
  {
    title: "Undead Murderer",
    description: `Ensuite je suis passé au développement de jeu sur PC (Windows, MacOS et Linux) grâce à Godot toujours avec des zombies :<br><a href="https://sourceforge.net/projects/undead-murderer/files/latest/download" target="_blank">UNDEAD MURDERER téléchargeable sur le SourceForge</a><br><a href="https://undead-murderer.com/" target="_blank">UNDEAD MURDERER le site web</a>`,
    image: { src: "https://framagit.org/Paullux/Undead_Murderer/raw/master/Images/ZombiesInNight.png", alt: "undead murderer", href: "https://undead-murderer.com/", width: 500 },
    links: [
      { href: "https://framagit.org/Paullux/undead-murderer---version-godot", icon: FG, label: "code source" },
    ],
  },
  {
    title: "L'EPG (le guide des programmes TV)",
    description: `Il y a quelques années j'utilisais Kodi comme médiacenter sur mon PC ou sur Rasberry Pi (3B) grâce à librelec pour la TV. Pour obtenir l'EPG (le guide des programmes TV) j'utilisais une bibliothèque disponible sur internet qui a disparu. Du coup j'avais fait des petit utilitaire pour metttre à jour les EPG, un pour <a href="https://github.com/Paullux/Mise-jour-EPG-Windows" target="_blank">Windows</a> (en C#) et un pour <a href="https://github.com/Paullux/Mise-a-Jour-EPG-Linux" target="_blank">Linux</a> (en Bash) et Free mon opérateur à l'époque partageait les chaines TV en IPTV.`,
    image: { src: "https://www.geekzone.fr/wp-content/uploads/2021/02/Kodi-IPTV.jpg", alt: "", width: 500 },
    links: [
      { href: "https://github.com/Paullux/Mise-jour-EPG-Windows", icon: GH, label: "code source Windows" },
      { href: "https://github.com/Paullux/Mise-a-Jour-EPG-Linux", icon: GH, label: "code source Linux" },
    ],
  },
  {
    title: "Zombies Murderers",
    description: `Ensuite j'ai passé pas mal de temps à développer sur Android avec Unity3D toute une série de jeux avec des zombies :<br><br><a href="https://www.zombies-murderers.com/" target="_blank">ZOMBIES MURDERERS le site web officiel</a><br><a href="https://play.google.com/store/apps/developer?id=Paullux+Waffle" target="_blank">ZOMBIES MURDERERS sur le Google Playstore</a>`,
    image: { src: "https://www.zombies-murderers.com/images/pic02-01.jpg", alt: "zombies murderers", href: "https://www.zombies-murderers.com/", width: 500 },
    links: [
      { href: "https://framagit.org/Paullux/Zombies_Murderers_VR", icon: FG, label: "code source de la version en VR (réalité virtuelle)" },
      { href: "https://framagit.org/Paullux/Zombies_Murderers_Standard", icon: FG, label: "code source de la version en Standard" },
      { href: "https://framagit.org/Paullux/Zombies_Murderers_AR", icon: FG, label: "code source de la version en AR (réalité augmentée)" },
      { href: "https://framagit.org/Paullux/Zombies_Murderers_HUB", icon: FG, label: "code source du hub regroupant les 3 autres jeux" },
    ],
  },
  {
    title: "Captvty",
    description: "Le premier code que j'ai commencé à partager est un script bash pour installer Captvty sur Ubuntu (Captvty est un logiciel développer pour Windows afin de voir en direct ou en replay la télévision sur PC).",
    media: [
      { type: "youtube", id: "DY0GP6XtUWs", width: 500, height: 320 },
    ],
    links: [
      { href: "https://framagit.org/Paullux/captvty-script-installateur-pour-ubuntu", icon: FG, label: "code source pour Ubuntu" },
      { href: "https://framagit.org/Paullux/captvty-script-installateur-pour-archlinux", icon: FG, label: "code source pour ArchLinux" },
    ],
  },
  {
    title: "DeviantArt",
    description: `Sur le début de ce site je vous ai parlé de ma passion pour le dessin vous pouvez vous rendre sur mon profil <a href="https://www.deviantart.com/paulwoisard" target="_blank">DeviantArt</a>.`,
    image: { src: "assets/img/deviantart.jpg", alt: "DeviantArt - Paul Woisard", href: "https://www.deviantart.com/paulwoisard", width: 500 },
    links: [
      { href: "https://www.deviantart.com/paulwoisard", icon: "https://upload.wikimedia.org/wikipedia/commons/3/36/DeviantArt_Logo2.svg", label: "mes dessins" },
    ],
  },
];
