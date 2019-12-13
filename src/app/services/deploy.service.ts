import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { DeployVar } from 'src/model/deployVar';

@Injectable({
  providedIn: 'root'
})

export class DeployService {

   private dbPath = '/Deploy';

  deployRef: AngularFireList<DeployVar> = null;

  constructor(private db: AngularFireDatabase) {
    this.deployRef = this.db.list(this.dbPath);
  }

  createDeploy(deploy: DeployVar): void {
    this.deployRef.push(deploy).then(() => {
      window.alert('Deployment Successful!');
    
    })
    .catch(error => console.log(error));
  }

  updateDeploy(key: string, value: any): Promise<void> {
    return this.deployRef.update(key, value);
  }

  deleteDeploy(key: string): Promise<void> {
    return this.deployRef.remove(key);
  }

  getdeployList(): AngularFireList<DeployVar> {
    return this.deployRef;
  }

  deleteAll(): Promise<void> {
    return this.deployRef.remove();
  }
}
