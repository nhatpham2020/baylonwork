export class UploadFile {
    key: string;
    name: string;
    url: string;
    file: any;
    constructor(file: any) {
      this.file = file;
    }
}
