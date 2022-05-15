class Progress {
    private p: number;
    private bar = document.querySelectorAll('#prog-bar')[0] as HTMLElement;

    constructor (p: number) {
        this.p = p;
        this.update();
    }
    update() {
        this.bar.style.width = this.p + '%';
    }  
    countup() {
        if (this.p < 100) { this.p += 10; }
        this.update();
    }
    countdown() {
        if (0 < this.p) { this.p -= 10; }
        this.update();
    }
}
  
var up: any = document.getElementById('up');
var down: any = document.getElementById('down');
var p = new Progress(0);

up.addEventListener('click', () => { p.countup(); });
down.addEventListener('click', () => { p.countdown(); });