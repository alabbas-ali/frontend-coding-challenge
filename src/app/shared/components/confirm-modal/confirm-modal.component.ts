import { Component } from '@angular/core'
import { Subject } from 'rxjs'

@Component({
    selector: 'app-confirm-modal',
    templateUrl: './confirm-modal.component.html',
    styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {
    confirmation: Subject<boolean> = new Subject()

    heading!: string
    content!: string

    constructor() {}

    onContirm() {
        this.confirmation.next(true)
    }
}
