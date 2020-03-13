import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  blogs;

  title = 'TesteMarceloAngular8';

  constructor(private apiService: BlogService) { }

  ngOnInit() {

    this.apiService.getNews().subscribe((data) => {
      console.log(data)
      this.blogs = data;

    });
  }

}
