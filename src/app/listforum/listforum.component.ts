import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-listforum',
  templateUrl: './listforum.component.html',
  styleUrls: ['./listforum.component.scss']
})
export class ListforumComponent implements OnInit {

  constructor(private _dataService: DataService) {}
    
        forumList: Array<any>;

  ngOnInit() {
    
        this._dataService.getForumList().subscribe(res => this.forumList = res);
        console.log(this.forumList);
      }

}
