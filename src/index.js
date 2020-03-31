import './style.sass';

window.DatoCmsPlugin.init((plugin) => {
  plugin.startAutoResizer();

  const sectionTitle = plugin.parameters.instance.caption;
  // eslint-disable-next-line no-underscore-dangle
  const borderColor = plugin._settings.theme.primaryColor;

  const container = document.createElement('div');
  container.innerHTML = `<div class="container" style="border-bottom: 2px solid ${borderColor}"><h1><b>${sectionTitle}</b></h1></div>`;

  document.body.appendChild(container);
});
