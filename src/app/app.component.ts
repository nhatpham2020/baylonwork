import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { PatternService } from './services/pattern.service';

import { map } from 'rxjs/operators';
import { ProfileService } from './services/profile.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PatternService, ProfileService]
})
export class AppComponent implements OnInit {

  constructor(
    private afAuth: AngularFireAuth,
    private patternService: PatternService,
    private profileService: ProfileService
  ) {
    const buffer = [{ "key": "-LpJiETyfaqXB4r39xrG", "index": 1, "name": "00882eigfe111j7", "url": "https://firebasestorage.googleapis.com/v0/b/gunproject-64f84.appspot.com/o/pattern%2F00882eigfe111j7?alt=media&token=46aca3a5-2ec7-4a27-b87e-e4961d6bb118", "visibility": true }, { "key": "-Lpt5LSymnAlGfL7GVKf", "index": 4, "name": "10d3bg81hc5a5a", "url": "https://firebasestorage.googleapis.com/v0/b/gunproject-64f84.appspot.com/o/pattern%2F10d3bg81hc5a5a?alt=media&token=9d3120ef-a04b-4a6c-99ca-ee8d373d6977", "visibility": true }, { "key": "-Lpt7m_7ONWtOTNaI-0c", "index": 5, "name": "g8dj1e3629jed", "url": "https://firebasestorage.googleapis.com/v0/b/gunproject-64f84.appspot.com/o/pattern%2Fg8dj1e3629jed?alt=media&token=705dc70a-d097-4c24-bc4d-30df6c9e7eb7", "visibility": false }, { "key": "-LptCvduIe7H34jyTOAV", "index": 6, "name": "9a9idf8e47fj5", "url": "https://firebasestorage.googleapis.com/v0/b/gunproject-64f84.appspot.com/o/pattern%2F9a9idf8e47fj5?alt=media&token=0d6574d7-b10c-46f8-bdcf-060af4d331b9", "visibility": false }];
    const deploybuffer = [{"key":"-LqOzFn1D_Ro1QXmHN4F","index":21,"name":"jb6b13jg23e","url":"https://firebasestorage.googleapis.com/v0/b/gunproject-64f84.appspot.com/o/pattern%2Fjb6b13jg23e?alt=media&token=38766d68-4832-4ef5-8f0d-8dbd9aa94ca2","visibility":true},{"key":"-LqOzQYiKu7Bxx3oZq9r","index":24,"name":"acfce19h5a639","url":"https://firebasestorage.googleapis.com/v0/b/gunproject-64f84.appspot.com/o/pattern%2Facfce19h5a639?alt=media&token=17df519b-0ead-44c6-a1c7-44ea3b4e9e8a","visibility":true},{"key":"-LqOzfVRnxxUM2VC5sHm","index":27,"name":"c07c1a1dec7g","url":"https://firebasestorage.googleapis.com/v0/b/gunproject-64f84.appspot.com/o/pattern%2Fc07c1a1dec7g?alt=media&token=e420d753-d06d-498b-b998-205b27d22f18","visibility":true},{"key":"-LqOzmODpnJqWufvBASn","index":28,"name":"368i93hg5j4dc","url":"https://firebasestorage.googleapis.com/v0/b/gunproject-64f84.appspot.com/o/pattern%2F368i93hg5j4dc?alt=media&token=ec2836ab-11d6-455a-9b35-65b1a6b540a6","visibility":true},{"key":"-LqP16yAIlGd04RlROVq","index":29,"name":"9efe6104d8f7","url":"https://firebasestorage.googleapis.com/v0/b/gunproject-64f84.appspot.com/o/pattern%2F9efe6104d8f7?alt=media&token=57529bad-5610-442b-9530-689c2d8ba051","visibility":true},{"key":"-LqP1YW4Wek2ZGjq02De","index":30,"name":"j36db81f5e9j","url":"https://firebasestorage.googleapis.com/v0/b/gunproject-64f84.appspot.com/o/pattern%2Fj36db81f5e9j?alt=media&token=452afaf9-f6f7-42c3-b6f2-e3245937ed98","visibility":true},{"key":"-LqP1d4eW23Tex7o71Zo","index":32,"name":"1g7dbcdf1ce73","url":"https://firebasestorage.googleapis.com/v0/b/gunproject-64f84.appspot.com/o/pattern%2F1g7dbcdf1ce73?alt=media&token=8fc969b7-6a63-4943-8b92-ca1da636dcbd","visibility":true},{"key":"-LqP1kMXqBLCNUiTklbj","index":34,"name":"0h0g86219c41a","url":"https://firebasestorage.googleapis.com/v0/b/gunproject-64f84.appspot.com/o/pattern%2F0h0g86219c41a?alt=media&token=2525ac58-b06e-4608-a9e4-eb5e4cf0ee36","visibility":true},{"key":"-LzC5zukmwTB5VTMRAU_","index":39,"name":"b59dja968digb","url":"https://firebasestorage.googleapis.com/v0/b/gunproject-64f84.appspot.com/o/pattern%2Fb59dja968digb?alt=media&token=38ba466e-342f-4dbb-9bda-b78af97f83c5","visibility":true}];
    if (!!!localStorage.getItem('patternsData')) {
      localStorage.setItem('patternsData', JSON.stringify(buffer));
    }
    if (!!!localStorage.getItem('deployedPatternData')) {
      localStorage.setItem('deployedPatternData', JSON.stringify(deploybuffer));
    }
    if (!!!localStorage.getItem('membership')) {
      localStorage.setItem('membership', 'goatgunfree');
    }
    this.afAuth.authState
    .subscribe(user => {
      console.log(user);
      this.patternService.getMyPatternList(user.uid).snapshotChanges().pipe(
            map(changes =>
              changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
            )
          ).subscribe(profile => {
            console.log(profile.length);
            localStorage.setItem('mypatterns', JSON.stringify(profile));
        });
      this.profileService.getProfile(user.uid).snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      ).subscribe(profile => {
        localStorage.setItem('profile', JSON.stringify(profile[0]));
      });

    });
    this.patternService.getPatternList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(profile => {
      console.log(profile.length);
      localStorage.setItem('patternsData', JSON.stringify(profile));
    });
    //console.log(JSON.parse(localStorage.getItem('user')));

  }

  ngOnInit() {

  }
}



