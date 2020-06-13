import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

function hashPassword(password) {
  const hash = bcrypt.hashSync(password, salt);

  return hash;
}

function compare(humanLegibleString, hashPassword) {
  return bcrypt.compareSync(humanLegibleString, hashPassword);
}

export default {
  hashPassword,
  compare,
};
