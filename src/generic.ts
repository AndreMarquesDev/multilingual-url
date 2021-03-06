export const isClientSide = typeof window !== 'undefined';
export const hasNavigator = typeof navigator !== 'undefined';
export const localePathRegex = (lang: string): RegExp => RegExp(`^/${lang}`);
