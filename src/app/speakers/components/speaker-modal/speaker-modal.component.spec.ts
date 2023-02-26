/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SharedModule } from '@@shared/shared.module'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog'

import {
    SpeakerModalComponent,
    SpeakerModalData
} from './speaker-modal.component'
import { emptySpeakersList } from '../../model/empty-speakers'

describe('SpeakerModalComponent', () => {
    let component: SpeakerModalComponent
    let fixture: ComponentFixture<SpeakerModalComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SharedModule, MatDialogModule],
            declarations: [SpeakerModalComponent],
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {
                        speaker: emptySpeakersList[0]
                    } as SpeakerModalData
                }
            ]
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(SpeakerModalComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })

    it('should display the speaker name', () => {
        const nameElement = fixture.nativeElement.querySelector(
            '.mat-mdc-dialog-title span'
        )
        expect(nameElement.textContent.trim()).toEqual(
            `${emptySpeakersList[0].name.title} ${emptySpeakersList[0].name.first} ${emptySpeakersList[0].name.last}`
        )
    })

    it('should display the speaker image', () => {
        const imageElement = fixture.nativeElement.querySelector('img')
        expect(imageElement.src).toEqual(emptySpeakersList[0].picture.large)
    })

    it('should display the speaker email', () => {
        const emailElement = fixture.nativeElement.querySelector(
            '.mat-mdc-dialog-content .flex:nth-child(1) span'
        )
        expect(emailElement.textContent.trim()).toEqual(
            emptySpeakersList[0].email
        )
    })

    it('should display the speaker phone number', () => {
        const phoneElement = fixture.nativeElement.querySelector(
            '.mat-mdc-dialog-content .flex:nth-child(2) span'
        )
        expect(phoneElement.textContent.trim()).toEqual(
            emptySpeakersList[0].phone
        )
    })

    it('should display the speaker cell phone number', () => {
        const cellElement = fixture.nativeElement.querySelector(
            '.mat-mdc-dialog-content .flex:nth-child(3) span'
        )
        expect(cellElement.textContent.trim()).toEqual(
            emptySpeakersList[0].cell
        )
    })

    it('should display the speaker date of birth', () => {
        const dobElement = fixture.nativeElement.querySelector(
            '.mat-mdc-dialog-content .flex:nth-child(4) span'
        )
        expect(dobElement.textContent.trim()).toEqual('Sep 2, 1968')
    })

    it('should display the speaker location', () => {
        const locationElement = fixture.nativeElement.querySelector(
            '.mat-mdc-dialog-content .flex:nth-child(5) span'
        )
        expect(locationElement.textContent.trim()).toEqual(
            'Kalgoorlie, New South Wales'
        )
    })
})
