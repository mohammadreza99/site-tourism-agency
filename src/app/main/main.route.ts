import { Routes } from '@angular/router';

import {
    Main,
    HomePage,
    RegistrationPage,
    ContactUsPage,
    AboutUsPage,
    BlogPage,
    PostDetailPage,
    TermsConditionsPage,
    NotFoundPage,
    ToursPage,
    TourDetailsPage,
    MadarekDetailsPage,
} from './page';

export const mainRoute: Routes = [
    {
        path: '',
        component: Main,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomePage,
                data: {
                    title: 'صفحه اصلی'
                }
            },
            {
                path: 'tours',
                children: [
                    {
                        path: '',
                        component: ToursPage,
                        data: {
                            title: 'تور ها'
                        },
                    },
                    {
                        path: 'details',
                        component: TourDetailsPage,
                        data: {
                            title: 'توضیحات تور'
                        }
                    }
                ]
            },
            {
                path: 'blog',
                children: [
                    {
                        path: '',
                        component: BlogPage,
                        data: {
                            title: 'مقاله'
                        },
                    },
                    {
                        path: 'details',
                        component: PostDetailPage,
                        data: {
                            title: 'توضیحات مقاله'
                        }
                    }
                ]
            },
            {
                path: 'madarek',
                component: MadarekDetailsPage,
                data: {
                    title: 'ثبت نام / ورود به سایت'
                }
            },
            {
                path: 'registration',
                component: RegistrationPage,
                data: {
                    title: 'ثبت نام / ورود به سایت'
                }
            },
            {
                path: 'about-us',
                component: AboutUsPage,
                data: {
                    title: 'درباره ما'
                }
            },
            {
                path: 'contact-us',
                component: ContactUsPage,
                data: {
                    title: 'تماس با ما'
                }
            },
            {
                path: 'terms-conditions',
                component: TermsConditionsPage,
                data: {
                    title: 'قوانین و شرایط'
                }
            },
            {
                path: '**',
                redirectTo: 'not-found',
                pathMatch: 'full'
            },
            {
                path: 'not-found',
                component: NotFoundPage,
                data: {
                    title: 'صفحه یافت نشد...'
                }
            }
        ]

    }
]