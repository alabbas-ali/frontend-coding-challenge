import { TestBed } from '@angular/core/testing'
import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing'
import { SpeakerService } from './speaker.service'
import { Speaker, SpeakerPage } from '../model/speaker'
import { emptySpeakersList } from '../model/empty-speakers'

describe('SpeakerService', () => {
    let service: SpeakerService
    let httpMock: HttpTestingController

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [SpeakerService]
        })
        service = TestBed.inject(SpeakerService)
        httpMock = TestBed.inject(HttpTestingController)
    })

    afterEach(() => {
        httpMock.verify()
    })

    it('should be created', () => {
        expect(service).toBeTruthy()
    })

    it('should return speakers when called', () => {
        const mockPage: SpeakerPage = {
            results: emptySpeakersList,
            info: { seed: 'test', results: 3, page: 1, version: '1.3' }
        }

        service.getSpeakers().subscribe((speakers: Speaker[]) => {
            expect(speakers.length).toBe(3)
            expect(speakers[0].name.first).toBe('Marvin')
            expect(speakers[0].name.last).toBe('Hanson')
        })

        // eslint-disable-next-line @typescript-eslint/dot-notation
        const req = httpMock.expectOne(`${service['api']}/?page=0&results=9`)
        expect(req.request.method).toBe('GET')
        req.flush(mockPage)
    })

    it('should return speakers with custom page and results', () => {
        const mockPage: SpeakerPage = {
            results: emptySpeakersList,
            info: { seed: 'test', results: 3, page: 1, version: '1.3' }
        }

        service.getSpeakers(2, 2).subscribe((speakers: Speaker[]) => {
            expect(speakers.length).toBe(3)
            expect(speakers[0].name.first).toBe('Marvin')
            expect(speakers[0].name.last).toBe('Hanson')
            expect(speakers[1].name.first).toBe('Marvin')
            expect(speakers[1].name.last).toBe('Hanson')
        })

        // eslint-disable-next-line @typescript-eslint/dot-notation
        const req = httpMock.expectOne(`${service['api']}/?page=2&results=2`)
        expect(req.request.method).toBe('GET')
        req.flush(mockPage)
    })

    it('should handle errors', () => {
        service.getSpeakers().subscribe(
            () => {
                fail('expected an error')
            },
            (error: any) => {
                expect(error).toEqual(new Error('Error in retrieving Speakers'))
            }
        )

        // eslint-disable-next-line @typescript-eslint/dot-notation
        const req = httpMock.expectOne(`${service['api']}/?page=0&results=9`)
        expect(req.request.method).toEqual('GET')

        req.flush(null, { status: 500, statusText: 'Server error' })
    })
})
