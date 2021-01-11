import { DB } from "./demo-data";
import { NameData } from "@/types";

/**
 * Return all the available name data form the server
 */
export function getData(): Promise<NameData> {
  // Ignore the unused reject since the api will always succeed
  // eslint-disable-next-line
  return new Promise((resolve, _reject) => {
    // Set small timeout to simulate an api call from a real server
    setTimeout(resolve, 500, DB);
  });
}
