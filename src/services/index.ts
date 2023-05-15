import Category, { categoryDocument } from "../models/category";
import Message, { messageDocument } from "../models/message";
import Scrap, { scrapDocument } from "../models/scrap";
import User, { userDocument } from "../models/user";


function main(Model) {
    function findAll() {
        return Model.find();
    }

    function findOne(query) {
        return Model.findOne(query);
    }

    function create(query) {
        return Model.create(query);
    }

    function findByQuery(query) {
        return Model.find(query);
    }

    function findById(id) {
        return Model.findById(id)
    }

    function updateById(id: string, query: {}) {
        return Model.findByIdAndUpdate(id, query);
    }

    function updateByFilter(filter: {}, query) {
        return Model.updateMany(filter, query)
    }

    function deleteByFilter(filter: {}) {
        return Model.deleteMany(filter)
    }

    function deleteById(id) {
        return Model.findByIdAndDelete(id)
    }

    return { findAll, findOne, create, findByQuery, findById, updateById, updateByFilter, deleteByFilter, deleteById };
}

export const CategoryService = main(Category);
export const MessageService = main(Message)
export const ScrapService = main(Scrap)
export const UserService = main(User)
