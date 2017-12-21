import { Component, OnInit } from '@angular/core';
import { Post } from 'app/classes/post';
import { UploadService } from 'app/services/uploads/shared/upload.service';
import { PagerService } from 'app/services/pager.service';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.scss']
})
export class EditpostComponent implements OnInit {
  //posts: Array<Post>;
  posts;
  keys: string[];
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  constructor(private upSvc: UploadService, private pagerService: PagerService) { }

  ngOnInit() {
    var arr = [];
    this.upSvc.getUploads()
    .subscribe(res => {
     // this.posts = res.reverse();
     this.posts = res;     
     //this.posts = this.posts.reverse();
      //console.log(this.posts);
      console.log(JSON.stringify(this.posts,null,4));
      this.keys = Object.keys(this.posts);
      console.log(this.keys);
      //console.log(JSON.stringify(this.posts[this.keys[6]].titulo))
      //let algo = 
      // initialize to page 1
      this.setPage(1);
    });
    
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.posts.length, page);

    // get current page of items
   // this.pagedItems = this.posts.slice(this.pager.startIndex, this.pager.endIndex + 1);
   //this.pagedItems = this.posts.toString().slice(this.pager.startIndex, this.pager.endIndex + 1);
   this.pagedItems = this.keys.slice(this.pager.startIndex, this.pager.endIndex + 1);;
  }

}
