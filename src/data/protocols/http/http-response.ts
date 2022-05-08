export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  unathorised = 401,
  badRequest = 400 
}

export type HttpResponse = {
  statusCode: number
  body?: any
}
