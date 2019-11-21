import { RepositoryService } from './repository-service';
import { DateProvider } from './date-provider';

describe('RepositoryService', () => {
  it('should create an instance', () => {
    expect(new RepositoryService(new DateProvider())).toBeTruthy();
  });
});
