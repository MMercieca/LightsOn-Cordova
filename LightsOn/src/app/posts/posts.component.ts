import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {

  posts = [
    { url: 'https://www.mutuallyhuman.com/blog/three-tries-with-nstimer/',
      title: 'Three Tries with NSTimer',
      image: 'assets/three-tries.jpg',
      summary: 'Three Tries with NSTimer I wanted to try the a new running program 30-20-10. My usual running app does a lot of things well but it’s not great at measuring intervals in seconds instead of minutes. That’s when the programmer’s curse struck. I wanted...' },
    { url: 'https://www.mutuallyhuman.com/blog/summer-of-ember-always-call-this-_super/ ', 
      title: 'Always Call Super',
      image: 'assets/always-call-super.png',
      summary: 'I learned this the hard way. It was a simple enough task: I had two lists of items and I wanted to display the differences between them. I figured that once I had the list of differences, I should be able to iterate through them in my template: {{#each differences}}...' },
    { url: 'https://www.mutuallyhuman.com/blog/summer-of-ember-debugging-ember/',
      title: 'Debugging Ember',
      image: 'assets/debugging-ember.png',
      summary: 'Debugging Ember Ember has a powerful developer toolset. Often a console.log or debugger statement are enough to get by, but Ember’s tools allow for a rich and interactive way of finding out what is wrong and how to fix it. Handlebars Has {{debugger}} and {{log}}...' },
    { url: 'https://www.mutuallyhuman.com/blog/webdriveragent-getting-started-with-automated-ios-testing/', 
      title: 'WebDriverAgent: Getting Started with Automated iOS Testing',
      image: 'assets/webdriveragent.jpg',
      summary: 'The iOS simulator does not provide CoreMotion data. I wanted to visualize the jitter in the accelerometer and capture it on my computer for analysis. Not being able to simulate that, I needed a way of hooking my phone up to the computer and programmatically...' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
