import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'

import { ConfirmModalComponent } from './confirm-modal.component'

describe('ConfirmModalComponent', () => {
    let component: ConfirmModalComponent
    let fixture: ComponentFixture<ConfirmModalComponent>

    beforeEach(waitForAsync(() => {
        void TestBed.configureTestingModule({
            declarations: [ConfirmModalComponent],
            providers: []
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(ConfirmModalComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
