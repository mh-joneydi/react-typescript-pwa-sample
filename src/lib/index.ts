import { Link } from "react-router-dom";

export function mapkeys<
    ObjectType extends object,
    KeyName extends keyof ObjectType
>(array: ObjectType[], key: KeyName): { [prop: string]: ObjectType } {
    const entries = array.map( item=> [ item[key], item ] );
    return Object.fromEntries(entries);
}

export function omit<
    ObjectType extends object, 
    KeyName extends keyof ObjectType
>(object: ObjectType, key: KeyName): Omit<ObjectType,KeyName> {
    if (! key) return object;
    const { [key]: omitted, ...rest } = object;
    return rest
}

export function putZeroBeforeNumber(num: number) {
    return String(num).replace(/^(\d)$/,'0$1');
  }

export const removeCommas = (stringText: string): string=> stringText.toString()?.split(',')?.join('');
export function splitAmount(stringText: string): string {
    return removeCommas(stringText).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
}

/**
 * 
 * @param aspectRatio like 16/9 | 4/3 | 1/1 | ...
 * @returns 
 */
export const calcRatioPercent = ( aspectRatio: string )=> {
    const [ratioX, ratioY] = aspectRatio.split('/');
    return +ratioY * 100 / +ratioX;
}

export function getBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
          resolve(reader!.result!.toString());
      };
      reader.onerror = error => reject(error);
    });
}
export interface IFileValues {
  base64: string,
  extension: string
}
export function splitBase64(dataUrl: string): IFileValues {
  let base64 = dataUrl.replace(/^data:(.*,)?/, '');
  if ((base64.length % 4) > 0) {
    base64 += '='.repeat(4 - (base64.length % 4));
  }
  const extension = dataUrl.match(/(\w+(?=;))/)?.pop()!;

  return { base64, extension }
}

export function getLinkProps(link: string) {
  return (/^http(s?).+/).test(link)
    ? {
        component: 'a',
        target: '_blank',
        href: link
    }
    : {
        component: Link,
        to: link
    }
}

export function cutDesimals(number: number|string, fractionDigits: number) {
  try {
    number = String(number);
    let [N,D] = number.split('.')
    return N.concat('.').concat(D.substring(0, fractionDigits));
  }
  catch {
    return number;
  }
}