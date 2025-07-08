import * as i0 from '@angular/core';
import { EventEmitter, Component, Output, Input, NgModule } from '@angular/core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i3 from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const _c0 = (a0, a1) => ({ "form-control-sm": a0, "form-control-lg": a1 });
function LanguageSwitchComponent_option_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r1 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", l_r1.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(l_r1.text);
} }
class LanguageSwitchComponent {
    constructor() {
        this.faGlobe = faGlobe;
        this.langOptions = [];
        this.initValue = '';
        this.size = '';
        this.changed = new EventEmitter();
        this.isSmallSize = false;
        this.isLargeSize = false;
    }
    ngOnInit() {
        this.langValue = this.initValue;
        if (this.size == 'small') {
            this.isSmallSize = true;
        }
        else if (this.size == 'large') {
            this.isLargeSize = true;
        }
    }
    ngOnChanges(changes) {
        if (changes.initValue) {
            if (this.initValue != this.langValue) {
                this.langValue = this.initValue;
                // Note that this will not trigger event.
            }
        }
    }
    change($event) {
        this.changed.emit(this.langValue);
    }
    static { this.ɵfac = function LanguageSwitchComponent_Factory(t) { return new (t || LanguageSwitchComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LanguageSwitchComponent, selectors: [["polp-gadget-language-switch"]], inputs: { langOptions: "langOptions", initValue: "initValue", size: "size" }, outputs: { changed: "changed" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 7, consts: [[1, "form-inline"], [1, "me-1", 3, "icon"], [1, "form-control", 3, "ngModelChange", "change", "ngClass", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function LanguageSwitchComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "fa-icon", 1);
            i0.ɵɵelementStart(2, "select", 2);
            i0.ɵɵtwoWayListener("ngModelChange", function LanguageSwitchComponent_Template_select_ngModelChange_2_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.langValue, $event) || (ctx.langValue = $event); return $event; });
            i0.ɵɵlistener("change", function LanguageSwitchComponent_Template_select_change_2_listener($event) { return ctx.change($event); });
            i0.ɵɵtemplate(3, LanguageSwitchComponent_option_3_Template, 2, 2, "option", 3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("icon", ctx.faGlobe);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(4, _c0, ctx.isSmallSize, ctx.isLargeSize));
            i0.ɵɵtwoWayProperty("ngModel", ctx.langValue);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.langOptions);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel, i3.FaIconComponent], styles: ["[_nghost-%COMP%]   .form-inline[_ngcontent-%COMP%]{display:flex;flex-flow:row;align-items:center}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LanguageSwitchComponent, [{
        type: Component,
        args: [{ selector: 'polp-gadget-language-switch', template: "<div class=\"form-inline\">\n    <fa-icon [icon]=\"faGlobe\" class=\"me-1\"></fa-icon>\n    <select class=\"form-control\"\n            [ngClass]=\"{'form-control-sm': isSmallSize, 'form-control-lg': isLargeSize}\"\n            [(ngModel)]=\"langValue\"\n            (change)=\"change($event)\">\n        <option *ngFor=\"let l of langOptions\" value=\"{{l.value}}\">{{l.text}}</option>    \n    </select>\n</div>\n", styles: [":host .form-inline{display:flex;flex-flow:row;align-items:center}\n"] }]
    }], () => [], { langOptions: [{
            type: Input
        }], initValue: [{
            type: Input
        }], size: [{
            type: Input
        }], changed: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LanguageSwitchComponent, { className: "LanguageSwitchComponent", filePath: "lib\\language-switch\\language-switch.component.ts", lineNumber: 9 }); })();

class NgxGadgetsModule {
    static { this.ɵfac = function NgxGadgetsModule_Factory(t) { return new (t || NgxGadgetsModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgxGadgetsModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            FormsModule,
            FontAwesomeModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxGadgetsModule, [{
        type: NgModule,
        args: [{
                declarations: [LanguageSwitchComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    FontAwesomeModule
                ],
                exports: [LanguageSwitchComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxGadgetsModule, { declarations: [LanguageSwitchComponent], imports: [CommonModule,
        FormsModule,
        FontAwesomeModule], exports: [LanguageSwitchComponent] }); })();

/*
 * Public API Surface of ngx-gadgets
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LanguageSwitchComponent, NgxGadgetsModule };
//# sourceMappingURL=polpware-ngx-gadgets.mjs.map
