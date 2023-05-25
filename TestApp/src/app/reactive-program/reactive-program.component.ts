import { Component, OnInit } from '@angular/core';
import { filter, from, fromEvent, map, of, range } from 'rxjs';

@Component({
  selector: 'app-reactive-program',
  templateUrl: './reactive-program.component.html',
  styleUrls: ['./reactive-program.component.css']
})
export class ReactiveProgramComponent implements OnInit {

  constructor() { }
// Data source is an observable
// newNumbers is an observable
// of() -> Emit any number of values in asequence
newNumbers1$=of(1,2,3,4,5,6,7,8,9,10);
// range() ->Emit the range of numbers in sequence\
newNumbers2$=range(1,10);
// from() -> Emit the array ,promise/iterable
numbers$=from([1,2,3,4,5,6,7,8,9,10]);
// ajax() -> Fetch the url and emit the response
// newApi$=ajax({ url:'http://httpbin.org/delay/1',method:'POST',headers:{'Content-Type':'application/text',body:'Hello'}});


// -------------------------fromEvent--------------------------
// const clickEvent$=fromEvent(document.getElementById('demo'),'click');

// ------------------ Subscribing Process--------------
numbers:any;
val1:any;
ngOnInit(): void {
  }
  // Subscribe the data using observer
observer={
  // Receive and process the observable
  next:((num:number)=>{ 
    this.numbers.push(num); 
    this.val1 += num ;}),
  error:(err:any)=>console.log(err),
  complete:()=>{ console.log('Observation is completed')}
};

// this.numbers$.subscribe(observer);


//-------------------------Operations------------------
// filter − Enable to filter the data stream using callback function.
filterFn=filter((num:number)=>num>5);
// const filteredNumbers$ = filterFn(numbers$);

// map - Enables to map the data stream using callback function and to change the data stream itself.
mapFn = map( (num : number) => num + num ); 
//Pipe - Enable two or more operators to be combined.
processedNumbers$ = this.numbers$.pipe(this.filterFn, this.mapFn); 
}



