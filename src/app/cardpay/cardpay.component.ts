import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "./../auth/auth.service";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { CustomerService } from "../services/customer.service";
import { Customer } from "../../model/customer";
import {
  StripeService,
  Elements,
  Element as StripeElement,
  ElementsOptions
} from "ngx-stripe";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";

@Component({
  selector: "app-cardpay",
  templateUrl: "./cardpay.component.html",
  styleUrls: ["./cardpay.component.css"]
})
export class CardpayComponent implements OnInit {
  elements: Elements;
  membership: Customer;
  card: StripeElement;
  pricingPlan: string;
  // optional parameters
  elementsOptions: ElementsOptions = {
    locale: "en"
  };

  stripeTest: FormGroup;

  constructor(
    private http: Http,
    private fb: FormBuilder,
    private stripeService: StripeService,
    private authService: AuthService,
    private customerService: CustomerService,
    private modalRef: BsModalRef
  ) {
    this.getCustomersList();
  }

  ngOnInit() {
    this.stripeTest = this.fb.group({
      name: ["", [Validators.required]]
    });
    this.stripeService.elements(this.elementsOptions).subscribe(elements => {
      this.elements = elements;
      // Only mount the element the first time
      if (!this.card) {
        this.card = this.elements.create("card", {
          style: {
            base: {
              iconColor: "#666EE8",
              color: "#31325F",
              lineHeight: "40px",
              fontWeight: 300,
              fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
              fontSize: "18px",
              "::placeholder": {
                color: "#CFD7E0"
              }
            }
          }
        });
        this.card.mount("#card-element");
      }
    });
  }

  changeMembership(event: MouseEvent, plan: string) {
    const name = this.stripeTest.get("name").value;

    this.stripeService.createToken(this.card, { name }).subscribe(obj => {
      if (obj) {
        console.log("Token is --> ", obj.token.id);
        if (!!this.membership) {
          this.http
            .post("/changeplan", {
              membership: this.membership,
              plan: plan,
              userid: this.authService.userdata().uid,
              email: this.authService.userdata().email,
              token: obj.token.id
            })
            .subscribe(
              res => {
                console.log(res.json());
                const { planName } = res.json();
                window.alert(`You subscribed successfully into ${planName}`);
              },
              err => {
                console.log("The error is ", err);
                window.alert(err);
              }
            );
        } else {
          this.http
            .post("/payme", {
              plan: plan,
              userid: this.authService.userdata().uid,
              email: this.authService.userdata().email,
              token: obj.token.id
            })
            .subscribe(
              res => {
                console.log(res.json());
                const { planName } = res.json();
                window.alert(`You subscribed successfully into ${planName}`);
              },
              err => {
                console.log("The error is ", err);
                window.alert(err);
              }
            );
        }
      } else {
        // Error creating the token
        console.log("Error comes while creating token.");
      }
    });
    return this.stopEvent(event);
  }

  selectPlan(event: MouseEvent, plan: string) {
    document.getElementById("goatgunfree").classList.remove("best-price");
    document.getElementsByName("goatgunfree")[0].innerHTML = "Select";
    document.getElementById("goatgunbasic").classList.remove("best-price");
    document.getElementsByName("goatgunbasic")[0].innerHTML = "Select";
    document.getElementById("goatgunpro").classList.remove("best-price");
    document.getElementsByName("goatgunpro")[0].innerHTML = "Select";
    document.getElementById(plan).classList.add("best-price");
    document.getElementsByName(plan)[0].innerHTML = "Selected";
    if (this.membership) {
      const { planName } = this.membership;
      document
        .getElementById(planName.toLowerCase())
        .classList.remove("best-price");
      document.getElementsByName(planName.toLowerCase())[0].innerHTML =
        "Current Plan";
    }
    this.pricingPlan = plan;
    return this.stopEvent(event);
  }

  getCustomersList() {
    this.customerService
      .getCustomersList()
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      )
      .subscribe(customers => {
        const uid = this.authService.userdata().uid;
        const membership = customers.filter(customer => customer.key === uid);
        console.log(membership);
        if (!!membership[0]) {
          this.membership = membership[0];
          const goatGunFree = <HTMLInputElement>(
            document.getElementsByName("goatgunfree")[0]
          );
          goatGunFree.disabled = false;
          goatGunFree.innerHTML = "Select";
          const goatGunBasic = <HTMLInputElement>(
            document.getElementsByName("goatgunbasic")[0]
          );
          goatGunBasic.disabled = false;
          goatGunBasic.innerHTML = "Select";
          const goatGunPro = <HTMLInputElement>(
            document.getElementsByName("goatgunpro")[0]
          );
          goatGunPro.disabled = false;
          goatGunPro.innerHTML = "Select";
          const { planName } = this.membership;
          const currentPlan = <HTMLInputElement>(
            document.getElementsByName(planName.toLowerCase())[0]
          );
          currentPlan.disabled = true;
          currentPlan.innerHTML = "Current Plan";
        } else {
          this.membership = null;
        }
      });
  }

  stopEvent(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
}
