/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { LayoutModule } from '@@layout/layout.module'

import { AboutComponent } from './about.component'

describe('AboutComponent', () => {
    let component: AboutComponent
    let fixture: ComponentFixture<AboutComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LayoutModule, RouterTestingModule],
            declarations: []
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(AboutComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })

    it('should contain a title with the text "Frontend Code Challange"', () => {
        const titleElement = fixture.nativeElement.querySelector('h1')
        expect(titleElement.textContent).toContain('Frontend Code Challange')
    })

    it('should contain a section with class "container mx-auto"', () => {
        const sectionElement = fixture.nativeElement.querySelector(
            'section.container.mx-auto'
        )
        expect(sectionElement).toBeTruthy()
    })

    it('should contain a list with at least one item', () => {
        const listElement = fixture.nativeElement.querySelector('ul')
        expect(listElement).toBeTruthy()

        const listItems = listElement.querySelectorAll('li')
        expect(listItems.length).toBeGreaterThan(0)
    })
})
