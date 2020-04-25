import { Component, OnInit, Input } from '@angular/core';

import { SocialLink } from '../../../model/social-link';

@Component({
  selector: 'social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent implements OnInit {

  constructor() { }
  @Input() inline: boolean;
  @Input() width: number=32;
  @Input() socialLinks: SocialLink[];
  isImage: boolean;
  iconWidth: string;
  ngOnInit() {
    let imageExtensions = ['jpeg', 'jpg', 'png'];
    this.iconWidth = this.width + 'px';
    for (const item of this.socialLinks)
      for (const e of imageExtensions)
        if (item.icon.split('.').pop().includes(e))
          this.isImage = true;
        else
          this.isImage = false;
  }
}
