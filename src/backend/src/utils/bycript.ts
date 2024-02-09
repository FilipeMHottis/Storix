import bcrypt from 'bcryptjs';

const saltRounds = parseInt((process.env.SALT_ROUNDS || '10'), 10);

const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

const comparePassword = async (password: string, hash: string) => {
  const match = await bcrypt.compare(password, hash);
  return match;
};

export default {
  hashPassword,
  comparePassword,
};
