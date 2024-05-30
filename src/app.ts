// File: index.html
// Author: Fekete János Dávid
// Copyright: 2024, Fekete János Dávid
// Group: Szoft I-1-N
// Date: 2024-05-30
// Github: https://github.com/feketejanosdavid/
// Licenc: GNU GPL

class Calculation {
    AaxisInput?: HTMLInputElement | null;
    BaxisInput?: HTMLInputElement | null;
    CaxisInput?: HTMLInputElement | null;
    ResultInput?: HTMLInputElement | null;
    calcButton?: HTMLButtonElement | null;

    constructor() {
        this.bindHtml();
        this.HandleEvent();
    }

    bindHtml() {
        this.AaxisInput = document.querySelector('#AaxisInput');
        this.BaxisInput = document.querySelector('#BaxisInput');
        this.CaxisInput = document.querySelector('#CaxisInput');
        this.ResultInput = document.querySelector('#result');
        this.calcButton = document.querySelector('#calcButton');
    }

    HandleEvent() {
        this.calcButton?.addEventListener('click', () => {
            this.startCalc();
        });
    }

    startCalc() {
        const Aaxis = Number(this.AaxisInput?.value);
        const Baxis = Number(this.BaxisInput?.value);
        const Caxis = Number(this.CaxisInput?.value);
        const result = this.calcResult(Aaxis, Baxis, Caxis);
        this.RenderResult(result);
        
    }

    calcResult(Aaxis: number, Baxis: number, Caxis: number): number {
        return (4/3) * Math.PI * Aaxis * Baxis * Caxis;
    }


    RenderResult(result:number) {
        if (this.ResultInput) {
            this.ResultInput.value = String(result);
        }
    }
}

new Calculation();