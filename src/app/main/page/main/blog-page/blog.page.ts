import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Post } from '../../../../model/post';
import { PostService } from '../../../../post.service';
import { MatListItem } from '@angular/material/list';
import { MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
export class Country {
  public id: string;
  public name: string;
}

@Component({
  selector: 'blog-page',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss']
})
export class BlogPage implements OnInit, AfterViewInit {

  constructor(private title: Title, private route: ActivatedRoute, private postService: PostService) { }
  courrentPosts: Post[] = [];
  gharre: string[] = [];
  countries = [];
  Europe: Country[] = [];
  Asia: Country[] = [];
  Africa: Country[] = [];
  America: Country[] = [];
  Australia: Country[] = [];
  recentPosts: Post[] = [];
  searchTerm = '';
  countryElements = new Array<ElementRef>();
  matExpansionPanel = new Array<MatExpansionPanel>();
  matPanelTitle = new Array<ElementRef>();

  @ViewChildren('c') c: QueryList<ElementRef>;
  @ViewChildren('m') m: QueryList<MatExpansionPanel>;
  @ViewChildren('g') g: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.countryElements = this.c.toArray();
    this.matExpansionPanel = this.m.toArray();
    this.matPanelTitle = this.g.toArray();
    this.countryElements[0].nativeElement.classList.add('text-orenge');
  }

  ngOnInit() {
    this.gharre = this.postService.gharre;
    this.title.setTitle(this.route.snapshot.data['title']);
    this.courrentPosts = this.postService.getPosts();
    this.countries = this.postService.countries;
    this.recentPosts = this.postService.getRecentPosts();
    for (let country of this.countries) {
      let c = new Country();
      switch (country.gharre) {
        case 'اروپا': {
          c.id = country.id
          c.name = country.name
          this.Europe.push(c)
          break;
        }
        case 'آسیا': {
          c.id = country.id
          c.name = country.name
          this.Asia.push(c)
          break;
        }
        case 'آفریقا': {
          c.id = country.id
          c.name = country.name
          this.Africa.push(c)
          break;
        }
        case 'آمریکا': {
          c.id = country.id
          c.name = country.name
          this.America.push(c)
          break;
        }
        case 'استرالیا': {
          c.id = country.id
          c.name = country.name
          this.Australia.push(c)
          break;
        }
      }
    }
  }

  onAllClick() {
    this.courrentPosts = this.postService.getPosts();

    for (const m of this.matPanelTitle)
      m.nativeElement.classList.remove('text-orenge');

    for (const c of this.countryElements) {
      c.nativeElement.classList.remove('bg-warning');
      c.nativeElement.classList.remove('text-dark');
    }
    for (const m of this.matExpansionPanel)  m.close()

    this.countryElements[0].nativeElement.classList.add('text-orenge');
  }
  onSearch(e) {
    this.courrentPosts = []
    for (const post of this.postService.getPosts())
      if (post.title.includes(e))
        this.courrentPosts.push(post)
  }
  onGharreClick(gharre, index) {
    this.courrentPosts = [];
    for (const c of this.countryElements) {
      c.nativeElement.classList.remove('bg-warning');
      c.nativeElement.classList.remove('text-dark');
    }
    this.countryElements[0].nativeElement.classList.remove('text-orenge');
    for (const post of this.postService.getPosts())
      for (let i = 0; i < this.countries.length; i++)
        if (post.country == this.countries[i].id && this.countries[i].gharre == gharre)
          this.courrentPosts.push(post)

    for (const m of this.matPanelTitle)
      m.nativeElement.classList.remove('text-orenge');

    this.matPanelTitle[index].nativeElement.classList.add('text-orenge');
  }
  onCountryClick(country, index) {

    this.searchTerm = "";
    this.courrentPosts = [];
    for (const post of this.postService.getPosts()) {
      if (post.country == country)
        this.courrentPosts.push(post)
    }
    this.matPanelTitle[index].nativeElement.classList.remove('text-orenge')
    for (const c of this.countryElements) {
      c.nativeElement.classList.remove('bg-warning');
      c.nativeElement.classList.remove('text-dark');
    }

    for (let i = 0; i < this.countries.length; i++)
      if (this.countries[i].id == country) {
        this.countryElements[i + 1].nativeElement.classList.add('bg-warning');
        this.countryElements[i + 1].nativeElement.classList.add('text-dark');
      }

  }

  getContries(gharre) {
    switch (gharre) {
      case 'اروپا': {
        return this.Europe
      }
      case 'آسیا': {
        return this.Asia
      }
      case 'آفریقا': {
        return this.Africa
      }
      case 'آمریکا': {
        return this.America
      }
      case 'استرالیا': {
        return this.Australia
      }
    }
  }

}
