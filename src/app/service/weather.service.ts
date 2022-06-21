import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {
  }

  public getWeather(city): Observable<any> {
    return this.http.get<any>(
      `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&appid=78a07164952e030a671b9350f648cd70`
    );
  }
}
