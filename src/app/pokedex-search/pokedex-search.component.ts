import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-pokedex-search',
  templateUrl: './pokedex-search.component.html',
  styleUrls: ['./pokedex-search.component.scss']
})
export class PokedexSearchComponent implements AfterViewInit {
  @Output() searchTerm = new EventEmitter<string>();
  @ViewChild('search') search!: ElementRef;
  constructor() { }


  ngAfterViewInit(): void {
    fromEvent(this.search.nativeElement,'keyup')
            .pipe(
                filter(Boolean),
                debounceTime(200),
                distinctUntilChanged(),
                tap((text) => {
                  this.searchTerm.emit(this.search.nativeElement.value);
                })
            )
            .subscribe();
  }

}
