export class StringHelper {
    extractEverythingBefore(text: string, beforeString: string): string {
        return text.substring(0, text.indexOf(beforeString));
    }

    /**
     * Converts first char of the text to uppercase
     * @param text text
     */
    toPascalCase(text: string | undefined): string {
        if (!text) {
            return '';
        }

        return text.toString().charAt(0).toUpperCase() + text.slice(1);
    }

    /**
     * Converts first char of the text to lowercase
     * @param text text
     */
    toCamelCase(text: string | undefined): string {
        if (!text) {
            return '';
        }

        return text.toString().charAt(0).toLowerCase() + text.slice(1);
    }
    /**
     * capitalizeTxt('this is a test'); // returns 'This is a test'
     * @param text text to capitalize
     */
    capitalizeText(text: string): string {
        if (!text) {
            return '';
        }
        return text.toString().charAt(0).toUpperCase() + text.slice(1);
    }

    isValidEmail(email: string): boolean {
        if (!email) {
            return false;
        }

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }

    /**
     * Removes everything in text before given string
     * @param text Text
     * @param beforeString String to match
     */
    removeEverythingBefore(text: string, beforeString: string): string {
        return text.toString().substring(text.indexOf(beforeString) + 1);
    }

    /**
     * Removes everything after some separator. Includes the separator itself.
     * @param text Text
     * @param separator Everything after this will be removed (included separator itself)
     */
    removeEverythingAfterIncludingSeparator(text: string, separator: string): string {
        const n = text.toString().indexOf(separator);
        // tslint:disable-next-line:triple-equals
        const result = text.toString().substring(0, n != -1 ? n : text.length);

        return result;
    }

    /**
     * Gets hash from given string
     * @param text text to hash
     */
    getHash(text: string): number {
        // tslint:disable-next-line: one-variable-per-declaration
        let hash = 0,
            i,
            chr;
        if (!text) {
            return hash;
        }

        for (i = 0; i < text.length; i++) {
            chr = text.charCodeAt(i);
            // tslint:disable-next-line:no-bitwise
            hash = (hash << 5) - hash + chr;
            // tslint:disable-next-line:no-bitwise
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }

    /**
     * Returns true if text contains the other one
     * @param text text
     * @param contains text to contain
     */
    contains(text: string, contains: string): boolean {
        if (!text || !contains) {
            return false;
        }
        return text.indexOf(contains) !== -1;
    }

    /**
     * Returns true if text contains all of the given inputs
     * @param text text
     * @param contains text array
     */
    containsAll(text: string, containsArr: string[]): boolean {
        if (!text || !containsArr || !Array.isArray(containsArr)) {
            return false;
        }

        return containsArr.every((m) => text.toLowerCase().includes(m.toLowerCase()));
    }

    /**
     * Returns true if text contains one of the given inputs
     * @param text text
     * @param contains text array
     */
    containsAny(text: string, containsArr: string[]): boolean {
        if (!text || !containsArr || !Array.isArray(containsArr)) {
            return false;
        }

        let result = false;

        containsArr.forEach((contains) => {
            const textContainsResult = text.toLowerCase().indexOf(contains.toLowerCase()) !== -1;
            if (textContainsResult) {
                result = true;
                return;
            }
        });

        return result;
    }

    /**
     * Checks if given value is string
     * @param value Value to check
     */
    isString(value: any): boolean {
        if (typeof value === 'string' || value instanceof String) {
            return true;
        }
        return false;
    }

    /**
     * Removes HTML tags from text
     * @param text Text
     */
    stripHtmlTags(text: string): string | undefined {
        if (text === null || text === '') {
            return undefined;
        } else {
            text = text.toString();
        }
        return text.replace(/<[^>]*>/g, '');
    }

    newGuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            // tslint:disable-next-line: no-bitwise
            const r = (Math.random() * 16) | 0,
                // tslint:disable-next-line: no-bitwise
                v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
}

export const stringHelper = new StringHelper();
