import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  // ! pour ne pas initialiser
  buttonText!: string;

  constructor(private faceSnapService: FaceSnapsService) { }

  ngOnInit(){
    this.buttonText = 'Oh snap!';
  }

  onSnap(){
    if(this.buttonText === 'Oh snap!'){
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unsnap!';
    }else{
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh snap!';
    }
  }
}
