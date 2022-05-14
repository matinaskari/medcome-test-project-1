import { LocalAuthGuard } from '../localAuth.guard';

describe('LocalStrategyGuard', () => {
  it('should be defined', () => {
    expect(new LocalAuthGuard()).toBeDefined();
  });
});
