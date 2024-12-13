const logModel = require('../models/logSchema');

const getalllogs = async(req,res) => {
    try {
        const logs = await logModel.find().sort({createdAt: -1});
        res.json(logs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const insertLogs = async(req, res) => {
    const log = req.body;
    try {
        const newLog = new logModel(log);
        await newLog.save();
        res.json(newLog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const editlogbyid = async(req, res) => {
    const id = req.params.id
    try {
        const log = await logModel.findByIdAndUpdate(id, req.body, {new: true});
        if (!log) {
            return res.status(404).json({ message: "Log not found" });
        }
        res.json(log);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getalllogs,
    insertLogs,
    editlogbyid,
}