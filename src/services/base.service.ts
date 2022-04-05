import { dataSource } from "../providers/mysql";

export default class BaseService {
    tableName;

    constructor(tableName: any) {
        this.tableName = tableName;
    }

    async findAll(query: object): Promise<any> {
        let data = await dataSource.manager.findBy(this.tableName, query)
        return data
    }

    async findById(id: number): Promise<any> {
        let data = await dataSource.manager.findOneBy(this.tableName, { id })
        return data
    }

    async findOne(query: object): Promise<any> {
        let data = await dataSource.manager.findOneBy(this.tableName, query)
        return data
    }

    async create(data: object): Promise<any> {
        let response = await dataSource.manager.save(this.tableName, data)
        return response
    }

    async update(id: number, data: object): Promise<any> {
        let response = await dataSource.manager.update(this.tableName, id, data)
        return response
    }

    async destroy(id: number): Promise<any> {
        let data = await dataSource.manager.delete(this.tableName, id)
        return data
    }
}