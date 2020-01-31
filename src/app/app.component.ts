import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { PatternService } from './services/pattern.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PatternService]
})
export class AppComponent implements OnInit {

  constructor(
    private afAuth: AngularFireAuth,
    private patternService: PatternService
  ) {
    const buffer = [{ "key": "-LpJiETyfaqXB4r39xrG", "index": 1, "name": "00882eigfe111j7", "url": "https://firebasestorage.googleapis.com/v0/b/gunproject-64f84.appspot.com/o/pattern%2F00882eigfe111j7?alt=media&token=46aca3a5-2ec7-4a27-b87e-e4961d6bb118", "visibility": true }, { "key": "-Lpt5LSymnAlGfL7GVKf", "index": 4, "name": "10d3bg81hc5a5a", "url": "https://firebasestorage.googleapis.com/v0/b/gunproject-64f84.appspot.com/o/pattern%2F10d3bg81hc5a5a?alt=media&token=9d3120ef-a04b-4a6c-99ca-ee8d373d6977", "visibility": true }, { "key": "-Lpt7m_7ONWtOTNaI-0c", "index": 5, "name": "g8dj1e3629jed", "url": "https://firebasestorage.googleapis.com/v0/b/gunproject-64f84.appspot.com/o/pattern%2Fg8dj1e3629jed?alt=media&token=705dc70a-d097-4c24-bc4d-30df6c9e7eb7", "visibility": false }, { "key": "-LptCvduIe7H34jyTOAV", "index": 6, "name": "9a9idf8e47fj5", "url": "https://firebasestorage.googleapis.com/v0/b/gunproject-64f84.appspot.com/o/pattern%2F9a9idf8e47fj5?alt=media&token=0d6574d7-b10c-46f8-bdcf-060af4d331b9", "visibility": false }];
    const deploybuffer = [{ "key": "-LptlGkaQ3kNB6sDaUDc", "index": 5, "name": "708hj8b4758e2", "url": "https://firebasestorage.googleapis.com/v0/b/gunproject-64f84.appspot.com/o/pattern%2F708hj8b4758e2?alt=media&token=eca6ef69-cbdf-4228-9160-0cf7c6982cf8", "visibility": false }, { "key": "-LpzMCqnCx00REoAbp4h", "index": 6, "name": "977063gah0127", "url": "https://firebasestorage.googleapis.com/v0/b/gunproject-64f84.appspot.com/o/pattern%2F977063gah0127?alt=media&token=0b4bc7c9-a92b-496d-a736-598c560bba49", "visibility": true }, { "key": "-Lq6vY2FtiLhyorszg4x", "index": 8, "name": "dja6eb119fc2e", "url": "https://firebasestorage.googleapis.com/v0/b/gunproject-64f84.appspot.com/o/pattern%2Fdja6eb119fc2e?alt=media&token=8db119a4-456c-4b93-965a-72be0a065497", "visibility": true }, { "key": "-Lq6wt3H0BS7oquihUCO", "index": 10, "name": "d6bh4b351gc65", "url": "https://firebasestorage.googleapis.com/v0/b/gunproject-64f84.appspot.com/o/pattern%2Fd6bh4b351gc65?alt=media&token=289fdae4-5352-4635-8e4d-1fd21ccd0e0d", "visibility": false }, { "key": "-LqA8B9ZcrrzWBEFYmcg", "index": 11, "name": "5hicif3bic334", "url": "https://firebasestorage.googleapis.com/v0/b/gunproject-64f84.appspot.com/o/pattern%2F5hicif3bic334?alt=media&token=4dcbed2b-ac10-40f0-aefd-303bff72c23c", "visibility": true }, { "key": "-LqA8IDYy_GurN8mT9EN", "index": 12, "name": "1gc5be2cigfg", "url": "https://firebasestorage.googleapis.com/v0/b/gunproject-64f84.appspot.com/o/pattern%2F1gc5be2cigfg?alt=media&token=186bf334-eb66-4c79-9713-d8f75535c4f6", "visibility": false }, { "key": "-LqA8pQqnhye_jZ96QcI", "index": 13, "name": "7252bi0a3hgg", "url": "https://firebasestorage.googleapis.com/v0/b/gunproject-64f84.appspot.com/o/pattern%2F7252bi0a3hgg?alt=media&token=ac1ac3a1-6a71-4424-a0b0-a3841a3f19ce", "visibility": true }, { "key": "-LqAKkTmQ6t2R7jug644", "index": 14, "name": "hghb02i91139", "url": "https://firebasestorage.googleapis.com/v0/b/gunproject-64f84.appspot.com/o/pattern%2Fhghb02i91139?alt=media&token=03351ecf-6c25-46eb-9556-9752d44d0c01", "visibility": true }, { "key": "-LqAt0K86HvJajAhHWtD", "index": 15, "name": "h85cc0c85a67a", "url": "https://firebasestorage.googleapis.com/v0/b/gunproject-64f84.appspot.com/o/pattern%2Fh85cc0c85a67a?alt=media&token=790f2382-20db-436a-8d50-1eeb8b210e93", "visibility": true }, { "key": "-LqAx2rOBirZl_y4H2jh", "index": 16, "name": "jb988eb2de74d", "url": "https://firebasestorage.googleapis.com/v0/b/gunproject-64f84.appspot.com/o/pattern%2Fjb988eb2de74d?alt=media&token=c5e3657b-af00-46e3-88dc-aa71206d1ec5", "visibility": false }]
    if (!!!localStorage.getItem('patternsData')) {
      localStorage.setItem('patternsData', JSON.stringify(buffer));
    }
    if (!!!localStorage.getItem('deployedPatternData')) {
      localStorage.setItem('deployedPatternData', JSON.stringify(deploybuffer));
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
