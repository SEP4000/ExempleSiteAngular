import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {RouterModule} from "@angular/router";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SingleFaceSnapComponent } from "./single-face-snap/single-face-snap.component";

const routes : Routes= [
    {path: 'facesnaps', component: FaceSnapListComponent},
    {path: '', component: LandingPageComponent},
    {path: 'facesnap/:id', component: SingleFaceSnapComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}