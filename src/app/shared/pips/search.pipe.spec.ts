import { SearchPipe } from './search.pipe'

describe('SearchPipe', () => {
    let pipe: SearchPipe

    beforeEach(() => {
        pipe = new SearchPipe()
    })

    it('should return an empty array when given an empty array', () => {
        const result = pipe.transform([], 'search')
        expect(result).toEqual([])
    })

    it('should return the input array when given an empty search string', () => {
        const input = [
            { id: 1, name: 'apple' },
            { id: 2, name: 'banana' }
        ]
        const result = pipe.transform(input, '')
        expect(result).toEqual(input)
    })

    it('should return the input array when given a search string with fewer than 3 characters', () => {
        const input = [
            { id: 1, name: 'apple' },
            { id: 2, name: 'banana' }
        ]
        const result = pipe.transform(input, 'ba')
        expect(result).toEqual(input)
    })

    it('should filter the input array based on the search string', () => {
        const input = [
            { id: 1, name: 'apple' },
            { id: 2, name: 'banana' }
        ]
        const result = pipe.transform(input, 'ban')
        expect(result).toEqual([{ id: 2, name: 'banana' }])
    })

    it('should filter nested object values based on the search string', () => {
        const input = [
            { id: 1, name: 'apple', details: { description: 'red fruit' } },
            { id: 2, name: 'banana', details: { description: 'yellow fruit' } }
        ]
        const result = pipe.transform(input, 'yellow')
        expect(result).toEqual([
            { id: 2, name: 'banana', details: { description: 'yellow fruit' } }
        ])
    })

    it('should not match values that are null or undefined', () => {
        const input = [
            { id: 1, name: null },
            { id: 2, name: undefined }
        ]
        const result = pipe.transform(input, 'search')
        expect(result).toEqual([])
    })

    it('should be case insensitive', () => {
        const input = [
            { id: 1, name: 'apple' },
            { id: 2, name: 'BANANA' }
        ]
        const result = pipe.transform(input, 'bAn')
        expect(result).toEqual([{ id: 2, name: 'BANANA' }])
    })

    it('should return an the array items when given a very short search string', () => {
        const input = [
            { id: 1, name: 'apple' },
            { id: 2, name: 'banana' }
        ]
        const result = pipe.transform(input, 'a')
        expect(result).toEqual(input)
    })

    it('should handle deeply nested objects', () => {
        const input = [
            {
                id: 1,
                name: 'apple',
                details: { description: { long: { text: 'Red fruit' } } }
            },
            {
                id: 2,
                name: 'banana',
                details: { description: { long: { text: 'Yellow fruit' } } }
            }
        ]
        const result = pipe.transform(input, 'yellow')
        expect(result).toEqual([
            {
                id: 2,
                name: 'banana',
                details: {
                    description: {
                        long: {
                            text: 'Yellow fruit'
                        }
                    }
                }
            }
        ])
    })
})
