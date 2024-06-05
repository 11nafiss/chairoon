import { v4 as uuidv4 } from "uuid";

export const generateFileName = (originalName) => {
    const uuid = uuidv4();
    const extension = originalName.split(".").pop();
    return `${uuid}.${extension}`;
  };