/* eslint-disable */
// tslint:disable
/**
 * Patients Appointment
 * Patient Appointment
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator+.
 * https://github.com/karlvr/openapi-generator-plus
 * Do not edit the class manually.
 */

import { Express } from 'express'
import appointment from './api/appointment'
import * as t from './types'

export default function(app: Express, impl: t.ApiImplementation) {
	appointment(app, impl.appointment)
}
