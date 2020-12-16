import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';
    public config = {
    ImageName: 'Some image',
    AspectRatios: ["4:3", "16:9"],
    ImageUrl: 'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg',
    ImageType: 'image/jpeg'
  }

  public close() {

  }

  public getEditedFile(file: File) {

  }
}
