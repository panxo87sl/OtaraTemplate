import { Component, OnInit } from '@angular/core';
import { Upload } from 'app/services/uploads/shared/upload';
import { UploadService } from 'app/services/uploads/shared/upload.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  //uploads: Observable<Upload[]>;
  //uploads: Observable<any[]>;
  uploadsObservable: Observable<any[]>;
  showSpinner = true;
  constructor(private upSvc: UploadService) { }

  ngOnInit() {
    this.uploadsObservable = this.upSvc.getUploadsLimit();
   // this.coursesObservable = this.getCourses('/uploads');
    //this.uploads.subscribe(() => this.showSpinner = false);
  }

}
