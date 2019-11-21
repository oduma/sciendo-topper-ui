import { DailySituationService } from './daily-situation-service';
import { RepositoryService } from './repository-service';
import { DateProvider } from './date-provider';

describe('DailySituationService', () => {
  it('should create an instance', () => {
    expect(new DailySituationService(new RepositoryService(new DateProvider()))).toBeTruthy();
  });
});
