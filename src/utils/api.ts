// Api for golang backend
import { TODO } from "@/types";

const apiEndpoint = "http://localhost:8888";

/**
 * Get the total count of names
 */
export function getNamesTotal(): Promise<TODO> {
  const request = fetch(`${apiEndpoint}/name/total`);
  return request.then(response => response.json());
}
