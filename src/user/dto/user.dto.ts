export class CreateUserDTO {
    readonly name: string;
    readonly email: string;
    readonly password: string;
}
export class LoginUserDTO {
    readonly email: string;
    readonly password: string;
}