export type Mode = Record<string, boolean | string | undefined>;

/**
 * @classNames - хелпер для работы с классами
 *
 */

export function classNames(
    cls: string,
    mods: Mode = {},
    additional: Array<string | undefined> = []
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className),
    ].join(' ');
}
