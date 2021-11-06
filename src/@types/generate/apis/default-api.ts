/* tslint:disable */
/* eslint-disable */
/**
 * Skillme API Document
 * This is a Skillme API Document.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hirokikondo86@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { InlineResponse200 } from '../models';
import { Member } from '../models';
import { SkillScore } from '../models';
/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get a member.
         * @summary Get a member.
         * @param {string} memberId memberId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMemberById: async (memberId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'memberId' is not null or undefined
            if (memberId === null || memberId === undefined) {
                throw new RequiredError('memberId','Required parameter memberId was null or undefined when calling getMemberById.');
            }
            const localVarPath = `/members/{memberId}`
                .replace(`{${"memberId"}}`, encodeURIComponent(String(memberId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a member messages.
         * @summary Get a member messages.
         * @param {string} memberId memberId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMemberMessagesById: async (memberId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'memberId' is not null or undefined
            if (memberId === null || memberId === undefined) {
                throw new RequiredError('memberId','Required parameter memberId was null or undefined when calling getMemberMessagesById.');
            }
            const localVarPath = `/members/{memberId}/messages`
                .replace(`{${"memberId"}}`, encodeURIComponent(String(memberId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a member skill score.
         * @summary Get a member skill score.
         * @param {string} memberId memberId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMemberSkillScoreById: async (memberId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'memberId' is not null or undefined
            if (memberId === null || memberId === undefined) {
                throw new RequiredError('memberId','Required parameter memberId was null or undefined when calling getMemberSkillScoreById.');
            }
            const localVarPath = `/members/{memberId}/skillScores`
                .replace(`{${"memberId"}}`, encodeURIComponent(String(memberId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Get members.
         * @summary Get members.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMembers: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/members`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Get a member.
         * @summary Get a member.
         * @param {string} memberId memberId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMemberById(memberId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Member>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).getMemberById(memberId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get a member messages.
         * @summary Get a member messages.
         * @param {string} memberId memberId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMemberMessagesById(memberId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse200>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).getMemberMessagesById(memberId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get a member skill score.
         * @summary Get a member skill score.
         * @param {string} memberId memberId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMemberSkillScoreById(memberId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SkillScore>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).getMemberSkillScoreById(memberId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get members.
         * @summary Get members.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMembers(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Member>>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).getMembers(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Get a member.
         * @summary Get a member.
         * @param {string} memberId memberId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMemberById(memberId: string, options?: any): AxiosPromise<Member> {
            return DefaultApiFp(configuration).getMemberById(memberId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a member messages.
         * @summary Get a member messages.
         * @param {string} memberId memberId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMemberMessagesById(memberId: string, options?: any): AxiosPromise<InlineResponse200> {
            return DefaultApiFp(configuration).getMemberMessagesById(memberId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a member skill score.
         * @summary Get a member skill score.
         * @param {string} memberId memberId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMemberSkillScoreById(memberId: string, options?: any): AxiosPromise<SkillScore> {
            return DefaultApiFp(configuration).getMemberSkillScoreById(memberId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get members.
         * @summary Get members.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMembers(options?: any): AxiosPromise<Array<Member>> {
            return DefaultApiFp(configuration).getMembers(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * Get a member.
     * @summary Get a member.
     * @param {string} memberId memberId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getMemberById(memberId: string, options?: any) {
        return DefaultApiFp(this.configuration).getMemberById(memberId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get a member messages.
     * @summary Get a member messages.
     * @param {string} memberId memberId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getMemberMessagesById(memberId: string, options?: any) {
        return DefaultApiFp(this.configuration).getMemberMessagesById(memberId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get a member skill score.
     * @summary Get a member skill score.
     * @param {string} memberId memberId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getMemberSkillScoreById(memberId: string, options?: any) {
        return DefaultApiFp(this.configuration).getMemberSkillScoreById(memberId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get members.
     * @summary Get members.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getMembers(options?: any) {
        return DefaultApiFp(this.configuration).getMembers(options).then((request) => request(this.axios, this.basePath));
    }
}
