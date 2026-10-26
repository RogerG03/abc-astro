export type Locale = 'es' | 'en';
export const locales: Locale[] = ['es', 'en'];
export function localizedPath(locale: Locale, path = ''): string {
  return `${locale === 'es' ? '/' : '/en/'}${path ? `${path.replace(/^\/+|\/+$/g, '')}/` : ''}`;
}
