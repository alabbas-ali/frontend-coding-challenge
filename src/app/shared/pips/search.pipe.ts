import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'searchFilter' })
export class SearchPipe implements PipeTransform {
    /**
     * Pipe filters the list of elements based on the search text provided
     *
     * @param items list of elements to search in
     * @param searchText search string
     * @returns list of elements filtered by search text or []
     */
    transform(items: Array<any> | null, searchText: string): any[] {
        if (!items) {
            return []
        }

        if (!searchText || searchText.length < 3) {
            return items
        }

        return items.filter((it) => this.fullTextSearch(it, searchText))
    }

    /**
     * Performs a full text search on the object
     *
     * @param obj object to search in
     * @param searchText search string
     * @returns true if the search string is found in the one of the object's values false otherwise
     */
    private fullTextSearch(obj: any, searchText: string): boolean {
        let found = false
        if (!obj) {
            return false
        }
        // eslint-disable-next-line
        Object.values(obj).forEach((val: any) => {
            if (typeof val === 'object') {
                found = found || this.fullTextSearch(val, searchText)
            } else if (val) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                found =
                    found ||
                    // eslint-disable-next-line
                    val
                        .toString()
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
            }
        })
        return found
    }
}
