import bcrypt from 'bcryptjs';

const saltRounds = process.env.SALT_ROUNDS || 10;

const hashPassword = (password: string) => bcrypt.hashSync(password, saltRounds);
const comparePassword = (password: string, hash: string) => bcrypt.compareSync(password, hash);

export default {
    hashPassword,
    comparePassword,
};