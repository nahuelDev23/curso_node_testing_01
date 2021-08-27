import { VehicleModel } from '../models/vehicle-model'

describe('Classes', () => {
  it('Class vehicleModel', () => {
    const vehicleModel = new VehicleModel()

    expect(vehicleModel.name).toEqual('Nissan')
    expect(vehicleModel.model).toEqual('DXT')
    expect(vehicleModel.year).toBe(2020)
  })
})
