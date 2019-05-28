import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import {Job} from '../model/job';

@Injectable()
export class ApicallsService {

  url =
    'https://us-south.functions.cloud.ibm.com/api/v1/web/dcf60ca3-b95d-4f3f-8aaa-5a825bfdfabd/default/job-search-api.json';

  constructor(public http: Http) {}
  // make a http call to google's distance  matrix API and return and return an observable

  // Get careerjet api response
  getJobsResults(search): Observable<Job[]> {
    return this.http.get( `${this.url}?keywords=${search}`).map((response: Response) => <Job[]> response.json().jobs);
  }

}
