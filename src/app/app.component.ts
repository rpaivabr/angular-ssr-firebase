import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'heed-site';
  data = {
    name: 'Michael Jordan',
    bio: 'Former baseball player',
    image: 'https://goo.gl/hfvwfq',
    url: 'https://www.heedsolutions.com.br'
  };

  constructor(private meta: Meta) {}

  ngOnInit() {
    this.meta.addTags([
      { property: 'og:title', content: this.data.name },
      { property: 'og:description', content: this.data.bio },
      { property: 'og:image', content: this.data.image },
      { property: 'og:url', content: this.data.image },
      { name: 'twitter:title', content: this.data.name },
      { name: 'twitter:description', content: this.data.bio },
      { name: 'twitter:image', content: this.data.image },
      { name: 'twitter:card', content: 'summary_large_image' },
    ]);
  }
}
