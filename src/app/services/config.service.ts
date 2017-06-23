import {Injectable} from "@angular/core";
/**
 * Created by ionut on 23-6-2017.
 */

@Injectable()
export class ConfigService
{
  _mainUrl: string;
  constructor(){
       this._mainUrl = "http://localhost:2106/api/";
  }
  getApiUrl(){
      return this._mainUrl;

// another URl besides the base one beacuse photos are stored in wwwroot in VS Code
  }
  getPhotoUrl(){
      return this._mainUrl.replace('api/' , '');
  }

}
