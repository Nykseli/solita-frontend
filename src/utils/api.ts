// Api for golang backend
import { NameData, TODO } from "@/types";

const apiEndpoint = "http://localhost:8888";

/**
 * Get the total count of names
 */
export function getNamesTotal(): Promise<TODO> {
  const request = fetch(`${apiEndpoint}/name/total`);
  return request.then(response => response.json());
}

/**
 * Get the amount for a single name
 */
export function getNameAmount(name: string): Promise<TODO> {
  const request = fetch(`${apiEndpoint}/name/amount/${name}`);
  return request.then(response => response.json());
}

/**
 * Get the name data in aphabetical order
 */
export function getNameAlphabeticalOrder(): Promise<NameData> {
  const request = fetch(`${apiEndpoint}/name/sort/name`);
  return request.then(response => response.json());
}

/**
 * Get the name data in pupularity order
 */
export function getNameAmountOrder(): Promise<NameData> {
  const request = fetch(`${apiEndpoint}/name/sort/amount`);
  return request.then(response => response.json());
}
