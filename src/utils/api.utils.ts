// utils/api.utils.ts
import { APIRequestContext } from "@playwright/test";

export async function validateStatus200(request: APIRequestContext, url: string) {
  const response = await request.get(url);
  return response.status();
}
