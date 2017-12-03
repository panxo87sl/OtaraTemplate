import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
//import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PanelService } from "app/services/panel.service";
import { ContactService } from "app/services/contact.service";

import { Upload } from 'app/services/uploads/shared/upload';
import { UploadService } from 'app/services/uploads/shared/upload.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.scss']
})
export class CreatepostComponent implements OnInit {
  currentUpload: Upload;
  
  showText: Boolean = true;
  public editorContent = `<h3>I am Example content</h3>`;
  public editorOptions = {
    placeholder: "insert content..."
  };

  form: FormGroup;
  post: any = {};
  selectedFiles: FileList|null;

  constructor(private upSvc: UploadService,private router: Router, private _myCommunicationService: PanelService, fb: FormBuilder, private _contactService: ContactService) {

    // Subscribe to the service event
    _myCommunicationService.changeEmitted$.subscribe(myMessage => {
      this.showText = myMessage;
    });

    this.form = fb.group({
      editor: [''],
      titulo: ['']
    });

  }
  //@ViewChild('editor') editor: QuillEditorComponent
  ngOnInit() {
    //this.form.controls['editor'].patchValue(`<p><span style="color: rgb(102, 185, 102);">asdasd</span></p>`)
    this.showText = !this.showText;
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  patchValue() {
    //let file = this.selectedFiles.item(0)
    console.log(this.form.controls['editor'].value);
    this.post = { titulo: this.form.controls['titulo'].value, contenido: this.form.controls['editor'].value, file : this.selectedFiles.item(0) };
    //this._contactService.createPost(this.post)
    //  .subscribe(newWork => {
    //    console.log("Succes!");
    //  });
    //this._myCommunicationService.emitChange(true);
    //this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.post)
    this.router.navigate(['/panel']);
  }
  
  createPost() {
    this.showText = !this.showText;
    this.router.navigateByUrl('/create_post');
  }

  goBack(): void {
    // Emit your event with message
    this._myCommunicationService.emitChange(true);
    this.router.navigate(['/panel']);

  }

  
  logChange($event: any) {
    console.log($event);
  }
}