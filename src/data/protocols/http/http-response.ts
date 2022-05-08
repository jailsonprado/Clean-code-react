export enum HttpStatusCode {
  noContent = 204,
  unathorised = 401
}

export type HttpResponse = {
  statusCode: number
  body?: any
}
