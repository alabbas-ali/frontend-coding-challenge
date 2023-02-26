/* eslint-disable @typescript-eslint/unbound-method */
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialog } from '@angular/material/dialog'
import { PageEvent } from '@angular/material/paginator'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Store } from '@ngrx/store'

import { LayoutModule } from '@@layout/layout.module'
import { SharedModule } from '@@shared/shared.module'

import { Speaker } from '../../model/speaker'
import { SpeakerModalComponent } from '../../components/speaker-modal/speaker-modal.component'
import { SpeakersState } from '../../store/speakers.state'
import { SpeakersComponent } from './speakers.component'

import { emptySpeakersList } from '../../model/empty-speakers'
import { SpeakersQuery } from '../../store/speakers.actions'

import { of } from 'rxjs'

describe('SpeakersComponent', () => {
    let component: SpeakersComponent
    let fixture: ComponentFixture<SpeakersComponent>
    let mockStore: jasmine.SpyObj<Store<SpeakersState>>
    let mockDialog: jasmine.SpyObj<MatDialog>

    const mockSpeakers: Speaker[] = emptySpeakersList

    beforeEach(async () => {
        mockStore = jasmine.createSpyObj<Store<SpeakersState>>('Store', [
            'dispatch',
            'select'
        ])
        mockStore.select.and.returnValue(of([]))
        mockDialog = jasmine.createSpyObj<MatDialog>('MatDialog', ['open'])

        await TestBed.configureTestingModule({
            imports: [
                SharedModule,
                BrowserAnimationsModule,
                RouterTestingModule,
                LayoutModule
            ],
            declarations: [SpeakersComponent],
            providers: [
                { provide: MatDialog, useValue: mockDialog },
                { provide: Store, useValue: mockStore }
            ]
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(SpeakersComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })

    it('should dispatch a SpeakersQuery action on initialization', () => {
        expect(mockStore.dispatch).toHaveBeenCalledWith(
            new SpeakersQuery(0, component.pageSize)
        )
    })

    it('should open a SpeakerModalComponent when onSpeakerView is called', () => {
        const speaker = mockSpeakers[0]
        component.onSpeakerView(speaker)
        expect(mockDialog.open).toHaveBeenCalledWith(SpeakerModalComponent, {
            minWidth: '50%',
            data: { speaker }
        })
    })

    it('should dispatch a SpeakersQuery action when onPaginateChange is called', () => {
        const event = { pageIndex: 1, pageSize: 18 } as PageEvent
        component.onPaginateChange(event)
        expect(component.pageIndex).toBe(1)
        expect(component.pageSize).toBe(18)
        expect(mockStore.dispatch).toHaveBeenCalledWith(
            new SpeakersQuery(1, 18)
        )
    })
})
