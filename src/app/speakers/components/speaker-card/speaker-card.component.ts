import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy
} from '@angular/core'
import { Speaker } from '../../model/speaker'

@Component({
    selector: 'speaker-card',
    templateUrl: './speaker-card.component.html',
    styleUrls: ['./speaker-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakerCardComponent implements OnInit {
    @Input() speaker!: Speaker
    @Output() view = new EventEmitter<Speaker>()

    constructor() {}

    ngOnInit() {}

    onView() {
        this.view.emit(this.speaker)
    }
}
