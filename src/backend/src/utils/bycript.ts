import bcrypt from 'bcryptjs';

const saltRounds = process.env.SALT_ROUNDS || 10;

const hashPassword = async (password: string) => bcrypt.hash(password, saltRounds);
const comparePassword = async (password: string, hash: string) => bcrypt.compare(password, hash);

export default {
    hashPassword,
    comparePassword,
};