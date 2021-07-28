import { housesService } from '../Services/HousesService'
import BaseController from '../utils/BaseController'

export class HousesController extends BaseController {
  constructor() {
    super('api/houses')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.destroy)
  }

  /**
   * Get all Houses
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getAll(req, res, next) {
    try {
      const houses = await housesService.getAll(req.query)
      res.send(houses)
    } catch (error) {
      next(error)
    }
  }
  /**
 * Get single House
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */

  async getById(req, res, next) {
    try {
      const house = await housesService.getById(req.params.id)
      req.send(house)
    } catch (error) {
      next(error)
    }
  }

  /**
* Post House
* @param {import("express").Request} req
* @param {import("express").Response} res
* @param {import("express").NextFunction} next
*/
  async create(req, res, next) {
    try {
      const car = await housesService.create(req.body)
      req.send(car)
    } catch (error) {
      next(error)
    }
  }

  /**
* *.put('/:id', this.edit)
* Update an house 
* @param {import("express").Request} req
* @param {import("express").Response} res
* @param {import("express").NextFunction} next
*/
  async updatehouse(req, res, next) {
    try {
      const house = await housesService.updatehouse(req.body)
    }
    catch (error) {
      next(error)
    }
  }
  */
  /**  .delete('/:id', this.destroy)
* Delete a house 
* @param {import("express").Request} req
* @param {import("express").Response} res
* @param {import("express").NextFunction} next
*/

}
