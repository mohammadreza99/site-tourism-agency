import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../material.module';
import { BootstrapModule } from '../../bootstrap.module';
import { AgmCoreModule } from '@agm/core';

import {
    CardComponent,
    FooterAreaComponent,
    AgmComponent,
    PageHeaderComponent,
    PostComponent,
    RecentPostComponent,
    AddressComponent,
    SocialLinksComponent,
    ContactFormComponent,
    RegisterFormComponent,
    LoginFormComponent,
    MenuComponent,
    CardTypeBComponent,
    PostCardComponent,
    LightBoxComponent,
    CardTypeCComponent,
    LinedTitleComponent,
    MultirangeComponent
} from '.';






export const components = [
    CardComponent,
    FooterAreaComponent,
    AgmComponent,
    PageHeaderComponent,
    PostComponent,
    RecentPostComponent,
    AddressComponent,
    SocialLinksComponent,
    ContactFormComponent,
    RegisterFormComponent,
    LoginFormComponent,
    MenuComponent,
    CardTypeBComponent,
    PostCardComponent,
    LightBoxComponent,
    CardTypeCComponent,
    LinedTitleComponent,
    MultirangeComponent
]

@NgModule({
    declarations: [
        ...components,
    ],
    exports: [
        ...components
    ],
    imports: [
        CommonModule,
        BrowserModule,
        MaterialModule,
        BootstrapModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCM1DwtfrGyKFdqyOI77ASxBz4C5xjh8y8'
        })
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ComponentModule { }