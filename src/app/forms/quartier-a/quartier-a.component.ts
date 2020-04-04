import { Component, OnInit } from "@angular/core";

import { ThemePalette } from "@angular/material/core";
declare var $: any;

@Component({
  selector: "app-quartier-a",
  templateUrl: "./quartier-a.component.html",
  styleUrls: ["./quartier-a.component.scss"],
})
export class QuartierAComponent implements OnInit {
  // variables
  popoverContent: string = "Unobstructed water view";
  type: string;
  livingArea: number;
  quality: string;
  nbWashrooms: string;
  level: string;

  basement: boolean;
  waterView: boolean;
  indivise: boolean;
  garage: boolean;
  noisySt: boolean;
  secondPrkg: boolean;
  privateOutdoor: boolean;
  estimate: string;

  formatter;
  localStr: string;

  color: ThemePalette = "primary";

  constructor() {}

  ngOnInit() {
    this.formatter = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    });

    this.clearForm();
  }
  getLevel(option: string) {
    switch (option) {
      case "above":
        return 0;
      case "half":
        return 0.5 * -82823.4;
      case "basement":
        return 1 * -82823.4;

      default:
        break;
    }
  }
  getQuality(option: number) {
    switch (option) {
      case 1:
        return 35762;
      case 2:
        return 2 * 35762;
      case 3:
        return 3 * 35762;
      case 4:
        return 4 * 35762;
      case 5:
        return 5 * 35762;
      case 6:
        return 6 * 35762;
      case 7:
        return 7 * 35762;
      case 8:
        return 8 * 35762;
      case 9:
        return 9 * 35762;
      case 10:
        return 10 * 35762;

      default:
        break;
    }
  }

  computeEstimate() {
    this.estimate = this.formatter.format(
      Math.round(
        this.livingArea * 3280.776 +
          this.getQuality(Number(this.quality)) +
          this.getLevel(this.level) +
          (Number(this.nbWashrooms) - 1) * 77042.11 +
          Number(this.waterView) * 123594 +
          Number(this.indivise) * -47426.5 +
          Number(this.garage) * 32524.31 +
          Number(this.noisySt) * -39936.4 +
          Number(this.secondPrkg) * 60206.06
      )
    );
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
    $("#collapseExample").collapse("show");
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight + 200);
    }, 500);

    this.computeEstimate();
    console.log("estimate", this.estimate);
    // console.log(
    //   "area",
    //   this.livingArea,
    //   "quality",
    //   this.finishQuality,
    //   "waterview",
    //   this.waterView
    // );
  }

  clearForm() {
    $("#collapseExample").collapse("hide");
    // reset all itputs
    this.type = "condo";
    this.livingArea = null;
    this.quality = "1";
    this.nbWashrooms = "1";
    this.level = "above";
    this.privateOutdoor = false;
    this.waterView = false;
    this.indivise = false;
    this.garage = false;
    this.noisySt = false;
    this.secondPrkg = false;
  }
  getTotal() {
    if (this.checkForm()) this.showResult();
    else window.scrollTo(0, 0);
  }
}
