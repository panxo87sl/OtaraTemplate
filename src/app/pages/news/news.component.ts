import { Component, OnInit } from '@angular/core';
import { Upload } from 'app/services/uploads/shared/upload';
import { UploadService } from 'app/services/uploads/shared/upload.service';
import { Observable } from 'rxjs/Observable';
import { Post } from 'app/classes/post';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  //uploadsObservable: Observable<any[]>;
  uploadsObservable: Array<Post>;
  showSpinner = true;
  posts;
  keys: string[];
  constructor(private upSvc: UploadService) { }

  ngOnInit() {
    //this.uploadsObservable = this.upSvc.getUploadsLimit();
    
    //this.upSvc.getUploadsLimit().subscribe(res => {
    //  this.uploadsObservable = res.reverse();
    //  console.log(this.uploadsObservable);
    //});
    this.upSvc.getUploadsLimit();
    //.subscribe(res => {
   //   this.posts = res;    
   //    this.keys = Object.keys(this.posts).reverse();
   //  });
    console.log(this.upSvc.getUploadsLimit());
  }

}
