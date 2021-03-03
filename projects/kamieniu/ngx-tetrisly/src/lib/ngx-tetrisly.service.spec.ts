import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { NgxTetrislyService } from './ngx-tetrisly.service';

describe('NgxTetrislyService', () => {
  let spectator: SpectatorService<NgxTetrislyService>;
  const createService = createServiceFactory(NgxTetrislyService);

  beforeEach(() => (spectator = createService()));

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
