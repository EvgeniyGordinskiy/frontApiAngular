import { OnInit } from '@angular/core';

export class Form implements OnInit {

    constructor(
        public params: any,
    ) {  }

    private formData = {};
    private errors =[];
    public get() {
        this.validate();
        return this.formData;
    }
    private validate() {
        Object.keys(this.params).forEach((param) => {
            this.formData[param] = this.params[param].value;
        });
    }
    ngOnInit() {
    }
}
