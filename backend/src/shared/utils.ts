import * as bcrypt from 'bcrypt';

export class Utils {
  private static instance: Utils;
  public static getInstance(): Utils {
    if (!Utils.instance) {
      Utils.instance = new Utils();
    }
    return Utils.instance;
  }

  async hash(pass: string): Promise<string> {
    const saltOrRounds = 10;
    return bcrypt.hash(pass, saltOrRounds);
  }

  async isMatchHash(value: string, hash: string): Promise<boolean> {
    return bcrypt.compare(value, hash);
  }
}
