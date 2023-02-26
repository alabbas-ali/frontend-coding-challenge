import { SharedModule } from '@@shared/shared.module'
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { LayoutComponent } from './layout.component'

describe('LayoutComponent', () => {
    let component: LayoutComponent
    let fixture: ComponentFixture<LayoutComponent>

    beforeEach(waitForAsync(() => {
        void TestBed.configureTestingModule({
            imports: [SharedModule, RouterTestingModule],
            declarations: [LayoutComponent]
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
