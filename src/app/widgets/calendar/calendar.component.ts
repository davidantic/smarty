import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  cDate: Date = new Date();
  currentDate = new Date();

  previousMonth() {
    this.cDate = new Date(this.cDate.getFullYear(), this.cDate.getMonth() - 1, 1);
  }

  nextMonth() {
    this.cDate = new Date(this.cDate.getFullYear(), this.cDate.getMonth() + 1, 1);
  }

  getDaysInMonth(): number[] {
    const year = this.cDate.getFullYear();
    const month = this.cDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, index) => index + 1);
  }



}
