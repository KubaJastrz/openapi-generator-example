/* tslint:disable */
/* eslint-disable */
/**
 * Library
 * Library example
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import {
  Book,
  BookFromJSON,
  BookToJSON,
  RemovedItem,
  RemovedItemFromJSON,
  RemovedItemToJSON,
} from '../models';

export interface BookApiAddBookRequest {
  title?: string;
  author?: string;
  cover?: Blob;
}

export interface BookApiGetBookRequest {
  id: string;
}

export interface BookApiRemoveBookRequest {
  id: string;
}

export interface BookApiRentBookRequest {
  id: string;
}

export interface BookApiReturnBookRequest {
  id: string;
}

/**
 *
 */
export class BookApi extends runtime.BaseAPI {
  /**
   * Add a new book
   */
  async addBookRaw(
    requestParameters: BookApiAddBookRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Book>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const consumes: runtime.Consume[] = [{ contentType: 'multipart/form-data' }];
    // @ts-ignore: canConsumeForm may be unused
    const canConsumeForm = runtime.canConsumeForm(consumes);

    let formParams: { append(param: string, value: any): any };
    let useForm = false;
    // use FormData to transmit files using content-type "multipart/form-data"
    useForm = canConsumeForm;
    if (useForm) {
      formParams = new FormData();
    } else {
      formParams = new URLSearchParams();
    }

    if (requestParameters.title !== undefined) {
      formParams.append('title', requestParameters.title as any);
    }

    if (requestParameters.author !== undefined) {
      formParams.append('author', requestParameters.author as any);
    }

    if (requestParameters.cover !== undefined) {
      formParams.append('cover', requestParameters.cover as any);
    }

    const response = await this.request(
      {
        path: `/book/add`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: formParams,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => BookFromJSON(jsonValue));
  }

  /**
   * Add a new book
   */
  async addBook(
    requestParameters: BookApiAddBookRequest,
    initOverrides?: RequestInit,
  ): Promise<Book> {
    const response = await this.addBookRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Get info about the book
   */
  async getBookRaw(
    requestParameters: BookApiGetBookRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Book>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling getBook.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/book/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(requestParameters.id))),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => BookFromJSON(jsonValue));
  }

  /**
   * Get info about the book
   */
  async getBook(
    requestParameters: BookApiGetBookRequest,
    initOverrides?: RequestInit,
  ): Promise<Book> {
    const response = await this.getBookRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Remove a book
   */
  async removeBookRaw(
    requestParameters: BookApiRemoveBookRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<RemovedItem>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling removeBook.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/book/{id}/remove`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id)),
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => RemovedItemFromJSON(jsonValue));
  }

  /**
   * Remove a book
   */
  async removeBook(
    requestParameters: BookApiRemoveBookRequest,
    initOverrides?: RequestInit,
  ): Promise<RemovedItem> {
    const response = await this.removeBookRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Rent a book
   */
  async rentBookRaw(
    requestParameters: BookApiRentBookRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Book>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling rentBook.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/book/{id}/rent`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id)),
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => BookFromJSON(jsonValue));
  }

  /**
   * Rent a book
   */
  async rentBook(
    requestParameters: BookApiRentBookRequest,
    initOverrides?: RequestInit,
  ): Promise<Book> {
    const response = await this.rentBookRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Return a book
   */
  async returnBookRaw(
    requestParameters: BookApiReturnBookRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Book>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling returnBook.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/book/{id}/return`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id)),
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => BookFromJSON(jsonValue));
  }

  /**
   * Return a book
   */
  async returnBook(
    requestParameters: BookApiReturnBookRequest,
    initOverrides?: RequestInit,
  ): Promise<Book> {
    const response = await this.returnBookRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
