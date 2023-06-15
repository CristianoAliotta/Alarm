import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { takeWhile, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlarmService {

  constructor() { }

  countdownTimer(seconds: number): Observable<number> {
    return interval(1000).pipe(
      map((tick) => seconds - tick - 1),
      takeWhile((countdown) => countdown >= 0)
    );
  }


}
