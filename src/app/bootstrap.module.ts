import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { RatingModule } from 'ngx-bootstrap/rating'

@NgModule({
    imports: [
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        CollapseModule.forRoot(),
        BsDropdownModule.forRoot(),
        ButtonsModule.forRoot(),
        RatingModule.forRoot(),
        BrowserModule,
        FormsModule
    ],
    exports: [
        TooltipModule,
        ModalModule,
        CollapseModule,
        BsDropdownModule,
        ButtonsModule,
        BrowserModule,
        RatingModule,
        FormsModule
    ],
})
export class BootstrapModule { }