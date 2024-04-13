import { BadRequestException } from '@nestjs/common';
import { ValidType } from './Enums';

export class Validations {
  private static instance: Validations;
  public static getInstance(): Validations {
    if (!Validations.instance) {
      Validations.instance = new Validations();
    }
    return Validations.instance;
  }

  validateWithRegex(str: string, description: string, ...valid) {
    valid.forEach((item) => {
      if (item === ValidType.NO_SPACE) {
        if (this.validRegex(/\s+/g, str)) {
          throw new BadRequestException(
            `O campo '${description}' não pode conter espaços em branco`,
          );
        }
      }

      if (item === ValidType.NO_MANY_SPACE) {
        if (this.validRegex(/\s +/g, str)) {
          throw new BadRequestException(
            `O campo '${description}' não pode conter 2 ou mais espaços em branco.`,
          );
        }
      }

      if (item === ValidType.IS_STRING) {
        if (this.validRegex(/[\d]/g, str)) {
          throw new BadRequestException(`O campo '${description}' não pode conter números.`);
        }
      }

      if (item === ValidType.IS_NUMBER) {
        if (this.validRegex(/[a-zA-Z!@#$%^&*(),.?":{}|<>]/gm, str)) {
          throw new BadRequestException(`O campo '${description}' deve conter apenas números.`);
        }
      }

      if (item === ValidType.NO_SPECIAL_CHARACTER) {
        if (this.validRegex(/[\\£¢¬!@#$%'_`´=~^&§ªº°;+-/\\¨*(),.?":{}||<>-]/g, str)) {
          throw new BadRequestException(
            `O campo '${description}' não pode conter caracteres especiais.`,
          );
        }
      }

      if (item === ValidType.IS_EMAIL) {
        if (!this.validRegex(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i, str)) {
          throw new BadRequestException(`O campo 'e-mail' informado não é válido.`);
        }
      }

      if (item === ValidType.SPECIAL_CHARACTER) {
        if (!this.validRegex(/[!@#$%^&*(),.?":{}|<>-]/g, str)) {
          throw new BadRequestException(
            `O campo '${description}' deve ter ao menos um caractere especial.`,
          );
        }
      }

      if (item === ValidType.MINIMUM_ONE_NUMBER_STRING_SPECIAL_CHARACTER) {
        if (
          !this.validRegex(
            /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[a-zA-Z])(?=.*[0-9]).+$/gm,
            str,
          )
        ) {
          throw new BadRequestException(
            `O campo '${description}' deve ter ao menos um caractere especial, uma letra e um número`,
          );
        }
      }
    });
  }

  verifyLength(value: string, description: string, min: number = null, max: number = null) {
    if (value === null || value === undefined || value === '') {
      throw new BadRequestException(`O campo '${description}', não pode conter espaços vazios.`);
    }

    if (min !== null) {
      if (value.length < min) {
        throw new BadRequestException(
          `O campo '${description}', não pode ter menos que ${min} caracteres.`,
        );
      }
    }

    if (max !== null) {
      if (value.length > max) {
        throw new BadRequestException(
          `O campo '${description}', não pode ter mais que ${max} caracteres.`,
        );
      }
    }
  }

  validRegex(regex: RegExp, value: string): boolean {
    return regex.test(value);
  }
}
