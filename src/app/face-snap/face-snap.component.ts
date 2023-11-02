import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap! :FaceSnap;


  buttonTitle!:string;

  ngOnInit(): void {
      
      this.buttonTitle= "Oh Snap !!"
  }
  onSnap(){
    if(this.buttonTitle === "Oh Snap !!" ){
      this.faceSnap.snaps++;
      this.buttonTitle = "Oops, unSnap!!"

    }
    else{
      this.faceSnap.snaps--;
      this.buttonTitle ="Oh Snap !!";

    }
  }

}
