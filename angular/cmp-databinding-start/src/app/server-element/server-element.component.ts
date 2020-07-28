import { Component, OnInit, Input, ViewEncapsulation, 
  OnChanges, SimpleChanges, DoCheck, AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy, 
  ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, 
OnChanges, DoCheck, AfterContentInit, 
AfterContentChecked, AfterViewChecked,
AfterViewInit, OnDestroy {
  @Input() element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef; // heading is a local refernce used in html file 
  @ContentChild('contentParagraph') paragraph: ElementRef;  

  constructor() {
    console.log('Constructor called');
   }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
   }
  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('Text Content ' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph' + this.paragraph.nativeElement.textContent);
  }
  ngDoCheck() {
    console.log('ngDoCheck called');
   }
  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log('Text Content of paragraph ' + this.paragraph.nativeElement.textContent);
   }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
   }
   ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('Text Content ' + this.header.nativeElement.textContent);
   }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
   }
  ngOnDestroy() {
    console.log('ngOnDestroy called');
   }
}
