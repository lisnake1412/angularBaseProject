import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {
  Observable,
  of,
  tap,
  map,
  BehaviorSubject,
  fromEvent,
  mergeMap,
  interval,
  take,
  switchMap,
} from 'rxjs';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnInit, AfterViewInit {
  countIncrease: number = 0;
  intervalState: string = 'Not Start';
  ofOperatorDemoData: string[] = [];
  subjectData = [1, 2, 3, 4, 5];
  currentBehaviorSubject = [1, 2, 3, 4, 5];
  mergeMapDemoData = new Observable();
  @ViewChild("mergeMapDemo") elementDemo: any;
  constructor() {
    const observable: any = new Observable(function subcribe(observer) {
      let count = 1;
      const id = setInterval(() => {
        console.log(`${count}s `);
        observer.next(count);
        ++count;
      }, 1000);
      setTimeout(() => {
        observer.complete();
      }, 3000);
      return function unscrible() {
        setTimeout(() => {
          clearInterval(id);
        }, 7000);
      };
    });
    const subscription = observable.subscribe({
      next: (value: any) => {
        this.countIncrease = value;
        this.intervalState = 'Running';
      },
      error: (error: any) => {
        error(error);
      },
      complete: () => {
        this.intervalState = 'Completed';
      },
    });

    setTimeout(() => {
      subscription.unsubscribe();
      this.intervalState = 'Unscribed';
    }, 5000);

    // const ofOperatorDemo: Observable<any> = of([1, 2, 3, 4, 5]).pipe(
    //   map((value: any) => {
    //     return value.map((values: any) => `${values}`);
    //   })
    // );
    // ofOperatorDemo.subscribe((value) => {
    //   this.ofOperatorDemoData = value;
    // });

    // const subjectDemo = new Observable((observer: any) => {
    //   observer.next('hello 1');
    //   setTimeout(() => {
    //     observer.next('hello 2');
    //   }, 2000);
    // });
    // subjectDemo.subscribe((value) => {
    //   console.log(value);
    // });
  }
  numberList = of([1, 2, 3, 4, 5]).pipe(tap((value) => console.log(value)));

  ngOnInit(): void {
    this.numberList.subscribe();
  }
  mergeMapDataArray:any = []
  ngAfterViewInit(): void {
    
    this.mergeMapDemoData = fromEvent(
      this.elementDemo.nativeElement,
      'click'
    ).pipe(mergeMap((value) => interval(1000).pipe(take(10))));

    this.mergeMapDemoData.subscribe(value => {
      console.log(this.mergeMapDataArray)
      return this.mergeMapDataArray.push(value)
    });
  }

  currentNumber = new BehaviorSubject(null);
  changeBehaviorNumber(value: any) {
    const id = setTimeout(() => {
      this.currentNumber.next(value + this.currentNumber.value); //currentNumber.value luôn lưu giá trị mới nhất của subject
    }, 500);
  }
}

// switchMap() sẽ unsubscribe vào Inner Observable hiện tại khi một Inner Observable mới được return. Nói cách khác, switchMap() sẽ chỉ giữ 1 và chỉ 1 Subscription bất cứ lúc nào

// BehaviorSubject sẽ luôn luôn trả về trạng thái hiện tại (mới nhất) của Obversable

//mergeMap() sẽ subscribe Inner Observable mới mà không unsubscribe Outer Observable đang chạy. Giống như hợp nhất hai luồng dữ liệu
