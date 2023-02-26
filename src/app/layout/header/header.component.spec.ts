import { SharedModule } from '@@shared/shared.module'
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { AppHeaderComponent } from './header.component'

describe('AppHeaderComponent', () => {
    let component: AppHeaderComponent
    let fixture: ComponentFixture<AppHeaderComponent>

    beforeEach(waitForAsync(() => {
        void TestBed.configureTestingModule({
            imports: [SharedModule, RouterTestingModule],
            declarations: [AppHeaderComponent]
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(AppHeaderComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
