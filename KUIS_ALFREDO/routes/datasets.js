var express = require('express');
var router = express.Router();
const DataController = require("../Controller/dataset");
const Data = require("../model/dataset");

//CREATE DATA SET UMKM
const createData = (req, res) => {
    const dataset = new Data({
        nama : req.body.nama,
        kecamatan : req.body.kecamatan,
        kelurahan : req.body.kelurahan
    });

    console.log(dataset);
    dataset.save()
    .then((createdData)=>{
        res.status(201).json({
            message : "Data berhasil disimpan",
            datasetId : createdData._id
        });
    }).catch((err)=>{
        console.log(err);
        res.status(500).json();
            message : "Internal Servel ERROR"
    });
    
};

router.post("/", DataController.createData);

module.exports = router;