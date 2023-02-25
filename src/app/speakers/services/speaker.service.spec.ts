import { TestBed, getTestBed } from '@angular/core/testing'
import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing'

import { SpeakerService } from './speaker.service'
import { Speaker } from '../model/speaker'
import { emptySpeakersList } from '../model/empty-speakers'

describe('SpeakerService', () => {
    let injector: TestBed
    let service: SpeakerService
    let httpMock: HttpTestingController

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [SpeakerService]
        })
        injector = getTestBed()

        service = TestBed.inject(SpeakerService)
        httpMock = injector.get(HttpTestingController)
    })

    afterEach(() => {
        httpMock.verify()
    })

    it('should be created', () => {
        expect(service).toBeTruthy()
    })

    describe('#getSpeakers', () => {
        it('should return an Observable<Array<Speakers>>', () => {
            const dummySpeakers: Array<Speaker> = emptySpeakersList

            service.getSpeakers(1, 3).subscribe((speakers) => {
                expect(speakers.length).toBe(3)
                expect(speakers).toEqual(dummySpeakers)
            })

            const req = httpMock.expectOne('/api/?page=1&results=3')
            expect(req.request.method).toBe('GET')
            req.flush(dummySpeakers)
        })
    })
})
