import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {WeatherModel} from '../model/weather.model';

@Injectable()
export class WeatherServiceService {

  constructor(private http: HttpClient) {}

  public getWeather(name): Observable<WeatherModel> {
    return this.http.get<WeatherModel>(
      `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${name}&appid=78a07164952e030a671b9350f648cd70`
    );
  }
}
