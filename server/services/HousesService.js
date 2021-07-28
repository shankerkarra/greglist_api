import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class HousesService {
  async getAll(query = {}) {
    const houses = await dbContext.houses.find(query)
    return houses
  }

}

export const housesService = new HousesService()
