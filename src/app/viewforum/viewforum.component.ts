import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Http, Response} from '@angular/http';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-viewforum',
  templateUrl: './viewforum.component.html',
  styleUrls: ['./viewforum.component.scss']
})
export class ViewforumComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private http: Http) {}

  category: string[];
  objectKeys: string[];

  ngOnInit() {
    this.http.get('assets/data/forums.json').subscribe((response: Response) => {
      // Read the result field from the JSON response.
      let data = response.json();
      this.category = data['results'].category;
      this.objectKeys = Object.keys(this.category);
    });
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      let userId = params['id'];
      if(userId) {

      }
      else {

      }
    });
  }
}
