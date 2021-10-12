import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import * as i0 from "@angular/core";
import * as i1 from "@fortawesome/angular-fontawesome";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
function LanguageSwitchComponent_option_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r1 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", l_r1.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(l_r1.text);
} }
const _c0 = function (a0, a1) { return { "form-control-sm": a0, "form-control-lg": a1 }; };
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
}
LanguageSwitchComponent.ɵfac = function LanguageSwitchComponent_Factory(t) { return new (t || LanguageSwitchComponent)(); };
LanguageSwitchComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LanguageSwitchComponent, selectors: [["polp-gadget-language-switch"]], inputs: { langOptions: "langOptions", initValue: "initValue", size: "size" }, outputs: { changed: "changed" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 7, consts: [[1, "form-inline"], [1, "mr-1", 3, "icon"], [1, "form-control", 3, "ngClass", "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function LanguageSwitchComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "fa-icon", 1);
        i0.ɵɵelementStart(2, "select", 2);
        i0.ɵɵlistener("ngModelChange", function LanguageSwitchComponent_Template_select_ngModelChange_2_listener($event) { return ctx.langValue = $event; })("change", function LanguageSwitchComponent_Template_select_change_2_listener($event) { return ctx.change($event); });
        i0.ɵɵtemplate(3, LanguageSwitchComponent_option_3_Template, 2, 2, "option", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("icon", ctx.faGlobe);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(4, _c0, ctx.isSmallSize, ctx.isLargeSize))("ngModel", ctx.langValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.langOptions);
    } }, directives: [i1.FaIconComponent, i2.SelectControlValueAccessor, i3.NgClass, i2.NgControlStatus, i2.NgModel, i3.NgForOf, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x], styles: ["[_nghost-%COMP%]   .form-inline[_ngcontent-%COMP%]{flex-flow:row}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LanguageSwitchComponent, [{
        type: Component,
        args: [{
                selector: 'polp-gadget-language-switch',
                templateUrl: './language-switch.component.html',
                styleUrls: ['./language-switch.component.scss']
            }]
    }], function () { return []; }, { langOptions: [{
            type: Input
        }], initValue: [{
            type: Input
        }], size: [{
            type: Input
        }], changed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Utc3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtZ2FkZ2V0cy8iLCJzb3VyY2VzIjpbImxpYi9sYW5ndWFnZS1zd2l0Y2gvbGFuZ3VhZ2Utc3dpdGNoLmNvbXBvbmVudC50cyIsImxpYi9sYW5ndWFnZS1zd2l0Y2gvbGFuZ3VhZ2Utc3dpdGNoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7O0lDS3BELGlDQUEwRDtJQUFBLFlBQVU7SUFBQSxpQkFBUzs7O0lBQXZDLDZDQUFtQjtJQUFDLGVBQVU7SUFBViwrQkFBVTs7O0FERTVFLE1BQU0sT0FBTyx1QkFBdUI7SUFrQmhDO1FBaEJBLFlBQU8sR0FBRyxPQUFPLENBQUM7UUFFVCxnQkFBVyxHQUdmLEVBQUUsQ0FBQztRQUVDLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUVqQixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd2QyxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixnQkFBVyxHQUFZLEtBQUssQ0FBQztJQUViLENBQUM7SUFFakIsUUFBUTtRQUNKLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQzNCO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sRUFBRTtZQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2hDLHlDQUF5QzthQUM1QztTQUNKO0lBQ0wsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFXO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7OzhGQXhDUSx1QkFBdUI7NERBQXZCLHVCQUF1QjtRQ1JwQyw4QkFDSTtRQUFBLDZCQUFpRDtRQUNqRCxpQ0FJSTtRQUZJLG9KQUF1QiwrRkFDYixrQkFBYyxJQUREO1FBRTNCLDhFQUEwRDtRQUM5RCxpQkFBUztRQUNiLGlCQUFNOztRQVBPLGVBQWdCO1FBQWhCLGtDQUFnQjtRQUVqQixlQUE0RTtRQUE1RSxzRkFBNEUsMEJBQUE7UUFHeEUsZUFBNkI7UUFBN0IseUNBQTZCOztrRERFaEMsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzthQUNsRDs7a0JBS0ksS0FBSzs7a0JBS0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmFHbG9iZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1nYWRnZXQtbGFuZ3VhZ2Utc3dpdGNoJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbGFuZ3VhZ2Utc3dpdGNoLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9sYW5ndWFnZS1zd2l0Y2guY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZVN3aXRjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICAgIGZhR2xvYmUgPSBmYUdsb2JlO1xuXG4gICAgQElucHV0KCkgbGFuZ09wdGlvbnM6IEFycmF5PHtcbiAgICAgICAgdGV4dDogc3RyaW5nO1xuICAgICAgICB2YWx1ZTogc3RyaW5nO1xuICAgIH0+ID0gW107XG5cbiAgICBASW5wdXQoKSBpbml0VmFsdWU6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIHNpemU6IHN0cmluZyA9ICcnO1xuXG4gICAgQE91dHB1dCgpIGNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBsYW5nVmFsdWU6IHN0cmluZztcbiAgICBpc1NtYWxsU2l6ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzTGFyZ2VTaXplOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubGFuZ1ZhbHVlID0gdGhpcy5pbml0VmFsdWU7XG4gICAgICAgIGlmICh0aGlzLnNpemUgPT0gJ3NtYWxsJykge1xuICAgICAgICAgICAgdGhpcy5pc1NtYWxsU2l6ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaXplID09ICdsYXJnZScpIHtcbiAgICAgICAgICAgIHRoaXMuaXNMYXJnZVNpemUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlcy5pbml0VmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmluaXRWYWx1ZSAhPSB0aGlzLmxhbmdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGFuZ1ZhbHVlID0gdGhpcy5pbml0VmFsdWU7XG4gICAgICAgICAgICAgICAgLy8gTm90ZSB0aGF0IHRoaXMgd2lsbCBub3QgdHJpZ2dlciBldmVudC5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZSgkZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLmNoYW5nZWQuZW1pdCh0aGlzLmxhbmdWYWx1ZSk7XG4gICAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiZm9ybS1pbmxpbmVcIj5cbiAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYUdsb2JlXCIgY2xhc3M9XCJtci0xXCI+PC9mYS1pY29uPlxuICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieydmb3JtLWNvbnRyb2wtc20nOiBpc1NtYWxsU2l6ZSwgJ2Zvcm0tY29udHJvbC1sZyc6IGlzTGFyZ2VTaXplfVwiXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cImxhbmdWYWx1ZVwiXG4gICAgICAgICAgICAoY2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCI+XG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGwgb2YgbGFuZ09wdGlvbnNcIiB2YWx1ZT1cInt7bC52YWx1ZX19XCI+e3tsLnRleHR9fTwvb3B0aW9uPiAgICBcbiAgICA8L3NlbGVjdD5cbjwvZGl2PlxuIl19