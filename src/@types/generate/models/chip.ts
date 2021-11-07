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
 * Chip
 * @export
 * @interface Chip
 */
export interface Chip {
    /**
     * 
     * @type {string}
     * @memberof Chip
     */
    value: any;
    /**
     * 
     * @type {string}
     * @memberof Chip
     */
    color: ChipColorEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum ChipColorEnum {
    Blue = 'blue',
    LightBlue = 'lightBlue',
    Green = 'green',
    YellowGreen = 'yellowGreen',
    Yellow = 'yellow',
    Orange = 'orange',
    Red = 'red'
}
