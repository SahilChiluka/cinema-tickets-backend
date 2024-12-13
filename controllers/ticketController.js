const Ticketmodel = require("../models/ticketSchema");

const getticket = async (req, res) => {
    try {
        const ticket = await Ticketmodel.find();
        res.status(200).json(ticket);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

const getticketbyid = async(req, res) => {
    const id = req.params.id;
    try {
        const ticket = await Ticketmodel.findById(id);
        res.status(200).json(ticket);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

const insertticket = async (req, res) => {
    try {
        const ticket = req.body;
        console.log(ticket);
        const ticketData = new Ticketmodel(ticket);
        await ticketData.save();
        res.status(201).json(ticketData);
      } catch (error) {
        console.log(error);
      }
}

const getticketsbyuser = async(req,res) => {
    const id = req.params.id;
    try {
        const user = await Ticketmodel.find({userid : id});
        if(!user) {
            res.status(404).json({msg: 'User not found'});
        }
        res.status(200).json({user});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getticket,
    insertticket,
    getticketbyid,
    getticketsbyuser
}







