import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
import { Store } from '@ngrx/store'
import { of } from 'rxjs'

import { SpeakersState } from '../../store/speakers.state'
import { SpeakersComponent } from './speakers.component'

/**
 * ToDo To Make this test runs we need to create a mode helper to test the store
 * https://medium.com/@bo.vandersteene/mock-your-ngrx-store-on-the-easy-way-68c66d4bea63
 */
class StoreMock {
    // How we did it before
    select = jasmine.createSpy().and.returnValue(of({}))
    dispatch = jasmine.createSpy()
}

describe('SpeakersComponent', () => {
    let component: SpeakersComponent
    let fixture: ComponentFixture<SpeakersComponent>
    let store: Store<SpeakersState>

    beforeEach(waitForAsync(() => {
        void TestBed.configureTestingModule({
            declarations: [SpeakersComponent],
            providers: [{ provide: Store, useClass: StoreMock }]
        }).compileComponents()
    }))

    beforeEach(() => {
        store = TestBed.get(Store)
        fixture = TestBed.createComponent(SpeakersComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
