# Étape 1 : Image de base: Nginx léger (Alpine)
FROM nginx:stable-alpine

# Étape 2 : Nettoyage du contenu par défaut (évite de servir la page Nginx d'origine)
RUN rm -rf /usr/share/nginx/html/*

# Étape 3 : Copier les fichiers utiles du site (pas de .git/.github/notes, etc.)
COPY index.html /usr/share/nginx/html/
COPY robots.txt sitemap.xml /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/
COPY cv/ /usr/share/nginx/html/cv/

# Étape 4 : Configuration Nginx (le .htaccess est ignoré par Nginx)
# Optionnel : Vous pouvez personnaliser le fichier de configuration Nginx si nécessaire
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Étape 5 : Port HTTP du conteneur
EXPOSE 80

# Étape 6 : Démarrage au premier plan (obligatoire en Docker)
CMD ["nginx", "-g", "daemon off;"]
