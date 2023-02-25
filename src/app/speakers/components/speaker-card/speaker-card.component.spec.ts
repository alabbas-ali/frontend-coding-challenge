import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'

import { SpeakerCardComponent } from './speaker-card.component'

describe('SpeakerCardComponent', () => {
    let component: SpeakerCardComponent
    let fixture: ComponentFixture<SpeakerCardComponent>

    beforeEach(waitForAsync(() => {
        void TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [SpeakerCardComponent]
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(SpeakerCardComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
