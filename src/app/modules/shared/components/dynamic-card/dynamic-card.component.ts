import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-dynamic-card',
  imports: [CommonModule],
  templateUrl: './dynamic-card.component.html',
  styleUrl: './dynamic-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicCardComponent { 
  public title = input<string>('');
  public subtitle = input<string>('');
  public marginTop = input<number>(0);
  public marginTopStyle = computed(()=>`${this.marginTop()}px`)
}
  