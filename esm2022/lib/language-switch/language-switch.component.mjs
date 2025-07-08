import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@fortawesome/angular-fontawesome";
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
export class LanguageSwitchComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Utc3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL25neC1nYWRnZXRzL3NyYy9saWIvbGFuZ3VhZ2Utc3dpdGNoL2xhbmd1YWdlLXN3aXRjaC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9uZ3gtZ2FkZ2V0cy9zcmMvbGliL2xhbmd1YWdlLXN3aXRjaC9sYW5ndWFnZS1zd2l0Y2guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7O0lDS3BELGlDQUEwRDtJQUFBLFlBQVU7SUFBQSxpQkFBUzs7O0lBQXZDLDZDQUFtQjtJQUFDLGNBQVU7SUFBViwrQkFBVTs7QURFNUUsTUFBTSxPQUFPLHVCQUF1QjtJQWtCaEM7UUFoQkEsWUFBTyxHQUFHLE9BQU8sQ0FBQztRQUVULGdCQUFXLEdBR2YsRUFBRSxDQUFDO1FBRUMsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBRWpCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3ZDLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGdCQUFXLEdBQVksS0FBSyxDQUFDO0lBRWIsQ0FBQztJQUVqQixRQUFRO1FBQ0osSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2hDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUM1QixDQUFDO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzVCLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3BCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDaEMseUNBQXlDO1lBQzdDLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFXO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7d0ZBeENRLHVCQUF1QjtvRUFBdkIsdUJBQXVCO1lDUnBDLDhCQUF5QjtZQUNyQiw2QkFBaUQ7WUFDakQsaUNBR2tDO1lBRDFCLG9OQUF1QjtZQUN2Qiw0R0FBVSxrQkFBYyxJQUFDO1lBQzdCLDhFQUEwRDtZQUVsRSxBQURJLGlCQUFTLEVBQ1A7O1lBUE8sY0FBZ0I7WUFBaEIsa0NBQWdCO1lBRWpCLGNBQTRFO1lBQTVFLHNGQUE0RTtZQUM1RSw2Q0FBdUI7WUFFTCxjQUFjO1lBQWQseUNBQWM7OztpRkRFL0IsdUJBQXVCO2NBTG5DLFNBQVM7MkJBQ0ksNkJBQTZCO29CQVE5QixXQUFXO2tCQUFuQixLQUFLO1lBS0csU0FBUztrQkFBakIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUVJLE9BQU87a0JBQWhCLE1BQU07O2tGQVpFLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmFHbG9iZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1nYWRnZXQtbGFuZ3VhZ2Utc3dpdGNoJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbGFuZ3VhZ2Utc3dpdGNoLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9sYW5ndWFnZS1zd2l0Y2guY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZVN3aXRjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICAgIGZhR2xvYmUgPSBmYUdsb2JlO1xuXG4gICAgQElucHV0KCkgbGFuZ09wdGlvbnM6IEFycmF5PHtcbiAgICAgICAgdGV4dDogc3RyaW5nO1xuICAgICAgICB2YWx1ZTogc3RyaW5nO1xuICAgIH0+ID0gW107XG5cbiAgICBASW5wdXQoKSBpbml0VmFsdWU6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIHNpemU6IHN0cmluZyA9ICcnO1xuXG4gICAgQE91dHB1dCgpIGNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBsYW5nVmFsdWU6IHN0cmluZztcbiAgICBpc1NtYWxsU2l6ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzTGFyZ2VTaXplOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubGFuZ1ZhbHVlID0gdGhpcy5pbml0VmFsdWU7XG4gICAgICAgIGlmICh0aGlzLnNpemUgPT0gJ3NtYWxsJykge1xuICAgICAgICAgICAgdGhpcy5pc1NtYWxsU2l6ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaXplID09ICdsYXJnZScpIHtcbiAgICAgICAgICAgIHRoaXMuaXNMYXJnZVNpemUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlcy5pbml0VmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmluaXRWYWx1ZSAhPSB0aGlzLmxhbmdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGFuZ1ZhbHVlID0gdGhpcy5pbml0VmFsdWU7XG4gICAgICAgICAgICAgICAgLy8gTm90ZSB0aGF0IHRoaXMgd2lsbCBub3QgdHJpZ2dlciBldmVudC5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZSgkZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLmNoYW5nZWQuZW1pdCh0aGlzLmxhbmdWYWx1ZSk7XG4gICAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiZm9ybS1pbmxpbmVcIj5cbiAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYUdsb2JlXCIgY2xhc3M9XCJtZS0xXCI+PC9mYS1pY29uPlxuICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieydmb3JtLWNvbnRyb2wtc20nOiBpc1NtYWxsU2l6ZSwgJ2Zvcm0tY29udHJvbC1sZyc6IGlzTGFyZ2VTaXplfVwiXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cImxhbmdWYWx1ZVwiXG4gICAgICAgICAgICAoY2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCI+XG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGwgb2YgbGFuZ09wdGlvbnNcIiB2YWx1ZT1cInt7bC52YWx1ZX19XCI+e3tsLnRleHR9fTwvb3B0aW9uPiAgICBcbiAgICA8L3NlbGVjdD5cbjwvZGl2PlxuIl19