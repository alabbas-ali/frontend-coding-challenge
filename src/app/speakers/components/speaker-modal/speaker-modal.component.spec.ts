import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
import { MDBModalRef } from 'angular-bootstrap-md'

import { SpeakerModalComponent } from './speaker-modal.component'

describe('SpeakerModalComponent', () => {
    let component: SpeakerModalComponent
    let fixture: ComponentFixture<SpeakerModalComponent>

    beforeEach(waitForAsync(() => {
        void TestBed.configureTestingModule({
            declarations: [SpeakerModalComponent],
            providers: [MDBModalRef]
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(SpeakerModalComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
