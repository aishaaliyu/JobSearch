import {Component, OnInit} from '@angular/core';
import {ApicallsService} from '../../service/apicalls.service';
import {Job} from '../../model/job';
import {Router} from '@angular/router';
import {JobSetGetService} from '../../service/job-set-get.service';
import {JobSearch} from '../../model/job-search';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  jobs: Job[] = this.jobset.jobs;
  error_message = '';
  model = new JobSearch('');
  visible = false;

  constructor(public apiProvider: ApicallsService, public router: Router, private jobset: JobSetGetService) {
  }

  // Initialize component
  ngOnInit() {
  }

  // On form submit
  formSubmit() {
    this.apiProvider.getJobsResults(this.model.search)
      .subscribe((jobs) => {
          this.jobset.jobs = jobs;
          this.jobs = this.jobset.jobs;
        },
        (error) => {
          this.error_message = error.toString();
        });
  }

}
