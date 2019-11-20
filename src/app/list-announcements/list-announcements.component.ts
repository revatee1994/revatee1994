import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../announcement.service';

@Component({
  selector: 'app-list-announcements',
  templateUrl: './list-announcements.component.html',
  styleUrls: ['./list-announcements.component.css']
})
export class ListAnnouncementsComponent implements OnInit {

  //declare variable to hold response and make it public to be accessible from components.html
  public announcements;
  //initialize the call using StudentService 
  constructor(private _myService: AnnouncementService) { }
  ngOnInit() {
    this.getAnnouncements();
  }
  //method called OnInit
  getAnnouncements() {
  this._myService.getAnnouncements().subscribe(
     //read data and assign to public variable students
      data => { this.announcements = data},
      err => console.error(err),
      () => console.log('finished loading')
    );
  }

  onDelete(AnnouncementId: string) {
    this._myService.deleteAnnouncement(AnnouncementId);
  }

}
