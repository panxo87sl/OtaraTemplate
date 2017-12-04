import { Component, OnInit } from '@angular/core';
import { Upload } from 'app/services/uploads/shared/upload';
import { UploadService } from 'app/services/uploads/shared/upload.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  //uploads: Observable<Upload[]>;
  uploads: Observable<any[]>;
  showSpinner = true;
  constructor(private upSvc: UploadService) { }

  ngOnInit() {
    this.uploads = this.upSvc.getUploads();
    //this.uploads.subscribe(() => this.showSpinner = false);
  }

}
