import { Component, ElementRef, ViewChild } from '@angular/core';
import { AlarmService } from '../alarm.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @ViewChild('countdownInput', { static: false }) countdownInput!: ElementRef;


  constructor(private alarmService: AlarmService) {

  }

  startCountdown(): void {
    const seconds = Number(this.countdownInput.nativeElement.value);
    if (seconds > 0 && seconds <= 60) {
      this.alarmService.countdownTimer(seconds).subscribe(
        undefined,
        undefined,
        () => {
          alert('Countdown complete!');
        }
      );
    } else if (seconds > 60) {
      alert('Error: Maximum 60 seconds allowed');
    }
  }
}

