import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { NgxTetrislyComponent } from './ngx-tetrisly.component';

describe('NgxTetrislyComponent', () => {
  let spectator: Spectator<NgxTetrislyComponent>;
  const createComponent = createComponentFactory(NgxTetrislyComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
