import { Component, OnInit } from "@angular/core";
import { ThemePalette } from "@angular/material/core";

declare var $: any;
@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.scss"],
})
export class PaymentComponent implements OnInit {
  // variables
  popoverContent: string = "Unobstructed water view";
  popoverContent1: string = "Practicaly unlivable";
  popoverContent2: string = "Old carpet, Old wallpaper, Old vinyl";
  popoverContent3: string = "Parquet flooring, old melamine, basic faucets";
  popoverContent4: string =
    "Wood floor, melamine cabinets, melamine countertops";
  popoverContent5: string = "Wood floor, melamine cabinets, stone countertops";
  popoverContent6: string =
    "Wood floor, thermoformed or wood cabinets, kitchen island";
  popoverContent7: string =
    "Custom kitchen with island, open shower, high quality windows";
  popoverContent8: string =
    "Custom kitchen, high quality tiles, wall toilets, designer faucets";
  popoverContent9: string =
    "Designer's kitchen, luxury appliances, very high quality flooring and tiles";
  popoverContent10: string = "Incredible layout with incredible products";
  popoverContent12: string =
    "A terrace is a balcony that is over 5 foot wide, and at least 35 sq/foot";

  type: string;
  livingArea: number;
  quality: string;
  nbWashrooms: string;
  nbBedrooms: string;
  level: string;

  alley: boolean;
  eastPapineau: boolean;
  indivise: string;
  garage: boolean;
  rooftop: boolean;
  terrasse: boolean;
  railway: boolean;
  noisySt: boolean;
  secondPrkg: boolean;

  heritageBldg: boolean;
  luxuryBldg: boolean;
  estimate: string;

  formatter;
  localStr: string;

  color: ThemePalette = "primary";

  leSaviezVous: any[] = [
    { icon: "rooftop", price: 76508, desc: "Terrasse sur le toit" },
    { icon: "garage", price: 22064, desc: "Garage" },
    { icon: "bathtub", price: 26451, desc: "Salle de bain" },
  ];

  constructor() {}

  ngOnInit() {
    this.formatter = new Intl.NumberFormat("fr-CA", {
      style: "currency",
      currency: "CAD",
    });

    this.clearForm();

    this.leSaviezVous.forEach((item) => {
      item.price = this.formatter.format(item.price);
    });
  }

  getBedrooms(option: number) {
    switch (option) {
      case 1:
        return 0;
      case 2:
        return 36027;
      case 3:
        return 103314;

      default:
        break;
    }
  }

  info(event) {
    console.log(event.clientX / window.innerWidth);
  }
  getQuality(option: number) {
    switch (option) {
      case 1:
        return 38039;
      case 2:
        return 2 * 38039;
      case 3:
        return 3 * 38039;
      case 4:
        return 4 * 38039;
      case 5:
        return 5 * 38039;
      case 6:
        return 6 * 38039;
      case 7:
        return 7 * 38039;
      case 8:
        return 8 * 38039;
      case 9:
        return 9 * 38039;
      case 10:
        return 10 * 38039;

      default:
        break;
    }
  }
  getLevel(option: string) {
    switch (option) {
      case "above":
        return 0;
      case "half":
        return 0.5 * -14971;
      case "basement":
        return 1 * -44197;

      default:
        break;
    }
  }

  computeEstimate() {
    this.estimate = this.formatter.format(Math.round(this.livingArea / 226.42));
  }

  checkForm() {
    if (this.livingArea == null) {
      document.getElementById("areaInput").classList.add("border-danger");
      return false;
    } else {
      document.getElementById("areaInput").classList.remove("border-danger");
      return true;
    }
  }

  showResult() {
    this.computeEstimate();
    $("#collapseExample").collapse("show");
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 500);
  }

  showError() {
    $("#errorMessage").collapse("show");
  }

  hideError() {
    $("#errorMessage").collapse("hide");
  }

  clearForm() {
    $("#collapseExample").collapse("hide");
    // reset all itputs
    this.type = "condo";
    this.livingArea = null;
    this.quality = "1";
    this.nbBedrooms = "1";
    this.nbWashrooms = "1";
    this.level = "above";
    this.eastPapineau = false;
    this.rooftop = false;
    this.terrasse = false;
    this.railway = false;
    this.alley = false;
    this.indivise = "0";
    this.garage = false;
    this.noisySt = false;
    this.heritageBldg = false;
    this.luxuryBldg = false;
  }
  getTotal() {
    this.hideError();

    if (this.checkForm()) this.showResult();
    else this.showError();
  }
}
