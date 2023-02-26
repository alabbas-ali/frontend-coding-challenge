import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'

import { Speaker, SpeakerPage } from '../model/speaker'

import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class SpeakerService {
    private api = environment.API_HOST

    constructor(protected httpClient: HttpClient) {}

    /**
     * Get Speakers
     * Get a list of Speakers
     */
    public getSpeakers(
        page?: number,
        results?: number
    ): Observable<Array<Speaker>> {
        let queryParameters = new HttpParams()
        if (page) {
            queryParameters = queryParameters.set('page', page.toString())
        } else {
            queryParameters = queryParameters.set('page', '0')
        }
        if (results) {
            queryParameters = queryParameters.set('results', results.toString())
        } else {
            queryParameters = queryParameters.set('results', '9')
        }
        return this.httpClient
            .get<SpeakerPage>(`${this.api}/`, {
                params: queryParameters
            })
            .pipe(
                map(
                    (responce: SpeakerPage): Array<Speaker> => responce.results
                ),
                catchError((err: any): Observable<Array<Speaker>> => {
                    throw new Error(
                        `Error in retrieving Speakers ${err.message}`
                    )
                })
            )
    }
}
