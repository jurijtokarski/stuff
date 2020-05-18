import { createHash } from "crypto";

const map = ['U', 'M', 'I', 'N', 'T', 'Y', 'C', 'O', 'E', 'R'];

export const getSHA1Hash = (str: string): string => createHash("sha1").update(str, "utf8").digest("hex");

export const getMD5Hash = (str: string): string => createHash("md5").update(str).digest("hex");

export const getUniqueReadableCode = () => String(Date.now()).split('').map(index => map[Number(index)]).join("");