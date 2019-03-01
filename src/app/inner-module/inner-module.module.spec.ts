import { InnerModuleModule } from './inner-module.module';

describe('InnerModuleModule', () => {
  let innerModuleModule: InnerModuleModule;

  beforeEach(() => {
    innerModuleModule = new InnerModuleModule();
  });

  it('should create an instance', () => {
    expect(innerModuleModule).toBeTruthy();
  });
});
