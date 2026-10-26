import type { Locale } from '../lib/routes';
const es = {
  skip: 'Saltar al contenido', home: 'Inicio', recipes: 'Plantillas', app: 'Calculadora', theme: 'Tema',
  light: 'Claro', dark: 'Oscuro', system: 'Sistema', sample: 'Demo ficticia: sustituye contenido y destinos antes de publicar.',
  title: 'Compón tu próximo sitio', intro: 'Una base Astro para landings y herramientas pequeñas. Elige una composición y hazla tuya.',
  explore: 'Ver plantillas', collection: 'Elige tu punto de partida', open: 'Abrir demo',
  approach: 'Una base, varias formas', detail: 'Contenido separado, secciones compartidas y comportamiento sólo donde lo necesitas.',
  faq: 'Antes de empezar', question: '¿Incluye servidor o servicios externos?', answer: 'Esta base es estática. Añade un adaptador sólo cuando necesites guardar datos, autenticar usuarios o procesar formularios.',
  calculator: 'Ponle una cifra', calculatorIntro: 'Estima horas por tarifa. Cálculo de ejemplo en USD, sin impuestos ni envío de datos.',
  hours: 'Horas de trabajo', rate: 'Tarifa por hora (USD)', calculate: 'Calcular total', result: 'Total estimado',
  invalid: 'Introduce números entre 0 y 10000 en ambos campos.', nojs: 'Activa JavaScript para calcular; también puedes multiplicar horas por tarifa.',
  back: 'Volver al inicio', missing: 'Página no encontrada', missingText: 'La dirección no existe. Puedes continuar desde el inicio.',
};
type Dictionary = { [K in keyof typeof es]: string };
const en: Dictionary = {
  skip: 'Skip to content', home: 'Home', recipes: 'Templates', app: 'Calculator', theme: 'Theme',
  light: 'Light', dark: 'Dark', system: 'System', sample: 'Fictional demo: replace content and destinations before publishing.',
  title: 'Compose your next site', intro: 'An Astro foundation for landing pages and small tools. Choose a composition and make it yours.',
  explore: 'Browse templates', collection: 'Choose a starting point', open: 'Open demo',
  approach: 'One base, many forms', detail: 'Separate content, shared sections and behaviour only where you need it.',
  faq: 'Before you start', question: 'Does it include a server or external services?', answer: 'This foundation is static. Add an adapter only when you need to store data, authenticate users or process forms.',
  calculator: 'Put a number on it', calculatorIntro: 'Estimate hours times rate. Example in USD, excluding taxes; no data is sent.',
  hours: 'Working hours', rate: 'Hourly rate (USD)', calculate: 'Calculate total', result: 'Estimated total',
  invalid: 'Enter numbers between 0 and 10000 in both fields.', nojs: 'Enable JavaScript to calculate, or multiply hours by rate yourself.',
  back: 'Back to home', missing: 'Page not found', missingText: 'This address does not exist. Continue from the home page.',
};
export function ui(locale: Locale): Dictionary { return locale === 'es' ? es : en; }
