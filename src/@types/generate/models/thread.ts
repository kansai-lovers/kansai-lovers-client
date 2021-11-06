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
/**
 * Thread sent by member
 * @export
 * @interface Thread
 */
export interface Thread {
    /**
     * 
     * @type {string}
     * @memberof Thread
     */
    username?: any;
    /**
     * 
     * @type {Date}
     * @memberof Thread
     */
    sendDate?: any;
    /**
     * 
     * @type {SkillTag}
     * @memberof Thread
     */
    tag?: any;
    /**
     * 
     * @type {string}
     * @memberof Thread
     */
    description?: any;
    /**
     * 
     * @type {ThreadStamps}
     * @memberof Thread
     */
    stamps?: any;
}
