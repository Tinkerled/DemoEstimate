import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuartierAComponent } from "./forms/quartier-a/quartier-a.component";
import { QuartierBComponent } from "./forms/quartier-b/quartier-b.component";
import { QuartierCComponent } from "./forms/quartier-c/quartier-c.component";
import { HomeComponent } from "./pages/home/home.component";
import { QuartierDComponent } from "./forms/quartier-d/quartier-d.component";
import { QuartierEComponent } from "./forms/quartier-e/quartier-e.component";
import { QuartierFComponent } from "./forms/quartier-f/quartier-f.component";
import { QuartierGComponent } from "./forms/quartier-g/quartier-g.component";
import { QuartierHComponent } from "./forms/quartier-h/quartier-h.component";
import { QuartierIComponent } from "./forms/quartier-i/quartier-i.component";
import { QuartierJComponent } from "./forms/quartier-j/quartier-j.component";
import { QuartierKComponent } from "./forms/quartier-k/quartier-k.component";
import { PaymentComponent } from "./forms/payment/payment.component";
import { QuartierLComponent } from "./forms/quartier-l/quartier-l.component";
import { AboutComponent } from "./pages/about/about.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "", redirectTo: "plateau-mont-royal", pathMatch: "full" },
      {
        path: "plateau-mont-royal",
        component: QuartierBComponent,
        data: { title: "Plateau Mont-Royal" }, // Le titre du quartier est pris d'ici pour etre utiliser dans le homepage
      },
      {
        path: "mileend",
        component: QuartierLComponent,
        data: { title: "Mile-End" },
      },
      {
        path: "ville-mont-royal-house",
        component: QuartierCComponent,
        data: { title: "Petite-Patrie" },
      },
      {
        path: "HoMa",
        component: QuartierFComponent,
        data: { title: "Hochelaga Maisonneuve" },
      },
      {
        path: "rosemont",
        component: QuartierGComponent,
        data: { title: "Rosemont" },
      },
      {
        path: "ville-mont-royal-house",
        component: QuartierCComponent,
        data: { title: "Villeray" },
      },
    ],
  },
  // { path: "a-propos", component: AboutComponent },
  // { path: "saint-henri-condo", component: QuartierAComponent },
  // { path: "plateau", component: QuartierBComponent },
  // { path: "ville-mont-royal-house", component: QuartierCComponent },
  // { path: "bois-franc-house", component: QuartierDComponent },
  // { path: "vieux-montreal", component: QuartierEComponent },
  // { path: "HoMa", component: QuartierFComponent },
  // { path: "rosemont", component: QuartierGComponent },
  // { path: "dorval", component: QuartierHComponent },
  // { path: "lachine", component: QuartierIComponent },
  // { path: "pierrefond", component: QuartierJComponent },
  // { path: "ndg", component: QuartierKComponent },
  // { path: "payment", component: PaymentComponent },
  // { path: "mileend", component: QuartierLComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}