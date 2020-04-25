import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'lined-title',
  templateUrl: './lined-title.component.html',
  styleUrls: ['./lined-title.component.scss']
})
export class LinedTitleComponent implements OnInit {

  constructor(private san: DomSanitizer) { }
  @Input() title: string;
  @Input() titleColor: string = '#333';
  @Input() subTitle: string;
  @Input() subTitleColor: string = '#6c757d';
  @Input() titleSize: number = 34;
  @Input() subTitleSize: number = 18;
  @Input() lineColor: string = '#333';
  @Input() lineHeight: number = 8;
  @Input() lineThickness: number = 2;
  @Input() lineStyle: string = 'solid';
  @Input() textAlign: string = 'center';
  @Input() textPadding: number = 15;
  @Input() double: boolean = true;
  finallStyle: SafeStyle;

  ngOnInit() {
    let style =
      '--title-color:' + this.titleColor + ';' +
      '--subTitle-color:' + this.subTitleColor + ';' +
      '--title-size:' + this.titleSize + 'px;' +
      '--subTitle-size:' + this.subTitleSize + 'px;' +
      '--line-color:' + this.lineColor + ';' +
      '--line-style:' + this.lineStyle + ';' +
      '--text-align:' + this.textAlign + ';';

    if (this.textAlign == 'right'){
      style = style + '--text-padding-right:0' + ';--text-padding-left:' + this.textPadding + 'px;--display-before:none;';

    }
    else if (this.textAlign == 'left'){
      style = style + '--text-padding-left:0' + ';--text-padding-right:' + this.textPadding + 'px;--display-after:none;';

    }
    else
      style = style + '--text-padding-left:' + this.textPadding + 'px;' + '--text-padding-right:' + this.textPadding + 'px;';

    if (!this.double)
      style = style +
        '--line-height:' + 0 + ';' +
        '--line-border-top:' + 0 + ';' +
        '--line-border-bottom:' + this.lineThickness + 'px;';
    else
      style = style +
        '--line-height:' + this.lineHeight + 'px;' +
        '--line-border-top:' + this.lineThickness + 'px;' +
        '--line-border-bottom:' + this.lineThickness + 'px;';

    this.finallStyle = this.san.bypassSecurityTrustStyle(style);
  }

}
