const Data = require("../model/dataset");

const createData= (req, res) => {
    const dataset = new Data({
        nama : req.body.nama,
        kecamatan : req.body.kecamatan,
        kelurahan : req.body.kelurahan
    });


    dataset.save().then((createdData)=>{
        res.status(201).json({
                message : "Data berhasil disimpan",
                datasetId : createdData._id
        });
    });
   
};


module.exports = {createData};