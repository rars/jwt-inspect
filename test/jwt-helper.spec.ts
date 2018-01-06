import { getTokenExpirationDate, isTokenExpired } from '../src/jwt-helper';

describe('JwtHelper', () => {
  let token: string;

  beforeEach(() => {
    token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.' +
     'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6IjM0YmI5OD' +
     'VjLWIzYzUtNGM3ZS1iYTM4LTBmMDQ3YmM5ZmNlZCIsImlhdCI6MTUxNTI1OTQwOCwiZXhwIjoxNTE1MjYzMDA4fQ.' +
     'Q2abPePIXJs82OxtaNk9QcsPXGWm2cB6uS8v5pfgs34';
  });

  describe('getTokenExpirationDate()', () => {
    it('should return token expiration date from token', () => {
      const expirationDate: Date = getTokenExpirationDate(token);
      expect(expirationDate.valueOf()).toBe(new Date(2018, 0, 6, 18, 23, 28).valueOf());
    });
  });

  describe('isTokenExpired', () => {
    it('should indicate that an old token is expired', () => {
      token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.' +
        'eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE0ODMyOTI3MDAsImV4cCI6MTQ4MzI5MzYwMC' +
        'wiYXVkIjoicmFycy5naXRodWIuaW8iLCJzdWIiOiJUZXN0IGV4cGlyZWQgdG9rZW4iLCJSb2xlIjoiVGVzdCJ9.' +
        'WbbHxg57Ghgxvdfq0sTaWX6kC3t5cMZtDYc4-AYoAUA';
      expect(isTokenExpired(token)).toBe(true);
    });

    it('should indicate that a token with exp in the future has not expired', () => {
      token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.' +
        'eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE0ODMyOTI3MDAsImV4cCI6MjUzMzcwODI5NjAw' +
        'LCJhdWQiOiJyYXJzLmdpdGh1Yi5pbyIsInN1YiI6IlRlc3QgZXhwaXJlZCB0b2tlbiIsIlJvbGUiOiJUZXN0In0.' +
        'wcBgPJHSbD2s_Zw3Te6IXwJ1Vm91Jm2up-CQ9SWYb28';
      expect(isTokenExpired(token)).toBe(false);
    });
  });
});
