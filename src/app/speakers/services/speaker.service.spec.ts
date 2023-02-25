import { TestBed, getTestBed } from '@angular/core/testing'
import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing'

import { SpeakerService } from './speaker.service'
import { Speaker } from '../model/speaker'

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

    describe('#getAll', () => {
        it('should return an Observable<Array<Speakers>>', () => {
            const dummySpeakers: Array<Speaker> = [
                {
                    id: '',
                    speaker_name: '..',
                    speaker_salary: 0.0,
                    speaker_age: 0,
                    profile_image: '/assets/loading_profile.gif'
                },
                {
                    id: '',
                    speaker_name: '..',
                    speaker_salary: 0.0,
                    speaker_age: 0,
                    profile_image: '/assets/loading_profile.gif'
                },
                {
                    id: '',
                    speaker_name: '..',
                    speaker_salary: 0.0,
                    speaker_age: 0,
                    profile_image: '/assets/loading_profile.gif'
                }
            ]

            service.getAll().subscribe((speakers) => {
                expect(speakers.length).toBe(3)
                expect(speakers).toEqual(dummySpeakers)
            })

            const req = httpMock.expectOne('/api/v1/speakers')
            expect(req.request.method).toBe('GET')
            req.flush(dummySpeakers)
        })
    })
})
