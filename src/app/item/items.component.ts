import { Component, OnInit } from "@angular/core";
import InAppBrowser from 'nativescript-inappbrowser';

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {

    constructor() { }

    public ngOnInit(): void {
    }

    public open() {

        InAppBrowser.isAvailable()
            .then(() => {

                InAppBrowser.open("http://google.ie")
                    .catch((error) => {
                        alert(error);
                    });
            });

    }
}
