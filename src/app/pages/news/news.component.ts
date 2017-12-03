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
  uploads: Observable<Upload[]>;
  showSpinner = true;
  constructor(private upSvc: UploadService) { }

  ngOnInit() {
    this.uploads = this.upSvc.getUploads();
    //this.uploads.subscribe(() => this.showSpinner = false);
  }

}
