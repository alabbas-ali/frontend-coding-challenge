import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

import { Speaker } from '../model/speaker'

import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

interface GetAllApiResponce {
    status: string // "success",
    data: Array<Speaker>
}

interface SaveApiResponce {
    status: string // "success",
    data: Speaker
}

interface DeleteApiResponce {
    status: string // "success",
    data: string
}

@Injectable({
    providedIn: 'root'
})
export class SpeakerService {
    private api = environment.API_HOST

    private defaultHeaders = new HttpHeaders()

    constructor(protected httpClient: HttpClient) {}

    /**
     * Get Speakers
     * Get a list of Speakers
     */
    public getAll(): Observable<Array<Speaker>> {
        return this.httpClient
            .get<GetAllApiResponce>(`${this.api}/speakers`)
            .pipe(
                map((responce: GetAllApiResponce): Array<Speaker> => {
                    if (responce.status !== 'success') {
                        throw new Error('Error in retrieving Speakers')
                    }
                    return responce.data
                }),
                catchError((err: any): Observable<Array<Speaker>> => {
                    throw new Error(
                        `Error in retrieving Speakers ${err.message}`
                    )
                })
            )
    }

    /**
     * Get Speaker
     * Get a specific Speaker by id.
     *
     * @param id id of the emplyee requested
     */
    public get(id: string): Observable<Speaker> {
        if (id === null || id === undefined) {
            throw new Error(
                'Required parameter id was null or undefined when calling getBlocking.'
            )
        }
        return this.httpClient
            .get<SaveApiResponce>(
                `${this.api}/speaker/${encodeURIComponent(String(id))}`
            )
            .pipe(
                map((responce: SaveApiResponce): Speaker => {
                    if (responce.status !== 'success') {
                        throw new Error(
                            `Error in retrieving Speaker with id = ${id}`
                        )
                    }
                    return responce.data
                }),
                catchError((err: any): Observable<Speaker> => {
                    throw new Error(
                        `Error in retrieving Speaker with id = ${id} , ${err.message}`
                    )
                })
            )
    }

    /**
     * Create or save Speaker
     *
     * @param speaker Speaker
     * @param additionalParams object containing any additional query parameters
     * @param selectAccepts optional closure that receives all possible values for the accept header and should return the desired one
     * @param selectConsumes optional closure that receives all possible values for the content type header and should return the desired one
     */
    public save(
        speaker: Speaker,
        additionalParams?: { [name: string]: any },
        selectAccepts?: (accepts: Array<string>) => string,
        selectConsumes?: (consumes: Array<string>) => string
    ): Observable<Speaker> {
        let queryParameters = new HttpParams()

        if (additionalParams) {
            for (const param in additionalParams) {
                queryParameters = queryParameters.append(
                    param,
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                    additionalParams[param]
                )
            }
        }

        let headers = this.defaultHeaders

        // to determine the Accept header
        const accepts: Array<string> = ['application/json']

        if (accepts.length > 0) {
            const selectedAcceptsHeader: string = selectAccepts
                ? selectAccepts(accepts)
                : accepts[0]
            headers = headers.set('Accept', selectedAcceptsHeader)
        }

        // to determine the Content-Type header
        const consumes: Array<string> = [
            'application/x-www-form-urlencoded; charset=UTF-8'
        ]

        if (consumes.length > 0) {
            const selectedConsumesHeader: string = selectConsumes
                ? selectConsumes(consumes)
                : consumes[0]
            headers = headers.set('Content-Type', selectedConsumesHeader)
        }

        if (speaker.id) {
            return this.httpClient
                .put<SaveApiResponce>(
                    `${this.api}/update/${encodeURIComponent(
                        String(speaker.id)
                    )}`,
                    speaker,
                    {
                        params: queryParameters,
                        headers
                    }
                )
                .pipe(
                    map((responce: SaveApiResponce): Speaker => {
                        if (responce.status !== 'success') {
                            throw new Error('Error in saving the Speaker')
                        }
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                        return (
                            JSON.parse(Object.keys(responce.data)[0]) ||
                            responce.data
                        )
                    })
                )
        } else {
            return this.httpClient
                .post<SaveApiResponce>(`${this.api}/create`, speaker, {
                    params: queryParameters,
                    headers
                })
                .pipe(
                    map((responce: SaveApiResponce): Speaker => {
                        if (responce.status !== 'success') {
                            throw new Error('Error in saving the Speaker')
                        }
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                        return (
                            JSON.parse(Object.keys(responce.data)[0]) ||
                            responce.data
                        )
                    })
                )
        }
    }

    /**
     * Delete Speaker
     */
    public delete(speaker: Speaker): Observable<boolean> {
        return this.httpClient
            .delete<DeleteApiResponce>(
                `${this.api}/delete/${encodeURIComponent(String(speaker.id))}`
            )
            .pipe(
                map((responce: DeleteApiResponce) => {
                    if (responce.status !== 'success') {
                        throw new Error('Error in deleting the Speaker')
                    }
                    return true
                })
            )
    }
}
