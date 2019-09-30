import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ns-addplaca',
  templateUrl: './addplaca.component.html',
  styleUrls: ['./addplaca.component.css'],
  moduleId: module.id,
})
export class AddplacaComponent implements OnInit {
  minDate: Date = new Date(1975, 0, 29);
  maxDate: Date = new Date(2045, 4, 12);
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onDatePickerLoaded(args) {
    // const datePicker = args.object as DatePicker;
}

onDateChanged(args) {
    console.log("Date New value: " + args.value);
    console.log("Date value: " + args.oldValue);
}

onDayChanged(args) {
    console.log("Day New value: " + args.value);
    console.log("Day Old value: " + args.oldValue);
}

onMonthChanged(args) {
    console.log("Month New value: " + args.value);
    console.log("Month Old value: " + args.oldValue);
}

onYearChanged(args) {
    console.log("Year New value: " + args.value);
    console.log("Year Old value: " + args.oldValue);
}

submit(){
  this.router.navigateByUrl('/home')
}
}
