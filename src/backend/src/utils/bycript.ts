import * as bcrypt from 'bcrypt';

const saltRounds = process.env.SALT_ROUNDS || 10;

const hashPassword = (password: string) => bcrypt.hash(password, saltRounds);
const comparePassword = (password: string, hash: string) => bcrypt.compare(password, hash);

export default {
    hashPassword,
    comparePassword,
};