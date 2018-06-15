import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  image: string;

  constructor(private camera: Camera){}

  pictureFromCamera(){
    const opts: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      saveToPhotoAlbum: true
    }

    this.capturePhoto(opts)
  }

  async capturePhoto(options: CameraOptions){
    try {

      const result = await this.camera.getPicture(options)

      this.image = `data:image/jpeg;base64,${result}`
    
    } catch (error) {

      console.error(error);
      
    }
  }
}
