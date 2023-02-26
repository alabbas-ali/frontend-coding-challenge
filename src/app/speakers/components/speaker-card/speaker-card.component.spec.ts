/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { SpeakerCardComponent } from './speaker-card.component'
import { Speaker } from '../../model/speaker'
import { emptySpeakersList } from '../../model/empty-speakers'
import { SharedModule } from '@@shared/shared.module'

describe('SpeakerCardComponent', () => {
    let component: SpeakerCardComponent
    let fixture: ComponentFixture<SpeakerCardComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SharedModule],
            declarations: [SpeakerCardComponent]
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(SpeakerCardComponent)
        component = fixture.componentInstance
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })

    it('should display the speaker name', () => {
        const speaker: Speaker = emptySpeakersList[0]
        component.speaker = speaker
        fixture.detectChanges()
        const nameElement =
            fixture.nativeElement.querySelector('mat-card-title')
        expect(nameElement.textContent).toContain('Mr Marvin Hanson')
    })

    it('should emit the view event when view button is clicked', () => {
        const speaker: Speaker = emptySpeakersList[0]
        component.speaker = speaker
        fixture.detectChanges()
        spyOn(component.view, 'emit')
        const viewButton = fixture.nativeElement.querySelector('button')
        viewButton.click()
        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(component.view.emit).toHaveBeenCalledWith(speaker)
    })
})
