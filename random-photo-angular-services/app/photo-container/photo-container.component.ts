import { Component, OnInit } from '@angular/core';
import { FetchPhotoService } from '../fetch-photo.service';



@Component({
  selector: 'app-photo-container',
  templateUrl: './photo-container.component.html',
  styleUrls: ['./photo-container.component.css']
})
export class PhotoContainerComponent implements OnInit {

  image:any; 

  constructor(private getPhoto : FetchPhotoService) { 
    this.getPhoto.fetchPhoto().subscribe((data) => {this.image = data.urls.regular})
  }

  ngOnInit(): void {
  }



  

}
