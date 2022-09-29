import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-vote-average',
  templateUrl: './vote-average.component.html',
  styleUrls: ['./vote-average.component.scss']
})
export class VoteAverageComponent implements AfterViewInit {

  @Input() cardId!: string;
  @Input() voteAverage!: number;

  private size: number = 34;
  private lineWidth: number = 3;
  private rotate: number = 0;

  ngAfterViewInit(): void {
    this.initializeCanvas();
  }

  private initializeCanvas(): void {

    const graph: HTMLElement | null = document.getElementById(`graph-${this.cardId}`);

    if (graph === null) {
      return;
    }
    const percent: number = this.voteAverage * 10;

    let canvas: HTMLCanvasElement = document.createElement('canvas');
    var span: HTMLSpanElement = document.createElement('span');
    span.textContent = `${percent === 0 ? 'NR' : percent}`;

    var ctx = canvas.getContext('2d');
    canvas.width = canvas.height = this.size;

    if (ctx === null) {
      return;
    }

    graph.appendChild(span);
    graph.appendChild(canvas);

    ctx.translate(this.size / 2, this.size / 2);
    ctx.rotate((-1 / 2 + this.rotate / 180) * Math.PI);

    if (percent === 0) {
      return;
    }

    const radius: number = (this.size - this.lineWidth) / 2;

    const color: string = this.getColor(percent);

    this.drawCircle(ctx, radius, '#6366f1', (100 / 100));
    this.drawCircle(ctx, radius, color, (percent / 100));
  }

  private drawCircle(ctx: any, radius: number, color: string, percent: number): void {
    percent = Math.min(Math.max(0, percent || 1), 1);
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
    ctx.strokeStyle = color;
    ctx.lineCap = 'round';
    ctx.lineWidth = this.lineWidth
    ctx.stroke();
  }

  private getColor(percent: number): string {
    if (percent > 0 && percent < 50) {
      return 'red';
    } else if (percent >= 50 && percent < 70) {
      return 'yellow';
    } else {
      return 'limegreen';
    }
  }

}
