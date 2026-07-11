import { projects } from '../../data/projects.js';

function renderImage(image) {
  const { src, alt, href, width, height, portrait, style: customStyle } = image;
  let attrs;
  let extraClass = '';
  if (customStyle) {
    attrs = `style="${customStyle}"`;
    extraClass = ' class="img-portrait"';
  } else if (portrait) {
    attrs = `style="max-height:270px;width:auto;"`;
    extraClass = ' class="img-portrait"';
  } else if (height && !width) {
    attrs = `height="${height}"`;
  } else {
    attrs = `width="${width || 500}"${height ? ` height="${height}"` : ''}`;
  }
  const img = `<img${extraClass} ${attrs} src="${src}" alt="${alt ?? ''}">`;
  return href ? `<a class="img-link" href="${href}" target="_blank">${img}</a>` : img;
}

function renderMediaItem(item) {
  if (item.type === 'youtube') {
    return `<iframe width="${item.width}" height="${item.height}" src="https://www.youtube.com/embed/${item.id}" frameborder="0" allowfullscreen></iframe>`;
  }
  if (item.type === 'text') {
    return item.html;
  }
  return renderImage(item);
}

function renderLinks(links) {
  return links.map(l => `<a class="link-img-text" href="${l.href}" target="_blank">
        <img width="20px" src="${l.icon}">
        <div>${l.label}</div>
      </a>`).join('\n      ');
}

function renderCard(p) {
  let mediaHTML = '';
  if (p.media) {
    const imgCount = p.media.filter(m => m.type === 'img').length;
    const items = p.media.map(renderMediaItem).join('');
    mediaHTML = imgCount > 1
      ? `<div class="media-wrap" style="--imgs:${imgCount}">${p.media.map(m => `<div>${renderMediaItem(m)}</div>`).join('')}</div>`
      : items;
  } else if (p.image) {
    mediaHTML = renderImage(p.image);
  }

  const afterMedia = p.afterMedia ? `\n      ${p.afterMedia}` : '';

  return `<div class="under-element">
      <h2>${p.title}</h2>
      <p>${p.description}</p>
      ${mediaHTML}${afterMedia}
      <div class="codesource">
        ${renderLinks(p.links)}
      </div>
    </div>`;
}

document.querySelector('.element').innerHTML = projects.map(renderCard).join('\n    ');
