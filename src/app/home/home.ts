import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  public getjsondata: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=b336ea43d1dcd6e076ccea118f84fd27&units=metric'
    ).subscribe({
      next: (data) => {
        this.getjsondata = data;
        console.log(data); // debugging
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }
}