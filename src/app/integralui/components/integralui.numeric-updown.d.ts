import { ElementRef, EventEmitter } from '@angular/core';
import { IntegralUIBaseValueComponent, IntegralUINumericDisplayMode } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
export declare class IntegralUINumericUpDown extends IntegralUIBaseValueComponent {
    protected elemRef: ElementRef;
    protected commonService: IntegralUICommonService;
    protected ctrlMaxValue: number;
    protected ctrlMinValue: number;
    protected currentStep: number;
    protected currentAccelerator: number;
    private valueTimer;
    private valueCount;
    private isChangeActive;
    private stopTimer;
    protected contentSize: any;
    ctrlValueWidth: number;
    leftRightMarginTop: number;
    topBotomMarginLeft: number;
    currentDisplayMode: IntegralUINumericDisplayMode;
    valueElem: ElementRef;
    inboundButtonsElem: ElementRef;
    leftrightButtonsElem: ElementRef;
    topBottomButtonsElem: ElementRef;
    topBottomButtonsChildElem: ElementRef;
    accelerator: number;
    displayMode: IntegralUINumericDisplayMode;
    min: number;
    max: number;
    step: number;
    value: number;
    displayModeChanged: EventEmitter<any>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    getContentWidth(): any;
    updateLayout(): void;
    private changeValueTimerElapsed(flag?);
    private changeValue(flag?);
    decreaseValue(): void;
    increaseValue(): void;
    private startChange(flag?);
    private stopChange();
    ctrlMouseWheel(e: any): void;
    onMouseDown(e: any, flag?: boolean): void;
    onMouseUp(e: any): void;
}
