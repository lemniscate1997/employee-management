const General = require('../utils/general');

class ModelBaseClass {
    constructor(record) {
        this.record = record;
    }

    find(condition, item) {
        for (let key in condition) {
            if (item[key] === undefined || item[key] != condition[key])
                return false;
        }
        return true;
    }

    findOne(condition = null) {
        let response = this.findAll(condition);
        return (response.length > 0 && response[0]) || null;
    }

    findAll(condition = null) {
        let response = this.record;
        if (condition != null) {
            response = response.filter(item => (this.find(condition, item)))
        }
        return response;
    }

    findById(id = -1) {
        return this.findOne({ id: id });
    }

    create(data) {
        const newRecord = { id: General.genUUID(), ...data };
        this.record.push(newRecord);
        return newRecord;
    }

    update(condition = null, newData = {}) {
        let count = 0;
        if (condition != null) {
            this.record = this.record.map(item => {
                if (this.find(condition, item)) {
                    count += 1;
                    return { ...item, ...newData };
                }
                return item;
            })
        }
        return count;
    }

    delete(condition = null) {
        const intial = this.record.length;
        if (condition != null) {
            this.record = this.record.filter(item => !this.find(condition, item));
            return intial - this.record.length;
        }
        this.record = [];
        return intial;
    }
}

module.exports = ModelBaseClass;