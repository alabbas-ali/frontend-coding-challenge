import { Component, OnInit } from '@angular/core'

import { LayoutModule } from '@@layout/layout.module'

@Component({
    standalone: true,
    selector: 'app-about',
    imports: [LayoutModule],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
