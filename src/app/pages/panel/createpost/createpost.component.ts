import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
//import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.scss']
})
export class CreatepostComponent implements OnInit {
  showText: Boolean = true;
  public editorContent = `<h3>I am Example content</h3>`;
  public editorOptions = {
    placeholder: "insert content..."
  };

  form: FormGroup;
  post: any = {};
  constructor(private router: Router, fb: FormBuilder) {
    
        // Subscribe to the service event
  //      _myCommunicationService.changeEmitted$.subscribe(myMessage => {
  //        this.showText = myMessage;
  //      });
    
        this.form = fb.group({
          editor: [''],
          titulo: ['']
        });
    
      }
//      @ViewChild('editor') editor: QuillEditorComponent
      ngOnInit() {
        //this.form.controls['editor'].patchValue(`<p><span style="color: rgb(102, 185, 102);">asdasd</span></p>`)
      }
    
      patchValue() {
        console.log(this.form.controls['editor'].value);
        this.post = { titulo: this.form.controls['titulo'].value, contenido: this.form.controls['editor'].value };
    //    this._contactService.createPost(this.post)
    //      .subscribe(newWork => {
    //        console.log("Succes!");
    //      });
      }
    
      createPost() {
        this.showText = !this.showText;
        this.router.navigateByUrl('/create_post');
      }
    
      goBack(): void {
        // Emit your event with message
      //  this._myCommunicationService.emitChange(true);
        this.router.navigate(['/panel']);
    
      }
    
      logChange($event: any) {
        console.log($event);
      }

}
