import { Component, OnInit } from '@angular/core';
declare let $: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    $('.navbar .nav li a').css({'color': 'grey'});
    $('.navbar .nav li a').click(function() {
      $(this).css({'color': 'blue'});
    })
  }
  title = 'app';
}
