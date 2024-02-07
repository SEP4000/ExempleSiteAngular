import { Component, OnInit} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;
  // ! pour ne pas initialiser
  buttonText!: string;

  constructor(private faceSnapService: FaceSnapsService,
              private route: ActivatedRoute) { }

  ngOnInit(){
    this.buttonText = 'Oh snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
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
